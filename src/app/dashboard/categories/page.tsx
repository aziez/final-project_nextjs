import { columns } from './columns'
import { DataTable } from './data-table'
import * as fs from 'fs/promises'

interface Categories {
  id_kategori: number
  nama_kategori: string
  jumlah_produk?: number // Add a property to store the count of products
}

interface Produk {
  id_produk: number
  nama_produk: string
  id_kategori: number
}

async function getData(): Promise<Categories[]> {
  try {
    const dataKategoriPath = 'src/lib/data/kategori.json'
    const dataProdukPath = 'src/lib/data/produk.json'

    const rawDataKategori = await fs.readFile(dataKategoriPath, 'utf-8')
    const rawDataProduk = await fs.readFile(dataProdukPath, 'utf-8')

    const dataKategori: Categories[] = JSON.parse(rawDataKategori)
    const dataProduk: Produk[] = JSON.parse(rawDataProduk)

    // Iterate through categories and count the number of products for each category
    const dataWithCount: Categories[] = dataKategori.map((kategori) => {
      const count = dataProduk.filter(
        (produk) => produk.id_kategori === kategori.id_kategori,
      ).length
      return { ...kategori, jumlah_produk: count }
    })

    console.log(dataWithCount)

    return dataWithCount
  } catch (error) {
    throw error
  }
}

export default async function Page() {
  try {
    const data = await getData()
    return (
      <div className="mt-5 flex justify-center">
        <div className="w-full">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading data:', error)
    // Handle the error accordingly, for example, show an error message.
    return <div>Error loading data</div>
  }
}
