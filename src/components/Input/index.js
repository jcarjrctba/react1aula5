import PropTypes from "prop-types";

const Input = ({ label, hideContent, passarValor }) => {
  return (
    <div>
      <label for="input">{label}</label>
      <input
        onChange={passarValor}
        type={hideContent ? "password" : "text"}
        name="input"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

Input.defaultProps = {
  label: "Usuário",
};

export default Input;
