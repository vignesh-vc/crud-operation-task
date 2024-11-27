import React from "react";
import UserItem from "./UserItem";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="p-10 font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Name</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Email</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Date Of Birth</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {users.map((user) => (
            <UserItem key={user._id} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
