import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { addData, useData } from '../fetchingData'

export function useAddCategoryMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newTodo: any) => {
      return useData('kategori')
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-kategori'] })
    },
  })
}
