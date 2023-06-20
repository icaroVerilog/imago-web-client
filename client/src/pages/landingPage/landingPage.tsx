import React from "react"
import "./landingPage.css"

export default function LandingPage(){
    return (
        <div id="landing-page-main">
            <div id="landing-page-body">
                <div id="landing-page-body-about">

                </div>
                <div id="landing-page-body-login-register">
                    <div id="landing-page-body-login-register-container">
                        <div id="landing-page-body-login-register-container-logo">

                        </div>
                        <div id="landing-page-body-login-register-container-form">
                            <div id="landing-page-body-login-form">
                                <div id="landing-page-body-login-form-textfield">
                                    <input id="username" className="login-textfields" type="text" />
                                    <input id="password" className="login-textfields" type="text" />
                                </div>
                                <div id="landing-page-body-login-form-buttons">
                                    <input id="login-button" className="login-login-buttons" type="button" />
                                    <input id="register-button" className="login-login-buttons" type="button" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="landing-page-footer">

            </div>
        </div>
    )
}