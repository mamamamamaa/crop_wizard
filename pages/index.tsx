import { useStore } from "@/lib/store";

export default function Home() {
  const { email, username } = useStore((state) => state);

  return (
    <div>
      {email} : {username}
    </div>
  );
}
