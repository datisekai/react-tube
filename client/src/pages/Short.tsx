import React from 'react'
import { generateArray } from '../utils'
import ShortCard from '../components/Card/ShortCard'

const Short = () => {
  return (
    <div className='py-2 space-y-4 flex flex-col items-center'>
      {generateArray(10).map(item => <ShortCard key={item}/>)}
    </div>
  )
}

export default Short