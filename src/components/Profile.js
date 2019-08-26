import React from "react";
import "./Profle.css";
import Bat from "./../assets/images/cricket-bat.svg";
import Ball from "./../assets/images/cricket.svg";
import AllRounder from "./../assets/images/allrounder.svg";
import players_profiles from "../data"
import {Carousel} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";

export default class Profile extends React.Component {
    getRating = (num, type) => {
        let newArr = [];
        const imgSource = type==="BAT"? Bat: Ball;
        for(let i = 0; i< num; i++) {
            const ele = <div className="rating">
                <img src={imgSource} alt="" />
            </div>
            newArr.push(ele);
        }
        return newArr;
    }
    getRoleImage = (role) => {
        switch(role) {
            case "ALL_ROUNDER":
                return AllRounder
            case "BATSMAN":
                return Bat;
            case "BOWLER":
                return Ball;
            default:
        }
    }
    render() {
        var settings = {
            dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
          };
        return (
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <Carousel wrap={false} interval={null}>
                        {players_profiles.map((e, i) => {
                            return (
                                <Carousel.Item>
                                    <section class="player-profile">
                                        <div class="statistics">
                                            <div class="bat-rating rating-card">
                                                {this.getRating(e.batting_rating, "BAT")}
                                            </div>
                                            <div class="bowling-rating rating-card">
                                                {this.getRating(e.bowling_rating, "BOWL")}
                                            </div>
                                            <div className="player-image__container">
                                                <div className="player-image__player-type">
                                                    <img src={this.getRoleImage(e.role)} alt="Type" />
                                                </div>
                                                <div class="player-image">
                                                    <img
                                                        src={e.photo}
                                                        alt=""
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="player-details">
                                            <h5 className="player-name">{e.name}</h5>
                                            <h3 className="price">{e.base_price}</h3>
                                        </div>
                                    </section>
                                </Carousel.Item>
                            )
                        })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}
