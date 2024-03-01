'use client'

import { EditForm } from '@/lib/layouts/Category/FormEdit'
import { getData, useData } from '@/lib/utils/fetchingData'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

async function EditCategory({ params }: { params: { slug: string } }) {
  const id_kategori = params.slug
  const data = await getData('kategori', 'id_kategori', id_kategori)
  
  return (
    <div>
      <EditForm
        id_kategori={params.slug}
        nama_kategori={data[0]?.nama_kategori}
      />
    </div>
  )
}

export default EditCategory
