import { RatingButton, Button } from "./buttons";
import { LogoStarIcon } from "./icons";
import { text, ratings } from "../globals";

export function StepOne({ currentRating, setCurrentRating, setStep }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-veryDarkBlue px-5 font-overpass">
      <div className="flex max-w-sm flex-col gap-8 rounded-3xl bg-darkBlue/50 p-9">
        <LogoStarIcon />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold tracking-wide text-white">{text[0].heading}</h1>
          <p className=" text-sm text-lightGrey">{text[0].content}</p>
        </div>
        <div className="flex justify-between">
          {ratings.map((rating) => {
            return (
              <RatingButton
                key={rating}
                isActive={currentRating === rating}
                onClick={() => setCurrentRating(rating)}
              >
                {rating}
              </RatingButton>
            );
          })}
        </div>
        <Button isDisabled={!currentRating} onClick={currentRating ? () => setStep(2) : null}>
          Submit
        </Button>
      </div>
    </div>
  );
}
