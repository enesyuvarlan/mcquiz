"use client";

import React from "react";
import Link from "next/link";
import StatusBox from "./StatusBox";
import { AnswerButton } from "./AnswerButton";
import { Button } from "@/components/ui/button";
import { rajdhani } from "~/public/fonts/font";

interface QuestionProps {
  questionText: string;
  answers: string[];
  activeQuestion: number;
  totalQuestions: number;
  selectedAnswerIndex: number | null;
  checked: boolean;
  timeLeft: number;
  onSelectAnswer: (answer: string, id: number) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const Questions = ({
  questionText,
  answers,
  activeQuestion,
  totalQuestions,
  selectedAnswerIndex,
  checked,
  timeLeft,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion,
}: QuestionProps) => {
  return (
    <section
      className={`${rajdhani.className} flex flex-col justify-start items-center `}
    >
      <header className="flex justify-between w-full mt-10 mb-8">
        <StatusBox text={`Question ${activeQuestion + 1}/${totalQuestions}`} />
        <StatusBox text={`${timeLeft}`} />
      </header>
      <div className="w-full flex items-start">
        <h2 className="font-bold text-textColor-header dark:text-textColor-header-dark flex-1">
          <span className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4lx">
            {questionText}
          </span>
        </h2>
      </div>

      <div className="w-full mt-6 flex flex-col space-y-4">
        {answers.map((answer, id) => (
          <AnswerButton
            key={id}
            id={id}
            selectedAnswerIndex={selectedAnswerIndex}
            text={answer}
            onClick={() => onSelectAnswer(answer, id)}
          />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Button
          asChild
          variant="default"
          size="responsive"
          className={`mt-10 ${!checked ? "bg-[#B7B2AE] cursor-default hover:bg-[#B7B2AE] focus:bg-[#B7B2AE]" : ""}`}
          disabled={!checked}
          onClick={checked ? onNextQuestion : undefined}
        >
          <Link href="">{isLastQuestion ? "Finish" : "Next Question →"}</Link>
        </Button>
      </div>
    </section>
  );
};
