import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul>
        <li>Total: {countTotalFeedback}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral : PropTypes.number.isRequired,
  bad : PropTypes.number.isRequired,
  countTotalFeedback : PropTypes.number.isRequired,
  countPositiveFeedbackPercentage : PropTypes.number.isRequired,
};

export default Statistics;
