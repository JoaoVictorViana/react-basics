'use client'

import { TablePosts } from '@/components/TablePosts'

export default function Posts() {
  return (
    <div className="flex flex-col justify-between items-center mb-10">
      
      <h1 className="text-3xl font-bold text-primary-700 text-center my-10">Listagem de posts</h1>
    
      <TablePosts />
    </div>
  )
}
