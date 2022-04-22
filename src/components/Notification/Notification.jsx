import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <p className="s.notification">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
