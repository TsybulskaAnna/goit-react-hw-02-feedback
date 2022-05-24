import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.scss';

function FeedbackOptions ({onLeaveFeedback}) { 
  return (
      <div className={s.fbButns}>
          <button  className={s.button} onClick={() => onLeaveFeedback('good')} type="button">
            Good
          </button>
          <button className={s.button} onClick={() => onLeaveFeedback('neutral')} type="button">
            Neutral
          </button>
          <button className={s.button} onClick={() => onLeaveFeedback('bad')} type="button">
            Bad
          </button>
        </div>
  )
  }

export default FeedbackOptions;

FeedbackOptions.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
