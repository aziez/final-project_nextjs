'use client'

import { Button } from '@/lib/components/ui/button'
import AlertDelete from '@/lib/layouts/Category/AlertDelete'
import { DataAdd } from '@/lib/layouts/Category/DataAdd'
import { PencilIcon } from '@heroicons/react/24/outline'
import type { ColumnDef } from '@tanstack/react-table'

export type Categories = {
  id_kategori: string
  nama_kategori: string
  jumlah_produk: string
}

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: 'id_kategori',
    header: 'Id kategori',
  },
  {
    accessorKey: 'jumlah_produk',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()
      const sortIcon =
        isSorted === 'asc' ? '🔼' : isSorted === 'desc' ? '🔽' : ''

      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(isSorted === 'asc')}
        >
          Total Produk {sortIcon}
        </Button>
      )
    },
  },
  {
    accessorKey: 'nama_kategori',
    header: 'Kategori',
  },
  {
    accessorKey: 'id',
    header: () => <div className=" text-black">Aksi</div>,
    cell: ({ row }) => {
      const id = row.getValue('id_kategori') as string
      const nama_kategori = row.getValue('nama_kategori') as string

      const handleClick = (id: string) => {
        console.log('DATA KEEEE ID', id)
      }

      return (
        <>
          <DataAdd id_kategori={id} />
          <AlertDelete nama_kategori={nama_kategori} />
        </>
      )
    },
  },
]
