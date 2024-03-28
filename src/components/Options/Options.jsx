import css from "./Options.module.css";

const Options = ({ onClick, value, type = "button", children }) => {
  return (
    <button className={css.btn} name={value} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Options;
