import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar isCollapsed={isCollapsed} />
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main>
            <Link
              to='/'
              className='w-full h-12 flex d-md-none items-center justify-end text-default-green uppercase text-xl px-3'
            >
              <h6 className='text-end underline italic'>Home</h6>
            </Link>
            <div className='px-1 md:px-12 md:py-4 w-full max-w-9xl mx-auto'>
              <ProfileSection />
              <CategorySection />
              <UsersList />
              <CreateCategory />
              <CreatePost />
              <NewArticles />
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
