import React from "react";
import { rajdhani } from "~/public/fonts/font";
import { agdasima } from "~/public/fonts/font";
import { StatusCard } from "./StatusCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ResultsProps {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
}

export default function Results({
  score,
  correctAnswers,
  wrongAnswers,
  totalQuestions,
}: ResultsProps) {
  const colors = {
    percentage: "bg-background-statusCard-red",
    totalQuestion: "bg-background-statusCard-green",
    totalScore: "bg-background-statusCard-blue",
    correctAnswers: "bg-background-statusCard-yellow",
    wrongAnswers: "bg-background-statusCard-purple",
  };

  const mock = [
    {
      title: "PERCENTAGE",
      value: `${(score / 50) * 100}%`,
      color: colors.percentage,
    },
    {
      title: "TOTAL QUESTION",
      value: totalQuestions,
      color: colors.totalQuestion,
    },
    { title: "TOTAL SCORE", value: score, color: colors.totalScore },
    {
      title: "CORRECT ANSWERS",
      value: correctAnswers,
      color: colors.correctAnswers,
    },
    {
      title: "WRONG ANSWERS",
      value: wrongAnswers,
      color: colors.wrongAnswers,
    },
  ];

  return (
    <section className={`${rajdhani.className} container`}>
      <h1
        className={`${agdasima.className} mt-5 text-center text-5xl md:text-5xl lg:text5xl xl:text-6xl text-textColor-header  dark:text-textColor-header-dark`}
      >
        Result
      </h1>
      <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-3 mt-10 w-max-[300px] sm:w-max-[300px] md:w-max-[400px] lg:w-max-[500px] xl:w-max-[600px]">
        {mock.map((card, index) => (
          <StatusCard
            key={index}
            title={card.title}
            value={card.value}
            color={card.color}
          />
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <Button
          asChild
          variant="default"
          size="responsive"
          className="mt-10 font-bold"
          onClick={() => window.location.reload()}
        >
          <Link href="/quiz">Restart</Link>
        </Button>
      </div>
    </section>
  );
}
