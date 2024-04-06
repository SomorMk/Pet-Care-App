import React from 'react'
import { Container, CounterItem, Flex } from './SubComponents/SubComponents'

const Counter:React.FC = () => {
  return (
    <section className='py-10 lg:py-20 bg-blue-400'>
        <Container>
            <Flex className='flex-wrap gap-y-10 sm:gap-y-0 justify-around'>
                <div className='w-[48%] sm:w-[23%]'>
                    <CounterItem end={5} duration={7} sideText='k+' title='Happy Services' />
                </div>
                <div className='w-[48%] sm:w-[23%]'>
                    <CounterItem end={45} duration={10} sideText='k+' title='Happy Reviews' />
                </div>
                <div className='w-[48%] sm:w-[23%]'>
                    <CounterItem end={200} duration={7} sideText='+' title='Happy Clients' />
                </div>
                <div className='w-[48%] sm:w-[23%]'>
                    <CounterItem end={10} duration={8} sideText='k+' title='Happy Services' />
                </div>
            </Flex>
        
        </Container>
    </section>
  )
}

export default Counter