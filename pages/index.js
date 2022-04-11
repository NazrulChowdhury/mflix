import Link from 'next/link'
import React from 'react'
import dbConnect from '../util/dbConnect'

const Home = ({connection}) => {
  const {connected} = connection

  return (
    <div>
      <div>
        <ul>
          <li><Link href="/about"><a href='#'>about</a></Link></li>
          <li><Link href='/bla'><a>bla</a></Link></li>
          <li><Link href='/olaboga'><a>olaboga</a></Link></li>
          <li><Link href='/test1'><a>test1</a></Link></li>
          <li><Link href='/test2'><a>test2</a></Link></li>
        </ul>
      </div>
      <div>{connected? 'db is connected' : 'fucked!'}</div>
      <div>welcome to home page</div>
    </div>
  )
}

export default Home

export async function getServerSideProps({ params }) {
  const connection = {}
  try{
    await dbConnect()
    connection.connected = true
  } catch (error){
    connection.connected = false
  }

  return { 
    props: { 
      connection 
    } 
  }
}

