'use client'

import { useData } from '@/lib/utils/fetchingData'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
interface ITableListProps {}

export const TableList: FC<ITableListProps> = (props) => {
  const {
    data: listData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['list-kategori'],
    queryFn: () => useData('kategori'),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
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
  if (listData) {
    return <DataTable columns={columns} data={listData} />
  }
}
