import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { agdasima } from "~/public/fonts/font";
import { rajdhani } from "~/public/fonts/font";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto min-h-screen dark:gradient-default-dark p-4 container">
      <header className={agdasima.className}>
        <div className="flex flex-row items-center justify-center mt-[-2rem]">
          <h1 className=" text-7xl md:text-7xl lg:text-8xl xl:text-9xl text-center text-textColor-header dark:text-textColor-header-dark">
            McQuiz
          </h1>
          <figure>
            <Image
              src="/emojis/trophy.svg"
              alt="Trophy Emoji"
              width={24}
              height={24}
              style={{ transform: "rotate(30deg)" }}
              className="responsive-emoji"
            />
          </figure>
        </div>
      </header>

      <section className="flex flex-col items-center">
        <figure>
          <Image
            src="/images/homeImage.png"
            alt="McQueen Car"
            width={500}
            height={500}
            layout="responsive"
            sizes="(max-width:1280px) 35rem, (max-width:1920px) 45rem, 40rem"
          />
        </figure>
        <div className={`${rajdhani.className} max-w-[1080px] text-center `}>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-semibold text-textColor-header dark:text-textColor-header-dark ">
            Create Quizzes and Challenge Your Friends
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-textColor-body dark:text-textColor-body-dark px-3">
            {`Test your knowledge, create exciting quizzes, and share them with your friends. Ready for a challenge? Let\'s see who can score the highest and become the ultimate quiz master!`}
          </p>
        </div>

        <Button asChild variant="default" size="responsive" className="mt-4">
          <Link href="/quiz">Lets Go</Link>
        </Button>
      </section>
      <footer className="fixed bottom-0 text-black flex py-4 text-center justify-center items-center">
        <p className="text-sm mr-1">
          Made with by{" "}
          <a
            href="https://github.com/enesyuvarlan"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enes Yuvarlan
          </a>
        </p>
        <Link href="https://github.com/enesyuvarlan">
          <figure>
            <Image
              src="/images/github-mark.svg"
              alt="Trophy Emoji"
              width={20}
              height={20}
            />
          </figure>
        </Link>
      </footer>
    </main>
  );
}
