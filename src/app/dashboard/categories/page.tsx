import { Categories, columns } from '../../../lib/layouts/Category/columns'
import { DataTable } from '../../../lib/layouts/Category/data-table'
import { useData } from '@/lib/utils/fetchingData'

export default async function Page() {
  const data = await useData('kategori')

  console.log('DATAAAA AWAL', data)

  try {
    return (
      <div className="mt-5 flex justify-center">
        <div className="w-full">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading data:', error)
    return <div>Error loading data</div>
  }
}
