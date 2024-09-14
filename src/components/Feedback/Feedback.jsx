export default function Feedback({
  positive,
  total,
  feedback: { good, neutral, bad },
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
}
