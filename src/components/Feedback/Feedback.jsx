const Feedback = ({ options, total, positive }) => {
  return (
    <ul>
      <li>
        <p>Good: {options.good}</p>
      </li>
      <li>
        <p>Neutral: {options.neutral}</p>
      </li>
      <li>
        <p>Bad: {options.bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive: {positive}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
