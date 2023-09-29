import React, {useState} from "react";
import "../App.css"
import axios from "axios";

const TweetList = () => {

    const[post, setPost] = useState("");
        
        const handleTweet = (e) => {
            e.preventDefault();
            const user = {name, email, birthDate}
            console.log(user)
            axios.get("http://localhost:9000/tweet/", {
                post: post
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
        }
    
    return (
            <div className="feed_page">
                    <div className="feed"> 
                        <p className="tweet">Home</p>
                    </div> 
                    <div className="tweet_input">
                        <form>
                            <div className="text_input">
                                <img src="Ellipse 3.svg"/>
                                <input type = "text" placeholder="What's happening"/>
                            </div>
                            <div className="icon_button">
                                <div className="icon">
                                    <img  src="image.svg"/>  
                                    <img  src="Vector (5).svg"/>
                                    <img  src="Vector (4).svg"/>
                                    <img  src="Vector (6).svg"/>
                                    <img  src="Frame.svg"/> 
                                </div>
                                <button onclick={handleTweet} type="type" className="btn btn-primary btn-lg rounded-pill " style={{marginLeft: '8em'}}>Tweet</button>
                            </div>
                        </form>
                    </div>
               
                
        </div>
    )

 }

export default TweetList;