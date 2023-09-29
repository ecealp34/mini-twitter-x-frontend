import React from "react"
import "../App.css"

const MainPage = () => {
    
    return (
        <div className="main_page">
            <div className="container">
                <img src="back-twitter.svg" className="web_page"/>
                    <div className="mainpage_account">
                        <img src="twitter-logo.svg" width={"50px"} height={"41px"}/>
                        <p style={{fontWeight: 'bolder', fontSize: '50px', width: '80%'}}>Happening now</p>
                        <p style={{fontWeight: 'bolder', fontSize: '25px'}}>Join Twitter today</p>
                        <p className="info_web">By singing up you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>.</p>
                        <p className="account">Already have an account? <a href="/signin"><span>Log in</span></a></p>
                    </div>
            </div>
            <div className="footer_info">
                <footer>
                        <a>About</a>
                        <a>Help Center</a>
                        <a>Terms of Service</a>
                        <a>Privacy Policy</a>
                        <a>Cookie Policy</a>
                        <a>Ads info</a>
                        <a>Blog</a>
                        <a>Status</a>
                        <a>Carrres</a>
                        <a>Brand Resources</a>
                        <a>Advertising</a>
                        <a>Marketing</a>
                        <a>Twitter for Business</a>
                        <a>Developers</a>
                        <a>Directory</a>
                        <a>Settings</a>
                        <a>© 2021 Twitter, Inc.</a>
                    </footer>
            </div> 
    </div>
        
    )
}

export default MainPage