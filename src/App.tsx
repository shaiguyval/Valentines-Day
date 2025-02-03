import { useState } from "react";
import "./App.css";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false); // Track if the button has been clicked
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
  setNoCount(noCount + 1);
  setIsClicked(true); // Disable the button after click
};

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Baba Last chance!",
      "Surely not?",
      "IM DYING!",
      "PRINCESS STOPPPPPP",
      "BUBBLE NEEDS YOU",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "JUST SAY YESSSSS!!!!!!!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">My Princess , 1 Year down forever to go!!!!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Princess Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

<button
  onClick={handleNoClick}
  className={`no-button ${isClicked ? 'move-away' : ''}`}
  disabled={isClicked}
>
  {noCount === 0 ? "No" : getNoButtonText()}
</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
