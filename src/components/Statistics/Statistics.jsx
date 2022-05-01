import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li className={s.stat}>good: {good}</li>
      <li className={s.stat}>neutral: {neutral}</li>
      <li className={s.stat}>bad: {bad}</li>
      <li className={s.stat}>total: {total}</li>
      <li className={s.stat}>positivePercentage: {positivePercentage} %</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
