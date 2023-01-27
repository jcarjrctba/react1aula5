import PropTypes from "prop-types";

const Button = ({ button, noClique }) => {
  return <button onClick={noClique}>{button}</button>;
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
  noClique: PropTypes.func.isRequired,
};

Button.defaultProps = {
  button: "Login",
};

export default Button;
