import React, { useEffect, useState } from "react";

const Time = ({ styles }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <span className={`${styles.text.colorSecondary.class} text-sm`}>
        {date.toLocaleString()}
      </span>
    </div>
  );
};

export default Time;
