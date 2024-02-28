'use client'

import { EditForm } from '@/lib/layouts/Category/FormEdit'
import { getData, useData } from '@/lib/utils/fetchingData'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

async function EditCategory({ params }: { params: { slug: string } }) {
  const id_kategori = params.slug
  const data = await getData('kategori', id_kategori)

  // const data = await useData(
  //   `https://api.steinhq.com/v1/storages/65dea65c4a64236312089bfd/kategori/?search={"id_kategori":"${id_kategori}"}`,
  // )

  console.log('ID_KATEGORI', id_kategori)
  console.log('KIRIMAN DATA', data)

  console.log(data)

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
