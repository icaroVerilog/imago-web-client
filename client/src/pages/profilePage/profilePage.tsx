import React from "react"

import Header          from "../../components/header/header"
import LeftMenu        from "../../components/leftMenu/letMenu"
import ProfileItemCard from "./components/profileItemCard/profileItemCard"

import "./profilePage.css"

export default function ProfilePage() {
    return (
        <div id="profile-page-main">
            <Header/>
            <div id="profile-page-body">
                <LeftMenu></LeftMenu>
                <div id="profile-page-body-content">
                    <ul id="profile-page-body-content-wrapper">
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                        <ProfileItemCard></ProfileItemCard>
                    </ul>
                </div>
            </div>
        </div>
    )
}