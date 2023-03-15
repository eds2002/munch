import React, { ReactNode } from 'react'

export default function Layout({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`w-full h-full px-4 mx-auto max-w-7xl lg:px-6 ${className}`}
    >
      {children}
    </div>
  )
}
