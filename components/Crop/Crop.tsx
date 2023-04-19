import { FC, useEffect, useRef } from "react";
import Image from "next/image";

export const Crop: FC = () => {
  const imageRef = useRef(null);
  // const cropper = new Cropper();

  useEffect(() => {
    if (imageRef.current) {
      // imageRef.current.focus();
    }
  }, []);

  return <></>;
};
