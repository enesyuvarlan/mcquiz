"use client";
import React, { useState } from "react";
import { ensureQuestionMarks } from "@/utils/formats";
import useTimer from "@/hooks/useTimer";
import { Questions } from "./Questions";
import Results from "./Results";

interface QuizProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
  userId: string | undefined;
}

export const Quiz = ({ questions, userId }: QuizProps) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setChecked(false);
    setResults((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);

      fetch("@/api/quizresult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          quizScore: results.score,
          correctAnswers: results.correctAnswers,
          wrongAnswers: results.wrongAnswers,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Quiz", data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };
  const timeLeft = useTimer({ duration: 20, onTimeComplete: nextQuestion });

  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const formattedQuestion = ensureQuestionMarks(question);

  const handleSelectAnswer = (answer: string, id: number) => {
    setChecked(true);
    setSelectedAnswerIndex(id);
    if (answer === correctAnswer) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer("");
    }
  };

  return (
    <div className="min-h-[600px] mx-auto">
      {showResults ? (
        <Questions
          questionText={formattedQuestion}
          answers={answers}
          activeQuestion={activeQuestion}
          totalQuestions={questions.length}
          selectedAnswerIndex={selectedAnswerIndex}
          checked={checked}
          timeLeft={timeLeft}
          onSelectAnswer={handleSelectAnswer}
          onNextQuestion={nextQuestion}
          isLastQuestion={activeQuestion === questions.length - 1}
        />
      ) : (
        <Results />
      )}
    </div>
  );
};
