import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
}
