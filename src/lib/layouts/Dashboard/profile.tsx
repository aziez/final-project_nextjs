'use client'

import useStore from '@/lib/utils/store/userStore'
import Link from 'next/link'
import { FC } from 'react'
interface IProfileBarProps {}

export const ProfileBar: FC<IProfileBarProps> = (props) => {
  const { userData } = useStore()

  return (
    <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
      <Link href="#" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-white">
              {userData?.user?.email}
            </p>
            <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
              View profile
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
