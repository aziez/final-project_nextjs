// Replace 'next/navigation' with 'next/router'
import { useRouter } from 'next/navigation'

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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/lib/components/ui/input'
import { editData } from '@/lib/utils/fetchingData'
import { useForm } from 'react-hook-form'
import { FC } from 'react'

interface DataUser {
  id: string
  username: string
  email: string
  password: string
}

const formSchema = z.object({
  id_kategori: z.string(),
  username: z.string().min(2, {
    message: 'Minimal 2 karakter',
  }),
})

export const EditForm: FC<DataUser> = ({
  id: initialidKategori,
  username: initialNamaKategori,
  email: initialEmail,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_kategori: initialidKategori,
      nama_kategori: initialNamaKategori,
    },
  })

  const router = useRouter() // Use 'const router = useRouter()' if you are navigating within this component.

  function onSubmit(value: z.infer<typeof formSchema>) {
    editData(
      'kategori',
      'id_kategori',
      value.id_kategori,
      'nama_kategori',
      value.nama_kategori,
    ).then((res) => {
      if (res?.code === 200) {
        // Do something upon a successful response
        router.push('/dashboard/categories')
      }
    })
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
