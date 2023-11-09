import React, { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import ProfileSection from "../components/dashboard/ProfileSection";
import CategorySection from "../components/dashboard/CategorySection";
import UsersList from "../components/dashboard/UsersList";
import CreateCategory from "../components/dashboard/CreateCategory";
import CreatePost from "../components/dashboard/CreatePost";
import NewArticles from "../components/dashboard/NewArticles";
import WishList from "../components/dashboard/WishList";
import Footer from "../components/dashboard/Footer";


import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles } from "../redux/slices/articleSlices";
import { listArticles } from "../redux/actions/articleActions";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  user = jwtDecode(user.access_token).sub;

  const articles = useSelector(selectArticles)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listArticles())
  },[dispatch])

    console.log('articles dast',articles)
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isCollapsed={isCollapsed} />
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <ProfileSection />
              <CategorySection />
              {user.role === "admin" ? <UsersList /> : null}
              {user.role === "admin" || user.role === "writer" ? (
                <CreateCategory />
              ) : null}
              {user.role === "admin" || user.role === "writer" ? (
                <CreatePost />
              ) : null}
              {user.role === "admin" || user.role === "writer" ? (
                <NewArticles articles={articles} />
              ) : null}
              <WishList />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
