import { FC, useEffect, useState } from "react";

interface Props {
  setTimeOut: Function;
}

export const ReverifyTimer: FC<Props> = ({ setTimeOut }) => {
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      setTimeOut(true);
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
};
