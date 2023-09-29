import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/user-service";
import axios from "axios";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        console.log(userData)
         axios.post("http://localhost:9000/profile/login", userData)
           .then(function (response) {
             console.log(response.status, response.data.token);
           })
           .catch(function (error) {
            console.log(error);
           });
        navigate("/feed");
    }
    
    return (
        <div className="login_page">
            <form className="login_form" onSubmit={handleSubmit}>
                <img className="logo" src="twitter-logo.svg"/>
                <h1 className="login">Log in to Twitter</h1>
                <div className="input">
                    <input type = "email" placeholder="Phone number, email address" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type = "password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="type" className="btn btn-primary btn-lg rounded-pill">Log In</button>
               </div> 
            </form>
            <div className="option">
            <p>Forgot password?</p>
            <a href="/signup">Sign up to Twitter</a>
            </div>
        </div>
    )

}

export default Login