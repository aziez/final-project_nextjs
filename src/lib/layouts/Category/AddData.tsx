'use client'

import { Button } from '@/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/lib/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/lib/components/ui/form'
import { Input } from '@/lib/components/ui/input'
import { addData } from '@/lib/utils/fetchingData'
import { useAddCategoryMutation } from '@/lib/utils/hooks/useCategoryMutation'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IAddDataProps {
  nama_kategori?: string
}

export const AddData: FC<IAddDataProps> = () => {
  const form = useForm<IAddDataProps>()
  const addCategoryMutation = useAddCategoryMutation()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<IAddDataProps> = async (data) => {
    await addCategoryMutation.mutateAsync(
      { ...data },
      {
        onSuccess: () => {
          console.log('Berhasillll mutatinnn')
        },
      },
    )
    setLoading(true) // Set loading to true before making the API call
    try {
      const res = await addData('kategori', data)

      if (res.code === 200) {
        setDialogOpen(false)
      } else {
        // Handle other cases if needed
      }
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false) // Set loading to false in both success and error cases
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger>
        <Button variant={'outline'} className="mx-4 mb-4  text-blue-500">
          <PlusIcon className="mr-2 h-5 w-5" />
          Tambah data
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Tambah Data Kategori</DialogTitle>
        <DialogDescription>
          <Form {...form}>
            <FormField
              control={form.control}
              name="nama_kategori"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kategori</FormLabel>
                  <FormControl>
                    <Input placeholder="nama kategori" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </DialogDescription>
        <DialogFooter>
          <Button
            variant={'secondary'}
            className="mx-4 mb-4 text-blue-500"
            onClick={form.handleSubmit(onSubmit)}
          >
            {loading && <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />}
            Tambah
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
