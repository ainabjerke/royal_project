import PropTypes from "prop-types";

function FormValidationError({ children }) {
  return <div className="contactForm__error">{children}</div>;
}

FormValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormValidationError;
