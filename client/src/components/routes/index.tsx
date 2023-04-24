import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import Watch from "../../pages/Watch";
import Short from "../../pages/Short";
import Subcribe from "../../pages/Subcribe";
import MyVideo from "../../pages/MyVideo";
import History from "../../pages/History";
import Liked from "../../pages/Liked";
import Channel from "../../pages/Channel";
import UploadVideo from "../../pages/UploadVideo";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../../pages/Dashboard";
import DashBoardUser from "../../pages/DashboardUser";
import DashboardVideo from "../../pages/DashboardVideo";
import DashboardCategory from "../../pages/DashboardCategory";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import PrivateLayout from "../layouts/PrivateLayout";
import VerifyEmail from "../../pages/VerifyEmail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="watch/:id" element={<Watch />} />
            <Route path="short" element={<Short />} />
            <Route
              path="subcribe"
              element={
                <PrivateLayout>
                  <Subcribe />
                </PrivateLayout>
              }
            />
            <Route path="watched-video" element={<History />} />
            <Route
              path="my-video"
              element={
                <PrivateLayout>
                  <MyVideo />
                </PrivateLayout>
              }
            />
            <Route
              path="liked-video"
              element={
                <PrivateLayout>
                  <Liked />
                </PrivateLayout>
              }
            />
            <Route path="channel/:id" element={<Channel />} />
            <Route
              path="upload-video"
              element={
                <PrivateLayout>
                  <UploadVideo />
                </PrivateLayout>
              }
            />
          </Route>
          <Route
            path="/dashboard"
            element={
              <PrivateLayout>
                <AdminLayout />
              </PrivateLayout>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="user" element={<DashBoardUser />} />
            <Route path="video" element={<DashboardVideo />} />
            <Route path="category" element={<DashboardCategory />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
