import { FC } from "react";
import Cropper from "cropperjs";
import Image from "next/image";
import Monkey from "../public/monkey.jpg";

export const Crop: FC = () => {
  const cropper = new Cropper();

  return (
    <>
      <Image src={Monkey} alt="Monkey image" />
    </>
  );
};
