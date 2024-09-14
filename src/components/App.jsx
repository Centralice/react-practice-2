import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import createGoodBubble from "../utils/goodBubbles";
import createBadBubble from "../utils/badBubbles";
import createNeutralBubble from "../utils/neutralBubble";

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

  const reset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    createGoodBubble();
  }, [feedback.good]);
  useEffect(() => {
    createBadBubble();
  }, [feedback.bad]);
  useEffect(() => {
    createNeutralBubble();
  }, [feedback.neutral]);

  return (
    <>
      <Description />
      <Options
        reset={reset}
        total={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          positive={positiveFeedback}
          total={totalFeedback}
          feedback={feedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
