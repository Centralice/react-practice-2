export default function Feedback({ feedback: { good, neutral, bad } }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: 1</li>
      <li>Positive: 80%</li>
    </ul>
  );
}
