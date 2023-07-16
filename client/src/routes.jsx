import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"

import LandingPage from "./pages/landingPage/landingPage"
import MainPage    from "./pages/mainPage/mainPage"
import ProfilePage from "./pages/profilePage/profilePage"

export default function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage/>} path="/"/>
                <Route element={<MainPage/>} path="/home"/>
                <Route element={<ProfilePage/>} path="/profile"/>
            </Routes>
        </BrowserRouter>
    )
}