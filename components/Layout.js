import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
    </div>
    </>
  )
}
