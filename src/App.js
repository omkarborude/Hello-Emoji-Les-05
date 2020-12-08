import React, { useState } from "react";
import "./styles.css";

// it is  emoji collection arrey
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😎": "Smiling face with sunglasses",
  "😘": "Face blowing a kiss",
  "😇": "Smiling face with Halo",
  "😍": "Heart eyes",
  "😝": "Tongue out",
  "😵": "Dizzy face",
  "😌": "Relieved face",
  "😪": "Sleepy face",
  "😋": "Goofy",
  "😈": "Smiling Face with Horns",
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🦶": "Foot",
  "👂": "Ear",
  "🦻": "Ear with Hearing Aid",
  "👃": "Nose",
  "🧠": "Brain",
  "💄": "Lipstick",
  "💍": "Ring",
  "💼": "Briefcase",
  "🩸": "Drop of Blood",
  "👑": "Crown"
};

// defining designing , styles
const inputstyle = {
  //<< for input style
  border: "2px solid black",
  borderRadius: "10px",
  padding: "15px",
  minWdth: "80%"
};
const emojidivstyle = {
  //<< for emoji div style
  width: "40%",
  margin: "auto",
  border: "1px none ",
  backgroundColor: "#F0E68C",
  fontWeight: "800",
  padding: "1rem",
  borderRadius: "1rem"
};

//defining object emojiDictionary
const emojis = Object.keys(emojiDictionary);

// real start
export default function App() {
  const [meaning, setMeaning] = useState(" ");

  //define func emojichange handling
  function emojichangeHandler(event) {
    var inputemoji = event.target.value;

    var meaning = emojiDictionary[inputemoji];

    if (meaning === undefined) {
      meaning = "we don't have this in !!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    // output design structure
    <div className="App">
      <h1> 😎 Hello Emojiii !! 😎 </h1>
      <p style={{ fontWeight: "normal" }}>
        You can also Enter an emoji here or click on any emoji !!
      </p>
      <input
        onChange={emojichangeHandler}
        placeholder={"Find Your Emoji"}
        style={inputstyle}
      />
      <h2>{meaning}</h2>

      <h3 style={{ color: "yellow" }}> Emoji's We Have </h3>

      <div style={emojidivstyle}>
        {emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "30px",
              padding: "35px",
              cursor: "pointer"
            }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
