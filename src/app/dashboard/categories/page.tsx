import { AddData } from '@/lib/layouts/Category/AddData'
import { TableList } from '@/lib/layouts/Category/TableList'

export default function Page() {
  return (
    <div className="mt-5 flex justify-center">
      <div className="w-full">
        <AddData />
        <TableList />
      </div>
    </div>
  )
}
