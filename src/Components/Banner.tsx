import React from 'react'
import { ComButton, Container, Flex, Image, Peragraph } from './SubComponents/SubComponents'
import BannerBg from '/images/banner.png'
import ClientsImage from '/images/clients.png'

const Banner:React.FC = () => {
  return (
    <section className='py-10 lg:py-20'>
        <Container>
            <Flex className='flex-col lg:flex-row items-center'>

                <div className='w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left'>
                    <h1 className='text-2xl text-center md:text-3xl lg:text-left lg:text-4xl xl:text-5xl text-black font-bold leading-10 lg:!leading-[130%] mb-5'>There Is Nothing More Important To Us Than Your Pet</h1>
                    <Peragraph text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum nostrum? Debitis corrupti non cupiditate ex architecto voluptatibus repudiandae, hic commodi soluta corporis? Veritatis mollitia voluptatibus ea ab culpa quos!' className='mb-10 max-w-[90%] mx-auto lg:mx-0 text-center lg:text-left' />
                    <ComButton name='Make An Appointment' />
                    <Flex className='flex-col lg:flex-row items-center gap-x-5 mt-8'>
                        <div><Image src={ClientsImage} alt='Clients Image' className='w-full max-w-[120px]' /></div>
                        <Flex className='flex-col gap-y-1'>
                            <h6 className='text-xl text-black font-bold'>12k+</h6>
                            <p className='text-gray-500 text-sm lg:text-base'>Standard Client</p>
                        </Flex>
                    </Flex>
                </div>

                <div className='w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0'>
                    <Image src={BannerBg} alt='Banner Image' className='w-full max-w-[80%] sm:max-w-[70%] mx-auto lg:max-w-full' />
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Banner