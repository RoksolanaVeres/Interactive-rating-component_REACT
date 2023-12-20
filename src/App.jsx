import { useState } from "react";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";

export default function App() {
  const [currentRating, setCurrentRating] = useState(null);
  const [step, setStep] = useState(1);
  return step === 1 ? (
    <StepOne currentRating={currentRating} setCurrentRating={setCurrentRating} setStep={setStep} />
  ) : (
    <StepTwo rating={currentRating} />
  );
}
