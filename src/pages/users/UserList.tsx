import React, { useState } from "react"
import UserTable from "@/components/users/UserTable"

const UserList = () => {
  const [page, setPage] = useState(1)

  // Mock data for demonstration
  const mockUsers = [
    {
      _id: "1",
      fullName: "Yaser Demet",
      email: "yaser@atc.com",
      role: "Admin",
      date: new Date().toISOString(),
    },
    {
      _id: "2",
      fullName: "Ahmet Yılmaz",
      email: "ahmet@atc.com",
      role: "Developer",
      date: new Date().toISOString(),
    },
  ]

  const mockPagination = {
    total: 2,
    limit: 10,
    page: 1,
    totalPages: 1,
  }

  const handleDelete = (id: string) => {
    console.log("Delete user:", id)
  }

  const handleEdit = (user: any) => {
    console.log("Edit user:", user)
  }

  return (
    <div className="container mx-auto py-6">
      <UserTable
        users={mockUsers}
        pagination={mockPagination}
        onPageChange={setPage}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default UserList
