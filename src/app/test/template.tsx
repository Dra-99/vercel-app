'use client'
import { useState } from "react";
export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count, setCount] = useState(0);

  return (
    <div>
        <div>
          template状态值： {count}
        </div>
        <button onClick={() => setCount(count + 1)}>点击</button>
        <div></div>
        test template
        {children}
    </div>
  );
}
