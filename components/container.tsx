import React from 'react'

interface Props{
    children: React.ReactNode;
    className? : string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={`container w-11/12 ${className}`}>
      {children}
    </div>
  )
}

export default Container
