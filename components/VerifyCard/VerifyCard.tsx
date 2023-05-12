import { FC, useState } from "react";
import { useAuthStore } from "@/lib/authStore";
import { Button } from "flowbite-react";
import { ReverifyTimer } from "@/components/ReverifyTimer/ReverifyTimer";
import style from "./VerifyCard.module.css";

export const VerifyCard: FC = () => {
  const [isTimeOut, setTimeOut] = useState<boolean>(false);

  const { email, username } = useAuthStore((state) => state);

  return (
    <>
      <section className={style.verifyCard}>
        <article className={style.verifyMessage}>
          <p>Dear {username},</p>
          <p>
            To ensure the security of your account, please complete the
            verification process by checking your email inbox at {email}. A
            verification email has been sent to you. If you haven&apos;t
            received the email yet, please make sure to check your spam folder.
          </p>
          <p>
            If you still haven&apos;t received the email, you can click the
            button below to resend the verification email. Please note that the
            resend option will be available after 30 seconds.
          </p>
          <div className="flex justify-between items-center">
            <Button disabled={!isTimeOut}>Resend Verification Email</Button>
            <ReverifyTimer setTimeOut={setTimeOut} />
          </div>
          <p>Thank you for your cooperation.</p>
          <p>
            Best regards,
            <br />
            <span className="text-gray-900">
              Crop <span className="text-blue-500">Wizard</span>
            </span>
          </p>
        </article>
      </section>
    </>
  );
};
