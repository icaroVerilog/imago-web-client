import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage/landingPage"

export default function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage/>} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}