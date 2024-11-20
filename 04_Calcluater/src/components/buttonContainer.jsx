const Button = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "00",
    "%",
    "/",
    ".",
    "°",
    "=",
  ];

  return (
    <div id="button-container">
      {buttonNames.map((buttonName) => (
        <button onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
};
export default Button;
