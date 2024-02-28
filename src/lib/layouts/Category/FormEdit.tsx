'use client'

import { Button } from '@/lib/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form'
import { PencilIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/lib/components/ui/input'

interface DataEdit {
  id_kategori: string
  nama_kategori: string
}

const formSchema = z.object({
  nama_kategori: z.string().min(2, {
    message: 'Minimal 2 karakter',
  }),
})

export const EditForm: FC<DataEdit> = ({
  nama_kategori: initialNamaKategori,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_kategori: initialNamaKategori,
    },
  })

  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nama_kategori"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Kategori</FormLabel>
              <FormControl>
                <Input placeholder="nama kategori" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
