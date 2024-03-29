import css from "./Options.module.css";

const Options = ({ onClick, reset, total, value, type = "button" }) => {
  return (
    <>
      {Object.keys(value).map((element) => {
        return (
          <button
            className={css.btn}
            key={element}
            onClick={() => onClick(element)}
            name={element}
            type={type}
          >
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </button>
        );
      })}
      {total !== 0 && (
        <button className={css.btn} onClick={reset} type={type}>
          Reset
        </button>
      )}
    </>
  );
};
export default Options;
