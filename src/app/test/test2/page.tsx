'use client'
import React, { useState } from 'react'

export default function page() {

  const [count, setCount] = useState(0)

  return (
    <div>
      test2状态： {count}
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
