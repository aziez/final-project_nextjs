'use client'

import { Button } from '@/lib/components/ui/button'
import { PencilIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface DataAddProps {
  id_kategori: string
}

export const EditButton: FC<DataAddProps> = ({ id_kategori }) => {
  const router = useRouter()
  // const { slug } = router.pathname;

  const handleClick = (id_kategori: string) => {
    // console.log(id_kategori)
    // console.log('---------------------')
    // console.log(router)
    // console.log('--------------------')

    router.push(`categories/${id_kategori}`)
  }

  return (
    <Button
      onClick={() => handleClick(id_kategori)}
      className="mr-2 text-blue-500"
    >
      <PencilIcon className="h-5 w-5" />
    </Button>
  )
}
