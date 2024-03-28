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
    const valueName = value.target.name;
    setValues({
      ...values,
      [valueName]: values[valueName] + 1,
    });

    if (valueName === "reset") {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveValue = Math.round((values.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />

      <Options value="good" onClick={updateFeedback}>
        Good
      </Options>
      <Options value="neutral" onClick={updateFeedback}>
        Neutral
      </Options>
      <Options value="bad" onClick={updateFeedback}>
        Bad
      </Options>
      {totalFeedback !== 0 && (
        <Options value="reset" onClick={updateFeedback}>
          Reset
        </Options>
      )}

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
