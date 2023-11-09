import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "username", headerName: "Name", width: 100 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "role",
    headerName: "Role",
    type: "number",
    width: 100,
    renderCell: (params) => {
      return (
        <div>
          {params.row.is_admin ? (
            <h6 className='text-default-green'>Admin</h6>
          ) : params.row.is_writer ? (
            <h6 className='text-default-gold'>Writer</h6>
          ) : (
            <h6 className='text-red-400'>User</h6>
          )}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          {params.row.is_approved ? (
            <div className='flex gap-1 items-center text-default-green'>
              <i className='fa fa-check-circle-o' aria-hidden='true'></i>
              <h6 className='my-auto'>Approved</h6>
            </div>
          ) : (
            <div className='flex gap-1 items-center text-red-400'>
              <i className='fa fa-pause aria-hidden'></i>
              <h6 className='my-auto'>Waiting</h6>
            </div>
          )}
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Actions",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div className='flex gap-2 items-center text-red-500 cursor-pointer'>
          <i class='fa fa-trash-o' aria-hidden='true'></i>
          <h6 className='my-auto'>Delete</h6>
        </div>
      );
    },
  },
];

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

export default function ListTable() {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        displayRowCheckbox={false}
      />
    </div>
  );
}
