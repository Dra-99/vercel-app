'use client'
import { useState } from 'react';
import Link from 'next/link';
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count, setCount] = useState(0);

  return (
    <div className='border-2 border-red-500'>
      <Link href={'/test/test1'}>test1</Link>
      <Link href={'/test/test2'}>test2</Link>
      <div>
        layout状态值： {count}
      </div>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <div></div>
      test Layout
      {children}
    </div>
  );
}
