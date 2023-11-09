import React, { useState, useReducer,useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import HttpsIcon from "@mui/icons-material/Https";

import { logout } from "../slices/auth";

const EventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

const Header = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const dispatch = useDispatch();

  const alogout = () => {
    localStorage.removeItem("user");
  };
  
  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(true);
    } else {
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logout();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logout]);

  return (
    <div className="bg-default-gold flex justify-between py-2 md:px-12 border-bottom">
      <div className="flex gap-2 items-center">
        <h2 className="text-default-green font-bold text-2xl my-auto">MSD</h2>
        <Link to="/">
        <h6 className="text-white my-auto font-semibold">
          Keeping you a click ahead
        </h6>
        </Link>
      </div>
      <ul className="text-default-green flex gap-3">
        { showAdminBoard && (
          <>
          <li>
            <Link to="/dashboard" className="flex gap-1 items-center">
              <PersonIcon style={{ fontSize: "22px" }} />
              <h6 className="my-auto text-sm font-semibold">Dashboard</h6>
            </Link>
          </li>
          
          <li className="flex gap-1 items-center">
            <StarIcon style={{ fontSize: "22px" }} />
            <h6 className="my-auto text-sm font-semibold">Wishlist</h6>
          </li>

          <li className="flex gap-1 items-center">
            <HttpsIcon style={{ fontSize: "22px" }} />
            <h6 className="my-auto text-sm font-semibold" onClick={
                () => {
                  console.log('click')
                  alogout();
                  window.location.href = window.location.href
                }
              }>Logout</h6>
          </li>
          </>
        )}
                  <Link to="/auth">
          <li className="flex gap-1 items-center">
            <HttpsIcon style={{ fontSize: "22px" }} />
            <h6 className="my-auto text-sm font-semibold">Log In</h6>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
