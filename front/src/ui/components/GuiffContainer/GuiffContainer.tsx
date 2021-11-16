import React from "react";
import { StoredMemeData } from "../../../core/domain/StoredMemeData";
import GuiffCard from "../GuiffCard/GuiffCard";
import "./GuiffContainer.css";

export const GuiffContainer: React.VFC<{ memes: StoredMemeData[] }> = ({
  memes,
}) => {
  const JsxMemesArray = [];

  for (let i = 0; i < memes.length; i++) {
    JsxMemesArray.push(<GuiffCard meme={memes[i]} key={memes[i].id} />);
  }
  return <div className="guif-container">{JsxMemesArray}</div>;
};

export default GuiffContainer;