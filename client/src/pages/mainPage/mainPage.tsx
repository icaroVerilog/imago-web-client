import React from "react"

import ProfileCard from "./components/profileCard"


import "./mainPage.css"

export default function MainPage(){
    return (
        <div id="home-page-main">
            <div id="home-page-header">
                <img src="../../../public/logo/logo.svg" alt="aa" />
            </div>
            <div id="home-page-body">
                <div id="home-page-body-left-menu">
                    <div id="home-page-body-left-menu-wrapper">
                        <ProfileCard></ProfileCard>
                    </div>
                </div>
                <div id="home-page-body-content">
                    <div id="home-page-body-content-feed-wrapper">
                        {/* <div id="home-page-body-content-new-post">

                        </div> */}
                        <div id="home-page-body-content-feed">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}