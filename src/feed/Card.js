import { useState } from "react";
import "./Card.css";

<link
  rel="stylesheet"
  href="https://unpkg.com/@shopify/polaris@7.0.0-rc.1/build/esm/styles.css"
/>;

const Card = ({ cardData }) => {
  // checks if there is a previously stored state of post in localStorage
  const history = localStorage.getItem(cardData.date) ?? null;
  //   console.log("history:" + cardData.date);
  //   console.log(history);
  const previousLikedState = history === "liked";
  const [isLiked, setIsLiked] = useState(previousLikedState);

  const updateClick = () => {
    setIsLiked(!isLiked);
    isLiked
      ? localStorage.setItem(cardData.date, "unliked")
      : localStorage.setItem(cardData.date, "liked");
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(cardData.url);
    alert("Copied URL to Clipboard!");
  };

  //post data displayed to user
  return (
    <div className="Card">
      <h4 className="cardTitle">{cardData.title}</h4>
      <p className="date">{cardData.date}</p>
      {cardData.media_type === "image" ? (
        <img className="image" src={cardData.url} alt="Missing URL" />
      ) : cardData.media_type === "video" ? (
        <iframe title="video" className="video" src={cardData.url} />
      ) : (
        ""
      )}
      <p className="explanation">{cardData.explanation}</p>
      {cardData.explanation && (
        <div className="card-footer">
          {isLiked ? "❤️" : "🤍"}
          <button className="Polaris-Button" onClick={updateClick}>
            {isLiked ? <b>Unlike</b> : <b>Like!</b>}
          </button>
          <button className="Polaris-Button" onClick={copyToClipboard}>
            <b>Share!</b>
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
