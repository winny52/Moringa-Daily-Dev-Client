import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import HttpsIcon from "@mui/icons-material/Https";

const Header = () => {
  return (
    <div className='bg-default-gold flex justify-between py-2 md:px-12 border-bottom'>
      <div className='flex gap-2 items-center'>
        <h2 className='text-default-green font-bold text-2xl my-auto'>MSD</h2>
        <h6 className='text-white my-auto font-semibold'>
          Keeping you a click ahead
        </h6>
      </div>
      <ul className='text-default-green flex gap-3'>
        <li>
          <Link to='/dashboard' className='flex gap-1 items-center'>
            <PersonIcon style={{ fontSize: "22px" }} />
            <h6 className='my-auto text-sm font-semibold'>Dashboard</h6>
          </Link>
        </li>
        <li className='flex gap-1 items-center'>
          <StarIcon style={{ fontSize: "22px" }} />
          <h6 className='my-auto text-sm font-semibold'>Wishlist</h6>
        </li>
        <li className='flex gap-1 items-center'>
          <HttpsIcon style={{ fontSize: "22px" }} />
          <h6 className='my-auto text-sm font-semibold'>Logout</h6>
        </li>
      </ul>
    </div>
  );
};

export default Header;
