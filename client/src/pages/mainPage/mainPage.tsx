import React from "react"

import ProfileCard from "./components/profileCard/profileCard"
import Header      from "../../components/header/header"

import "./mainPage.css"

export default function MainPage(){
    return (
        <div id="home-page-main">
            <Header/>
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