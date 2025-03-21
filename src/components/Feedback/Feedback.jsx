import { useEffect } from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const forPercent = feedback.good + feedback.bad;

  useEffect(() => {
    if (!totalFeedback) {
      // Reset the background and text color when there's no feedback
      document.body.style.backgroundColor = '';
      document.body.style.color = ''; // Reset text color to default
      return;
    }

    const positivePercentage = Math.round((feedback.good / forPercent) * 100);

    if (positivePercentage > 50) {
      document.body.style.backgroundColor = 'green';
      document.body.style.color = ''; // Reset to default color
    } else if (positivePercentage === 50) {
      document.body.style.backgroundColor = 'yellow';
      document.body.style.color = '#242424'; // Set text color to black for 50% positive feedback
    } else {
      document.body.style.backgroundColor = 'red';
      document.body.style.color = ''; // Reset to default color
    }
  }, [feedback]);

  if (!totalFeedback) {
    return <p>No feedback yet</p>;
  }

  const positivePercentage = Math.round((feedback.good / forPercent) * 100);
  let bgClass = styles.default;

  if (positivePercentage > 50) {
    bgClass = styles.positive;
  } else if (positivePercentage === 50) {
    bgClass = styles.neutralPositive;
  } else {
    bgClass = styles.negative;
  }

  return (
    <div className={`${styles.container} ${bgClass}`}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
