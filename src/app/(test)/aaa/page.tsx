import React from 'react'
import Content from '@/components/Content'
import one from '/public/1.jpg'

export const metadata = {
  title: 'Aaa',
}

export default function Aaa() {
  return (
    <div>
      <Content description='aaaa' src={one} />
    </div>
  )
}
