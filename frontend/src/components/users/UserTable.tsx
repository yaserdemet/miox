import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

interface User {
  _id: string
  name: string
  surname: string
  age: number
  role: string
  phoneNumber: string
  education: string
}

interface Pagination {
  total: number
  limit: number
  page: number
  totalPages: number
}

interface UserTableProps {
  users: User[]
  pagination?: Pagination
  onPageChange?: (page: number) => void
  onDelete?: (id: string) => void
  onEdit?: (user: User) => void
}

const UserTable = ({
  users,
  pagination,
  onPageChange,
  onDelete,
  // onEdit,
}: UserTableProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleDeleteClick = (id: string) => {
    // onDelete?.(id)
    setSelectedId(id)
    setIsDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    if (selectedId) {
      onDelete?.(selectedId)
      setIsDeleteDialogOpen(false)
      setSelectedId(null)
    }
  }
  
  return (
    <>
      <Card className="w-full border-sidebar-border/50 shadow-lg overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between bg-muted/30 pb-4">
          <CardTitle className="text-xl font-bold tracking-tight">
            Kullanıcı Listesi
          </CardTitle>
          {pagination && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">
                Sayfa {pagination.page} / {pagination.totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                disabled={pagination.page <= 1}
                onClick={() => onPageChange?.(pagination.page - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                disabled={pagination.page >= pagination.totalPages}
                onClick={() => onPageChange?.(pagination.page + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/20">
              <TableRow>
                <TableHead className="font-bold">Ad</TableHead>
                <TableHead className="font-bold">Soyad</TableHead>
                <TableHead className="font-bold text-center">Yaş</TableHead>
                <TableHead className="font-bold">Rol / Ünvan</TableHead>
                <TableHead className="font-bold">Telefon</TableHead>
                <TableHead className="font-bold">Eğitim</TableHead>
                <TableHead className="text-right font-bold pr-6">
                  İşlemler
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="py-12 text-center text-muted-foreground"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-lg font-medium">
                        Henüz bir kullanıcı bulunamadı.
                      </p>
                      <p className="text-sm">
                        Yeni bir kullanıcı eklemek için formu kullanabilirsiniz.
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                users?.map((user) => (
                  <TableRow key={user._id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.surname}</TableCell>
                    <TableCell className="text-center">{user.age}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      {user.phoneNumber}
                    </TableCell>
                    <TableCell>{user.education}</TableCell>
                    <TableCell className="text-right pr-4">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          // onClick={() => onEdit?.(user)}
                          className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteClick(user._id)}
                          className="h-8 w-8 text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="border-sidebar-border/50">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold">
              Emin misiniz?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Bu işlem geri alınamaz. Bu kullanıcı sistemden kalıcı olarak
              silinecektir.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-sidebar-border/50">
              İptal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default UserTable
