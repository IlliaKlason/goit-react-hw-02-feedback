import PropTypes from 'prop-types';

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return options.map(buttonName => {
    return (
      <button
        key={buttonName}
        type="button"
        onClick={onLeaveFeedback}
        name={buttonName}
      >
        {buttonName}
      </button>
    );
  });
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
