import React, { useEffect, useRef, useState } from 'react'
import { ComButton, Container, Flex, Image, ListItem } from './SubComponents/SubComponents'
import { Link } from 'react-router-dom'
import Logo from '/images/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
    let [navShow, setNavShow] = useState(false)

    let handelCloseRef = useRef<any>()
    let handelNavRef = useRef<any>()

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            (() => {
                if (!handelNavRef.current.contains(e.target)) {
                    setNavShow(false)
                }
            })();
            (() => {
                if (handelCloseRef.current.contains(e.target)) {
                    setNavShow(true)
                }
            })();
        })
    }, [])





    return (
        <>
            <nav className='py-5 bg-white shadow-lg'>
                <Container>
                    <Flex className='justify-between items-center'>

                        <div>
                            <Link to={'/'}><Image src={Logo} alt='Logo' className='w-full max-w-[100px] md:max-w-[150px]' /></Link>
                        </div>

                        <div ref={handelNavRef}>
                            <ul
                                className={`fixed top-0 ${navShow ? 'left-0' : 'left-[-100%]'} bg-gray-100 w-[80%] max-w-[300px] h-screen pt-14 pb-10 px-10 flex flex-col gap-y-7 lg:max-w-full lg:gap-y-0 lg:flex-row lg:pt-0 lg:pb-0 lg:px-0 lg:bg-transparent lg:h-auto lg:static lg:gap-x-10 duration-200 z-50 overflow-y-scroll lg:overflow-visible no-scrollbar`}>

                                <ListItem name='Home' link={'/'} active={true} />
                                <ListItem name='About' link={'/'} />
                                <ListItem name='Service' link={'/'} />
                                <ListItem name='Blogs' link={'/'} />
                                <ListItem name='Contact' link={'/'} />
                                <ListItem name='Pages' link={'/'} />

                                <div className='lg:hidden'>
                                    <Image src={Logo} alt='Logo' className='w-full max-w-[100px] mt-10' />
                                </div>

                                <span onClick={() => setNavShow(false)} className='lg:hidden absolute top-5 right-5 cursor-pointer'><RxCross2 className='text-2xl text-black' /></span>
                            </ul>
                        </div>

                        <div className='flex justify-between items-center gap-x-5'>
                            <ComButton name='Contact' />
                            <span ref={handelCloseRef} onClick={() => setNavShow(true)} className='lg:hidden cursor-pointer'><FaBarsStaggered className='text-xl text-black' /></span>
                        </div>

                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default Navbar
