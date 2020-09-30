import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <>
      <Link href="/">
        <a>Go to Home page</a>
      </Link>
      <h1>About</h1>
      <img src="/static/v.jpeg" />
    </>
  )
}

export default About