import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/person/1.jpeg" alt="" />
          <input
            placeholder="what's in your mind aarush"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">photo or video</span>
            </div>

            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">feelings</span>
            </div>
          </div>

          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
