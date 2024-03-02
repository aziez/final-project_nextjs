'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/lib/components/ui/alert-dialog'
import { Button } from '@/lib/components/ui/button'
import { deleteData } from '@/lib/utils/fetchingData'
import { useDeleteMutation } from '@/lib/utils/hooks/useDeleteMutation'
import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface AlertDeleteProps {
  id_kategori: string
  nama_kategori: string // Atur tipe sesuai dengan kebutuhan
}

const AlertDelete: React.FC<AlertDeleteProps> = ({
  nama_kategori,
  id_kategori,
}) => {
  const deleteMutation = useDeleteMutation()

  const handleDelete = async () => {
    // console.log(nama_kategori, id_kategori)
    await deleteMutation.mutateAsync(
      { id_kategori },
      {
        onSuccess: () => {
          console.log('berhasil mutate delete')
        },
      },
    )

    try {
      const res = await deleteData('kategori', 'id_kategori', id_kategori)
    } catch (error) {}
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <TrashIcon className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin ?</AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini tidak dapat dibatalkan. Ini akan menghapus kategori{' '}
            <b>
              {nama_kategori} dengan id {id_kategori}
            </b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handleDelete}>Delete</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDelete
