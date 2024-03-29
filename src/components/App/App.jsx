import css from "./App.module.css";
import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const [values, setValues] = useState(() => {
    const localValue = localStorage.getItem("saved-clicks");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (value) => {
    setValues({
      ...values,
      [value]: values[value] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(values));
  }, [values]);

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveValue =
    totalFeedback > 0 && Math.round((values.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />

      <Options
        reset={resetFeedback}
        value={values}
        onClick={updateFeedback}
        total={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          options={values}
          total={totalFeedback}
          positive={positiveValue}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
