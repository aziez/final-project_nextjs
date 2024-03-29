import React from 'react'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function Page({ params, searchParams }: PageProps) {
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full max-w-2xl text-center">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In repellat
          modi accusantium unde quod maxime obcaecati inventore. Repudiandae
          incidunt magni libero ex fugit, autem nostrum. Eos necessitatibus
          libero aliquid corrupti quasi quaerat quos dolores nemo? Dolores
          asperiores porro, ipsam modi veritatis accusamus ex laboriosam illo
          maiores inventore deserunt distinctio quas eos totam fugiat quae. Modi
          magni quas porro qui provident doloremque adipisci, suscipit sunt
          sequi veniam corrupti, incidunt odit neque magnam delectus minima
          consequatur!
        </p>
        <p className="mb-4">
          Nisi pariatur quod eligendi et vero provident deserunt illum enim
          labore maxime, delectus dolores repudiandae reprehenderit est sequi
          officiis tempore voluptas rerum consequatur dolore voluptates.
          Aperiam!
        </p>
        {/* Add more content or components as needed */}
      </div>
    </div>
  )
}
