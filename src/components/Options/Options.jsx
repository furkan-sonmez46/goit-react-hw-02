import { useState } from 'react';
import styles from './Options.module.css';

const Options = ({ feedback, updateFeedback, resetFeedback }) => {
  const [bgClass, setBgClass] = useState(styles.default);

  const handleClick = type => {
    updateFeedback(type);
    if (type === 'good') setBgClass(styles.good);
    else if (type === 'neutral') setBgClass(styles.neutral);
    else if (type === 'bad') setBgClass(styles.bad);
  };

  const handleReset = () => {
    resetFeedback();
    setBgClass(styles.default);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={`${styles.container} ${bgClass}`}>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;