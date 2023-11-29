import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/productCard'

export default function Home() {
  return (
    <main >
     <h1>Hello Next</h1>
     <Link href='/users'>Users</Link>
     <Link href='/users/new'> new</Link>
     <ProductCard/>
    </main>
  )
}
