import React from 'react'
import { Container, Flex, Image } from './SubComponents/SubComponents'

const Footer: React.FC = () => {
    return (
        <footer className='py-5 border-t-2 border-blue-200'>
            <Container>
                <Flex className='justify-between items-center'>
                    <h4 className='text-xs lg:text-sm'>All Right Reserved by <a href="http://www.facebook.com/U.somor.mk.25" target='blank' className='text-primary font-bold'>Somor Mk</a></h4>
                    <div><Image src='/images/logo.png' alt='Logo' className='w-full max-w-[70px] lg:max-w-[150px]' /></div>
                </Flex>
            </Container>
        </footer>
    )
}

export default Footer