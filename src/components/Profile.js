import React from "react";
import "./Profle.css";
import Bat from "./../assets/images/cricket-bat.svg";
import Ball from "./../assets/images/cricket.svg";
import AllRounder from "./../assets/images/allrounder.svg";
import Star from "./../assets/images/star.svg";

export default class Profile extends React.Component {
  render() {
    return (
      <section class="card">
        <div class="image">
            <div class="bt-card b-card">
                <div className="rating">
                    <img src={Star} />
                </div>
            </div>
          <div class="bw-card b-card" />
          <div class="p-i">
            <img src="https://everest.engineering/static/media/lokesh.fde43171.png" />
          </div>
        </div>
        <div class="details">
          <h5>Lokesh Rongali</h5>
          <h3>$10</h3>
        </div>
      </section>
    );
  }
}
