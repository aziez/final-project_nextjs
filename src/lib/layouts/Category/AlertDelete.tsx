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
import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface AlertDeleteProps {
  nama_kategori?: string // Atur tipe sesuai dengan kebutuhan
}

const AlertDelete: React.FC<AlertDeleteProps> = ({ nama_kategori }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>
          <TrashIcon className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin ?</AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini tidak dapat dibatalkan. Ini akan menghapus kategori{' '}
            <b>{nama_kategori}</b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDelete
