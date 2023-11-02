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

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar isCollapsed={isCollapsed} />
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main>
            <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
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
