'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

type ListConfig = {
  search: string
  page: number
}

export default function Posts() {
  const [listConfig, setListConfig] = useState<ListConfig>({
    search: '',
    page: 1,
  })
  const [names, setNames] = useState<Array<string>>(['joao', 'isa', 'vlabson'])
  const pathname = usePathname()
  const [sum, setSum] = useState<number>(0)

  const handleClick = () => {
    if (!listConfig.search) return

    setNames([...names, listConfig.search])
    setListConfig({
      page: 1,
      search: ''
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setListConfig({
      page: 1,
      search: e.target.value
    })

    listConfig.search = e.target.value

  }

  return (
    <div>Listagem de posts
      Event Handlers
      <input className="border border-primary-800 p-4 rounded-lg" name="search" type="text" value={listConfig.search} onChange={handleChange} />
      
      <button onClick={handleClick} className="border border-secondary-800 px-1 py-3 p- rounded-lg bg-secondary-500 hover:bg-secondary-300">Adicionar</button>

      {listConfig.search && <span>Resultado da busca: {listConfig.search}</span>}

      <div>
        {names.filter(name => name.toLowerCase().includes(listConfig.search.toLowerCase())).map(item => (
          <div key={item}>{item}</div>
        ))}

        {names.filter(name => name.toLowerCase().includes(listConfig.search.toLowerCase())).length == 0 && <div>Não encotramos nenhum resultado</div>}
      </div>

      <button onClick={() => {
        setSum((atual) => {
          return atual + 2
        })
      }} className="p-3 bg-primary-800">+</button>
      <span>{sum}</span>
    </div>
  )
}
