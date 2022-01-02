import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Update from "./Components/Admin/Update";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Header/Home/Home";
import Navbar from "./Components/Header/Navbar/Navbar";
import TripsDetails from "./Components/Trips/TripsDetails";
import AuthContextProvider from "./contexts/AuthContext";
import TripsContextProvider from "./contexts/TripsContext";
import Auth from "./Components/Auth/Auth";
import RegionList from "./Components/Filter/RegionList";
import ScrollUp from "./Components/ScrollToUp/ScrollUp";
import AllScroll from "./Components/ScrollToUp/AllScroll";

const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <TripsContextProvider>
        <BrowserRouter>
          <ScrollUp />
          <Navbar />
          <AllScroll />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/trip/:id" element={<TripsDetails />} />
            <Route path="/tripUpdate/:id" element={<Update />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/tripRegion/:reg" element={<RegionList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TripsContextProvider>
    </AuthContextProvider>
  );
};

export default MainRoutes;
