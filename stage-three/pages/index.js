import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
      <h1>Home</h1>
      <img src="/static/v2.jpg" />
    </>
  )
}

export default Home