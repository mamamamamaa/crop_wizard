import { FC, useEffect, useState } from "react";

interface Props {
  toggleTimeOut: Function;
}

export const ReverifyTimer: FC<Props> = ({ toggleTimeOut }) => {
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      toggleTimeOut();
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  return (
    <div>
      <h1 className="text-blue-500 text-2xl">{timer}</h1>
    </div>
  );
};
