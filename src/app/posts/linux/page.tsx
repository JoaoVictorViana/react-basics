'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Linux() {
  const pathname = usePathname()

  return (
    <div>Conteúdo sobre o Linux {pathname === '/posts/linux' ? <div>Estou na página linux</div> : <div>Não estou na página linux</div>}</div>
  )
}
