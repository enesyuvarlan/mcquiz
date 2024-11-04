import { getByUserId } from "@/actions/getUser";
import { getData } from "@/actions/getData";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import { Quiz } from "../_components/Quiz";

const QuizPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const user = await getByUserId(userId);
  const questions = await getData();

  return (
    <main>
      <div className="container mx-auto">
        <Quiz questions={questions} userId={user?.id} />
      </div>
    </main>
  );
};

export default QuizPage;
