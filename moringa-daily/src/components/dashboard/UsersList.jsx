import React from "react";
import ListTable from "./Table";

const UsersList = () => {
  return (
    <div className='text-white shadow-sm p-4 mx-2 mt-4'>
      <div className='flex items-center gap-3 my-3'>
        <div className='w-4 h-4 rounded-full bg-red-400 flex justify-center items-center'></div>
        <h6 className='text-red-400 my-auto'>List of all users and Roles</h6>
      </div>
      <ListTable />
    </div>
  );
};

export default UsersList;
