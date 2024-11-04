export const ensureQuestionMarks = (question: string): string => {
  const formattedQuestion =
    question.charAt(0).toUpperCase() + question.slice(1);
  if (!formattedQuestion.endsWith("?")) {
    return `${formattedQuestion}?`;
  }
  return formattedQuestion;
};

export const capitalizeString = (text: string) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
