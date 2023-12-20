export function RatingButton({ isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`grid h-12 w-12 place-items-center rounded-full bg-darkBlue font-bold text-lightGrey transition-all duration-500 hover:bg-orange hover:text-white ${
        isActive ? "bg-lightGrey text-white" : ""
      } `}
    >
      {children}
    </button>
  );
}

export function Button({ onClick, children, isDisabled }) {
  return (
    <button
      onClick={onClick}
      className={`${
        isDisabled
          ? "cursor-not-allowed bg-lightGrey"
          : " bg-orange hover:bg-white hover:text-orange"
      } w-full rounded-full py-3  font-bold uppercase tracking-widest text-white transition-all duration-500`}
    >
      {children}
    </button>
  );
}
