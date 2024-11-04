import React from "react";
import { rajdhani } from "~/public/fonts/font";
import { agdasima } from "~/public/fonts/font";
import { StatusCard } from "./StatusCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Results() {
  const colors = {
    percentage: "bg-background-statusCard-red",
    totalQuestion: "bg-background-statusCard-green",
    totalScore: "bg-background-statusCard-blue",
    correctAnswers: "bg-background-statusCard-yellow",
    wrongAnswers: "bg-background-statusCard-purple",
  };

  const mock = [
    { title: "PERCENTAGE", value: "20%", color: colors.percentage },
    { title: "TOTAL QUESTION", value: "15", color: colors.totalQuestion },
    { title: "TOTAL SCORE", value: "10", color: colors.totalScore },
    { title: "CORRECT ANSWERS", value: "2", color: colors.correctAnswers },
    { title: "WRONG ANSWERS", value: "13", color: colors.wrongAnswers },
  ];

  return (
    <section
      className={`${rajdhani.className} flex flex-col justify-start items-center `}
    >
      <h1
        className={`${agdasima.className} mt-5 text-center text-4xl md:text-4xl lg:text5xl xl:text-6xl text-textColor-header  dark:text-textColor-header-dark`}
      >
        Result
      </h1>
      <div>
        {mock.map((card, index) => (
          <StatusCard
            key={index}
            title={card.title}
            value={card.value}
            color={card.color}
          />
        ))}
      </div>
      <div>
        <Button
          asChild
          variant="default"
          size="responsive"
          className="mt-4 font-bold"
        >
          <Link href="/quiz">Restart</Link>
        </Button>
      </div>
    </section>
  );
}
