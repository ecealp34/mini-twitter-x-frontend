import axios from "axios";
import "../App.css"
import { Button } from "bootstrap";

const NavBar = () => {
    return(
        <div className="navBar_list">
            <div>
                <img className="logo" src="twitter-logo.svg" style={{marginLeft: '2em'}}/>
            </div>
            <div className="navBar">
                <div className="navBar_option">
                    <img src="home fill.svg"/>
                    <img src="explore.svg"/>
                    <img src="notification.svg"/>
                    <img src="messages.svg"/>
                    <img src="Vector.svg"/>
                    <img src="lists.svg"/>
                    <img src="profile outline.svg"/>
                    <img src="more.svg"/>
                </div> 
                <div className="navbar_option" > 
                    <p>Explore</p>
                    <p>Home</p>
                    <p>Notifications</p>
                    <p>Messages</p>
                    <p>Bookmarks</p>
                    <p>Lists</p>
                    <p>Profile</p>
                    <p>More</p>
                </div> 
            </div>
            <button className="btn btn-primary btn-lg rounded-pill w-100 p-2 mt-4">Tweet</button>
           <div className="info">
            <img src="Ellipse 3.svg"/>
            <div className="info_span">
                <span style={{fontWeight: 'bold'}}>Bobur</span>
                <span>@bobur_mavlonov</span>
            </div>
            <img src="Vector (3).svg"/>
           </div>
        </div>
           
    )
}

export default NavBar