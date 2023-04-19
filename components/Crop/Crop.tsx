import { FC, useEffect, useRef } from "react";
import Cropper from "cropperjs";
import Image from "next/image";
import Monkey from "../../public/monkey.jpg";

export const Crop: FC = () => {
  const imageRef = useRef(null);
  // const cropper = new Cropper();

  useEffect(() => {
    if (imageRef.current) {
      // imageRef.current.focus();
    }
  }, []);

  return (
    <>
      <Image src={Monkey} alt="Monkey image" ref={imageRef} />;
    </>
  );
};
