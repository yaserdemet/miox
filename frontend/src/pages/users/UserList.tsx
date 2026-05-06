import React, { useState } from "react"
import UserTable from "@/components/users/UserTable"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createCrudApi } from "@/services/team.service"

const UserList = () => {
  const userApi = createCrudApi("/users")

  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const limit = 10

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page],
    queryFn: () => userApi.getAll({ page, limit }),
  })
  const deleteMutation = useMutation({
    mutationFn: (id: string) => userApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id)
  }

  return (
    <div className="container mx-auto py-6">
      <UserTable
        users={data?.data}
        pagination={data?.pagination}
        onPageChange={setPage}
        onDelete={handleDelete}
        // onEdit={handleEdit}
      />
    </div>
  )
}

export default UserList
