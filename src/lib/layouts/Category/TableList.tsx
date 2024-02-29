'use client'

import { useData } from '@/lib/utils/fetchingData'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
interface ITableListProps {}

export const TableList: FC<ITableListProps> = (props) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['list-kategori'],
    queryFn: () => useData('kategori'),
  })

  if (isError) {
    return (
      <div>
        <h2>ERROR FETCHING DATA</h2>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div>
        <h2>...loading data</h2>
      </div>
    )
  }
  if (data) {
    return <DataTable columns={columns} data={data} />
  }
}
