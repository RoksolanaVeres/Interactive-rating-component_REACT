import { ThankYouIcon } from "./icons";
import { text } from "../globals";

export function StepTwo({ rating }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-veryDarkBlue font-overpass">
      <div className="flex max-w-sm flex-col items-center gap-8 rounded-3xl bg-darkBlue/50 p-9">
        <ThankYouIcon />
        <div className="rounded-full bg-darkBlue px-5 py-1 text-base text-orange">
          You selected {rating} out of 5
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl font-bold tracking-wide text-white">{text[1].heading}</h1>
          <p className=" text-center text-sm text-lightGrey">{text[1].content}</p>
        </div>
      </div>
    </div>
  );
}
