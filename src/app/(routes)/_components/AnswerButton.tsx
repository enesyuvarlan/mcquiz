import { capitalizeString } from "@/utils/formats";
import React from "react";
import { rajdhani } from "~/public/fonts/font";

interface AnswerButtonProps {
  text: string;
  onClick: () => void;
  selectedAnswerIndex: number | null;
  id: number;
}

export const AnswerButton = ({
  text,
  onClick,
  selectedAnswerIndex,
  id,
}: AnswerButtonProps) => {
  const capitalizedText = capitalizeString(text);

  return (
    <button
      onClick={onClick}
      className={`${rajdhani.className} w-full py-3 px-6 bg-textColor-answerButton dark:bg-textColor-answerButton-dark rounded-full text-left transition-colors duration-200 ease-in-out text-2xl md:text-2xl lg:text-3xl xl:text-3xl ${selectedAnswerIndex === id && "bg-textColor-button-primary"}`}
    >
      {capitalizedText}
    </button>
  );
};
