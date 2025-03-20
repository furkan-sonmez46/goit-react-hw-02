const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const forPercent = feedback.good + feedback.bad;
  if (!feedback.good && !feedback.neutral && !feedback.bad) {
    return <p>No feedback yet</p>;
  }
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((feedback.good / forPercent) * 100)}%</p>
    </div>
  );
};
export default Feedback;
