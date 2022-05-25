import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';
function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map((el, idx) => (
    <div className={s.fbButns}>
      <li className={s.button}>
        <button key={idx} type="button" onClick={() => onLeaveFeedback(el)}>
          {el}
        </button>
      </li>
    </div>
  ));
  return <>{elements}</>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};