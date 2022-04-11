import Link from 'next/link'
import React from 'react'
import axios from 'axios'

const Bla = ({result}) => {
  
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
      <div>welcome to Bla page</div>
      <div>{result? <h1>{result}</h1> : <h1>failed!</h1>}</div>
    </div>
  )
}

export default Bla

export async function getServerSideProps({ params }) {
  try{
    const response = await axios(`${API_HOST_URL}/api/bla`)
    const result = response.data
    return { 
      props: { 
        result
      } 
    }
  } catch(error){
    console.log(error)
    return { 
      notFound : true
    }
  }
}

