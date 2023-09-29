import React from "react";
import "../App.css"
import axios from "axios";

const Trends = () => {
    return (
        
        <div>
             <div>
                <input type = "text" placeholder="Search Twitter"/>
                </div>
               <div>
                <h4>Trends for you</h4>
               </div>
               <div>
                <p>Trending in Germany</p>
                <h5>Revolution</h5>
                <p>50.4K Tweets</p>
               </div>
               <div>
                <p>Trending in Germany</p>
                <h5>Revolution</h5>
                <p>50.4K Tweets</p>
               </div>
               <div>
                <p>Trending in Germany</p>
                <h5>Revolution</h5>
                <p>50.4K Tweets</p>
               </div>
               <p style={{color: '#1DA1F2'}}>Show more</p>
               
               <div>
                <h3>You might like</h3>
                  <div className="info">
                    <img src="Ellipse 3.svg"/>
                <div className="info_span">
                    <span style={{fontWeight: 'bold'}}>Bobur</span>
                    <span>@bobur_mavlonov</span>
                </div>
                <button>Follow</button>
           </div>
           <div className="info">
                    <img src="Ellipse 3.svg"/>
                <div className="info_span">
                    <span style={{fontWeight: 'bold'}}>Bobur</span>
                    <span>@bobur_mavlonov</span>
                </div>
            <button>Follow</button>
           </div>
           <p style={{color: '#1DA1F2'}}>Show more</p>
           </div>
               </div>
               
    )
}

export default Trends
