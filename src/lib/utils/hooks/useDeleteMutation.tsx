import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { addData, deleteData, useData } from '../fetchingData'

export function useDeleteMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newTodo: any) => {
      return deleteData('kategori', 'id_kategori', newTodo)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-kategori'] })
    },
  })
}
