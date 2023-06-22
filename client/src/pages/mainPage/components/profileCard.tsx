import React from "react"
import "./profileCard.css"

export default function ProfileCard() {
    return (
        <div id="profile-card-main">
            <div id="profile-card-image">
                
            </div>
            <div id="profile-card-follow">
                <div id="profile-card-following" className="follow-data">
                    <p className="profile-card-following-name">Following</p>
                    <p className="profile-card-following-value">51</p>
                </div>
                <div id="profile-card-followers" className="follow-data">
                    <p className="profile-card-following-name">Followers</p>
                    <p className="profile-card-following-value">3000</p>
                </div>
            </div>
            <div id="profile-card-details-link">
                <p id="profile-card-details-link-text">View Profile</p>
            </div>
        </div>
    )
}