import { prismadb } from "@/lib/db";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET_KEY;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    await prismadb.user.create({
      data: {
        username: payload.data.username,
        email: payload.data.email_addresses[0].email_address,
        profilePic: payload.data.image_url,
        clerkUserId: payload.data.id,
      },
    });
  }

  if (eventType === "user.updated") {
    await prismadb.user.update({
      where: {
        clerkUserId: payload.data.id,
      },
      data: {
        username: payload.data.username,
        email: payload.data.email_addresses[0].email_address,
        profilePic: payload.data.image_url,
      },
    });
  }

  if (eventType === "user.deleted") {
    const exitingUser = await prismadb.user.findUnique({
      where: {
        clerkUserId: payload.data.id,
      },
    });

    if (exitingUser) {
      await prismadb.user.delete({
        where: {
          clerkUserId: payload.data.id,
        },
      });
    }
  }
  return new Response("", { status: 200 });
}
