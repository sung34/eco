import Link from 'next/link'
import React from 'react'
import {v4 as uuid }from 'uuid'

type Props = {
  subNavs: {
    title: string
    href: string
  }[]
}

export default function SideSubNav({ subNavs }: Props) {
  return (
    <ul>
      { subNavs.map((subNav, _) => (
        <li key={uuid()}>
          <Link href={subNav.href}>
            {/* Todo: text-clip effect with green-100/150 */}
            <h3 className=''>
              {subNav.title}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  )
}