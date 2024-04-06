import React from 'react'
import { Container, Flex, Peragraph, SectionName, SectionTitle } from './SubComponents/SubComponents'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Contact: React.FC = () => {
    return (
        <section className='py-10 lg:py-20'>
            <Container>
                <SectionTitle title='Contact Us' className='mb-5 sm:mb-0' />
                <Flex className='justify-between flex-wrap items-center'>
                    <div className='w-full sm:w-1/2 lg:w-[65%]'>
                        <Peragraph text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus a delectus aut, iste sed esse consequuntur sit sint eaque quibusdam facilis perspiciatis labore provident. Quam eius quas expedita eos vel.' className='max-w-[90%]' />

                        <ul className='flex flex-col gap-y-5 lg:gap-y-10 mt-10'>
                            <li className='pl-10 relative text-black text-xs lg:text-lg font-semibold'>
                                <span className='w-6 h-6 flex justify-center items-center bg-primary rounded-full absolute top-[50%] translate-y-[-50%] left-0'><IoLocationSharp className='text-white text-[10px] lg:text-base' /></span>
                                Dhamrai, Dhaka 1345, Bangladesh
                            </li>
                            <li className='pl-10 relative text-black text-xs lg:text-lg font-semibold'>
                                <span className='w-6 h-6 flex justify-center items-center bg-primary rounded-full absolute top-[50%] translate-y-[-50%] left-0'><FaPhoneAlt className='text-white text-[10px] lg:text-base' /></span>
                                +00 123456789
                            </li>
                            <li className='pl-10 relative text-black text-xs lg:text-lg font-semibold'>
                                <span className='w-6 h-6 flex justify-center items-center bg-primary rounded-full absolute top-[50%] translate-y-[-50%] left-0'><FaEnvelope className='text-white text-[10px] lg:text-base' /></span>
                                demo@gmail.com
                            </li>
                        </ul>
                    </div>
                    <Flex className='w-full sm:w-1/2 lg:w-[30%] flex-col items-center lg:items-end mt-12 sm:mt-0'>
                        <SectionName name='Working Hours' />
                        <ul className='flex flex-col gap-y-4 mt-5 lg:mt-10'>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-blue-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Monday - <span>9am to 5pm</span></li>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-blue-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Tuesday - <span>9am to 5pm</span></li>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-blue-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Wednesday - <span>9am to 5pm</span></li>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-blue-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Thursday - <span>9am to 5pm</span></li>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-blue-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Friday - <span>9am to 5pm</span></li>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-blue-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Saturday - <span>9am to 5pm</span></li>
                            <li className='text-xs lg:text-base font-medium py-2 px-5 bg-orange-100 w-[280px] lg:w-[350px] max-w-[350px] rounded-lg flex justify-between'>Sunday - <span>Close</span></li>
                        </ul>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}

export default Contact