import React from 'react'
import Link from 'next/link'

// 下属文件使用了TailwindCSS语法，麻烦提示
export default function Header() {
  return (
    <div className='flex align-center justify-between w-full py-4 px-10 fixed z-10'>
        <Link href={'/'} className='cursor-pointer'>Home</Link>
        <div className='flex align-center gap-4'>
            <Link href={'/aaa'} className='cursor-pointer'>aaa</Link>
            <Link href={'/bbb'} className='cursor-pointer'>bbb</Link>
            <Link href={'/ccc'} className='cursor-pointer'>ccc</Link>
        </div>
    </div>
  )
}
