import { useState } from "react"
import { createCrudApi } from "@/services/team.service"

import TeamTable from "@/components/teams/TeamTable"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import Loading from "../Loading"


const teamApi = createCrudApi("/teams")

const TeamList = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const limit = 10
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teams", page],
    queryFn: () => teamApi.getAll({ page, limit }),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => teamApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] })
    },
  })

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id)
  }

  const handleEdit = (team: any) => {
    console.log("Edit team:", team)
  }

  if (isError) {
    return <div className="p-10 text-center text-red-500 font-semibold">Veriler yüklenirken bir hata oluştu. Lütfen backend sunucusunun çalıştığından emin olun.</div>
  }

  const teamsArray = data?.data || (Array.isArray(data) ? data : []);
  const paginationData = data?.pagination || null;
console.log(data)
  return (
    <div className="container mx-auto py-6">
      {isLoading ? (
        <Loading />
      ) : (
        <TeamTable
          teams={teamsArray}
          pagination={paginationData}
          onPageChange={setPage}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  )
}



export default TeamList
