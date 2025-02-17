import { unstable_noStore as noStore } from "next/cache";
import { CurrentTimeFromAPI } from "./components/CurrenTimeFromAPI";

export default function Home() {
  noStore();

  const timeOnServer = new Date().toLocaleTimeString("en-US");

  return (
    <>
      <p>
        This is a Next.js application hosted on Azure Static Web Apps with
        hybrid rendering. The time on the server is
        <strong className="ml-1">{timeOnServer}</strong>.
      </p>
      <CurrentTimeFromAPI />
    </>
  );
}
