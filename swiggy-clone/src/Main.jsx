import React from 'react'
import { Filters } from './Components/Filters'
import { Offers } from './Components/Offers'
import { Resturants } from './Components/Resturants'

export const Main = () => {
  return (
    <>
      <Offers/>
      <section className='near-you'>
      <Filters/>
      <Resturants/>
      </section>
    </>
  )
}
