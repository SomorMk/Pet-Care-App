import React from 'react'
import { ComButton, Container, Flex, Image, Peragraph, SectionName, SectionTitle } from './SubComponents/SubComponents'
import DogImage from '/images/dog.png'

const About: React.FC = () => {
    return (
        <section className='py-10 lg:py-[100px] border-t border-blue-100'>
            <Container>
                <Flex className='flex-col lg:flex-row justify-between items-center'>
                    <div className='w-full lg:w-5/12 order-2 lg:order-1'>
                        <Image src={DogImage} alt='Dog Image' className='max-w-[80%] sm:max-w-[60%] mx-auto lg:max-w-full' />
                    </div>
                    <div className='w-full lg:w-7/12 order-1 lg:order-2'>
                        <SectionName name='About Us' />
                        <SectionTitle title='It Is Your Pleasure To Care Your Peats' className='mt-6 lg:mt-10' />
                        <Peragraph text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum nostrum? Debitis corrupti non cupiditate ex architecto voluptatibus repudiandae, hic commodi soluta corporis? Veritatis mollitia voluptatibus ea ab culpa quos!' className='max-w-[90%] mt-5 lg:mt-10' />
                        <ul className='flex flex-wrap gap-y-6 w-full xl:w-[70%] my-10'>
                            <li className='w-full sm:w-1/2 relative text-sm lg:text-base text-gray-500 font-semibold pl-8 lg:pl-[60px]'>
                                <span className='absolute top-[50%] left-[0px] translate-y-[-50%]'><img src="/images/fabicon.png" className='max-w-[15px] lg:max-w-[20px]' /></span>
                                Catagory 1 - Cats
                            </li>
                            <li className='w-full sm:w-1/2 relative text-sm lg:text-base text-gray-500 font-semibold pl-8 lg:pl-[60px]'>
                                <span className='absolute top-[50%] left-[0px] translate-y-[-50%]'><img src="/images/fabicon.png" className='max-w-[15px] lg:max-w-[20px]' /></span>
                                Catagory 2 - Dogs
                            </li>
                            <li className='w-full sm:w-1/2 relative text-sm lg:text-base text-gray-500 font-semibold pl-8 lg:pl-[60px]'>
                                <span className='absolute top-[50%] left-[0px] translate-y-[-50%]'><img src="/images/fabicon.png" className='max-w-[15px] lg:max-w-[20px]' /></span>
                                Catagory 3 - Birds
                            </li>
                            <li className='w-full sm:w-1/2 relative text-sm lg:text-base text-gray-500 font-semibold pl-8 lg:pl-[60px]'>
                                <span className='absolute top-[50%] left-[0px] translate-y-[-50%]'><img src="/images/fabicon.png" className='max-w-[15px] lg:max-w-[20px]' /></span>
                                Catagory 4 - Fishes
                            </li>
                            <li className='w-full sm:w-1/2 relative text-sm lg:text-base text-gray-500 font-semibold pl-8 lg:pl-[60px]'>
                                <span className='absolute top-[50%] left-[0px] translate-y-[-50%]'><img src="/images/fabicon.png" className='max-w-[15px] lg:max-w-[20px]' /></span>
                                Catagory 5 - Others
                            </li>
                        </ul>
                        <ComButton name='More About Us' className='mt-5' />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default About