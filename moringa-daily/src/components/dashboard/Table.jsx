import React, {useEffect} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { upgradeUser, listUsers, deleteUser } from "../../redux/actions/userActions";

const rows = [
  {
    id: 1,
    username: "Snow",
    email: "johnsnow@gmail.com",
    is_admin: true,
    is_approved: true,
  },
  {
    id: 1,
    username: "Yehezkiel",
    email: "Yehezkielbryan@gmail.com",
    is_writer: true,
    is_approved: false,
  },
  {
    id: 2,
    username: "Yehezkiel",
    email: "Yehezkielbryan@gmail.com",
    is_approved: true,
    is_writer: false,
    is_admin: false,
  },
];

export default function ListTable({users}) {
  const user = useSelector((state) => state.user);
  const {loading, success_upgrade, success_delete} = user;

  const dispatch = useDispatch()
  const handleUpgrade = (id) => {
    dispatch(upgradeUser(id))
  }

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
  }

  const columns = [
  { field: "username", headerName: "Name", width: 100 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "role",
    headerName: "Role",
    type: "number",
    width: 200,
    renderCell: (params) => {
      return (
        <div>
          {params.row.role === "admin" &&
            <h6 className='text-default-green'>Admin</h6>
          }
       {params.row.role === "writer" && (
            <h6 className='text-default-gold'>Writer</h6>
          ) }
           {params.row.role === "user" && <h6 className='text-red-400'>User</h6> 
          }
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Actions",
    sortable: false,
    width: 250,
    renderCell: (params) => {
      return (
       <div className="flex gap-2 items-center">
         <div className='flex gap-2 items-center text-green-500 cursor-pointer' onClick={() => handleUpgrade(params.row.id)}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          <h6 className='my-auto'>Upgrade</h6>
        </div>
         <div className='flex gap-2 items-center text-red-500 cursor-pointer' onClick={() => handleDeleteUser(params.row.id)}>
          <i className='fa fa-trash-o' aria-hidden='true'></i>
          <h6 className='my-auto'>Delete</h6>
        </div>
       </div>
      );
    },
  },
];

useEffect(() => {
  if (success_upgrade || success_delete){
    dispatch(listUsers())
  }
}, [dispatch, success_upgrade, success_delete])
  return (
    <div>
      {loading && <p>Loading upgrade...</p>}
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        displayRowCheckbox={false}
      />
    </div>
  );
}
