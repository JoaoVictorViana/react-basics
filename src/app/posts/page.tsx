'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Posts() {
  const pathname = usePathname()

  return (
    <div>Listagem de posts
      {pathname === '/posts/linux' ? <div>Estou na página linux</div> : <div>Não estou na página linux</div>}
    </div>
  )
}
