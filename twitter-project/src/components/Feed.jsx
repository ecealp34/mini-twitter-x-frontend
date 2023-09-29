import React, {useState} from "react";
import axios from "axios";
import "../App.css"
import Register from "./Register";
import Login from "./Login";
import NavBar from "./NavBar";
import TweetList from "./TweetList";
import Trends from "./Trends";

const Feed = () => {
    return(
        <div className="feedPage">
        <NavBar />
        <TweetList />
        <Trends/>
        </div>
    )
}

export default Feed;