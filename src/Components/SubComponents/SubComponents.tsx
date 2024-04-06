import React from 'react'
import { Link } from 'react-router-dom'

// Container Component
interface MyContainerProps {
    children: any
}
export const Container: React.FC<MyContainerProps> = ({ children }) => {
    return (
        <div className='max-w-[1500px] px-5 mx-auto'>{children}</div>
    )
}

// Flex Component
interface MyFlexProps {
    children: any
    className?: any
}
export const Flex: React.FC<MyFlexProps> = ({ children, className }) => {
    return (
        <div className={`${className} flex`}>{children}</div>
    )
}

// Image Component
interface MyImageProps {
    src: string | undefined
    alt: string | undefined
    className?: any
}
export const Image: React.FC<MyImageProps> = ({ src, alt, className }) => {
    return (
        <img src={src} alt={alt} className={className} />
    )
}

// Common Button Component
interface MyComButtonProps {
    name: string
    className?: any
}
export const ComButton: React.FC<MyComButtonProps> = ({ name, className }) => {
    return (
        <button className={`${className} py-2 px-5 lg:py-3 lg:px-8 bg-primary rounded-lg text-xs lg:text-base text-white font-semibold border border-transparent hover:border-primary hover:bg-white hover:text-primary duration-300`}>{name}</button>
    )
}

// Common Button Component
interface MyListItemProps {
    name: string
    className?: any
    active?: boolean
    link: any
}
export const ListItem: React.FC<MyListItemProps> = ({ className, name, active, link }) => {
    return (
        <li className={`${className} ${active ? 'text-primary' : 'text-black'} text-base font-semibold`}><Link to={link}>{name}</Link></li>
    )
}

// Section Name Component
interface MySectionNameProps {
    name: string
    className?: any
}
export const SectionName: React.FC<MySectionNameProps> = ({ className, name }) => {
    return (
        <h4 className={`${className} text-primary text-xl lg:text-2xl font-bold relative ml-[25px] lg:ml-[50px] first-letter:text-3xl lg:first-letter:text-4xl`}>{name}
            <span className='absolute top-[50%] left-[-30px] lg:left-[-50px] translate-y-[-50%]'><img src="/images/fabicon.png" className='max-w-5 lg:max-w-[40px]' /></span>
        </h4>
    )
}

// Section Title Component
interface MySectionTitleProps {
    title: string
    className?: any
}
export const SectionTitle: React.FC<MySectionTitleProps> = ({ className, title }) => {
    return (
        <h2 className={`${className} text-black text-2xl lg:text-6xl font-bold leading-[40px] lg:leading-[80px]`}>{title}</h2>
    )
}

// Peragraph Component
interface MYPeragraphProps {
    text: string | undefined
    className?: any
}
export const Peragraph: React.FC<MYPeragraphProps> = ({ className, text }) => {
    return (
        <p className={`${className} text-gray-500 text-xs text-left lg:text-base leading-[180%]`}>{text}</p>
    )
}

// Service Item Component
import { BsArrowRight } from "react-icons/bs";
interface MYServiceItemProps {
    title: string
    className?: any
    info: string
    link?: any
}
export const ServiceItem: React.FC<MYServiceItemProps> = ({ className, title, info, link }) => {
    return (
        <div className={`${className} flex flex-col justify-between gap-y-7 px-5 py-5 lg:px-8 lg:py-8 w-full h-full bg-white rounded-lg group duration-300 hover:bg-blue-500 relative`}>
            <h3 className='text-black text-lg font-bold group-hover:text-white duration-300'>{title}</h3>
            <p className={`${className} text-gray-500 text-xs md:text-sm leading-[190%] group-hover:text-white duration-300`}>{info}</p>
            <Link to={link} className='flex items-center gap-x-5'>
                <p className='text-gray-700 text-sm font-semibold group-hover:text-white duration-300'>Show Details</p>
                <span><BsArrowRight className='text-gray-500 text-sm group-hover:text-white duration-300' /></span>
            </Link>
            <span className='absolute top-5 right-5'><img src="/images/fabicon.png" alt="" className='max-w-[30px]' /></span>
        </div>
    )
}


// CounterItem Component
import CountUp from 'react-countup';

interface MYCounterItemsProps {
    end: number
    duration: number
    className?: any
    sideText?: string | number
    title: string
}
export const CounterItem: React.FC<MYCounterItemsProps> = ({ className, end, duration, sideText, title }) => {
    return (
        <div className={`${className} text-center`}>
            <div className='flex justify-center mb-1 md:mb-5'>
                <CountUp end={end} duration={duration} enableScrollSpy={true} className='text-2xl md:text-3xl lg:text-4xl text-white font-bold' />
                <h4 className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>{sideText}</h4>
            </div>
            <p className='text-white text-xs md:text-sm lg:text-2xl font-semibold'>{title}</p>
        </div>
    )
}


// CounterItem Component
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
interface MYTeamItemProps {
    className?: any
    name: string
    role?: string
    fb?: any
    tw?: any
    num?: any
    img: string
    alt?: string
}
export const TeamItem: React.FC<MYTeamItemProps> = ({ className, name, role, fb, tw, num, img, alt }) => {
    return (
        <div className={`${className} h-full bg-gray-200 group hover:bg-primary duration-300 rounded-lg`}>
            <div>
                <img src={img} alt={name ? name : alt} className='rounded-tl-lg rounded-tr-lg' />
            </div>
            <div className='flex flex-col gap-y-2 lg:gap-y-3 items-center py-5'>
                <h3 className='text-black text-xs md:text-xl font-bold group-hover:text-white duration-300'>{name}</h3>
                <h5 className='text-black text-[10px] md:text-base font-semibold group-hover:text-white duration-300'>{role}</h5>
                <ul className='flex gap-x-4 duration-300 group-hover:gap-x-6 mt-3'>
                    <li><Link to={fb} className='w-5 md:w-7 h-5 md:h-7 rounded-full bg-white flex justify-center items-center'><FaFacebookF className='text-[10px] md:text-sm text-primary' /></Link></li>
                    <li><Link to={tw} className='w-5 md:w-7 h-5 md:h-7 rounded-full bg-white flex justify-center items-center'><FaXTwitter className='text-[10px] md:text-sm text-primary' /></Link></li>
                    <li><Link to={num} className='w-5 md:w-7 h-5 md:h-7 rounded-full bg-white flex justify-center items-center'><IoMdCall className='text-[10px] md:text-sm text-primary' /></Link></li>
                </ul>
            </div>
        </div>
    )
}



// Feedback Item Component
import { FaStar } from "react-icons/fa";
interface MYFeedbackItemProps {
    className?: any
    title: string
    info: string
    name: string
    role?: string
    img: string
}
export const FeedbackItem: React.FC<MYFeedbackItemProps> = ({ className, title, info, name, role, img }) => {
    return (
        <div className={`${className} flex justify-between flex-wrap p-5 bg-white rounded-xl h-full`}>

            <div className='w-full lg:w-8/12 py-5 order-2 lg:order-1'>
                <ul className='flex gap-x-1 lg:gap-x-2'>
                    <li><FaStar className='text-sm lg:text-2xl text-orange-500' /></li>
                    <li><FaStar className='text-sm lg:text-2xl text-orange-500' /></li>
                    <li><FaStar className='text-sm lg:text-2xl text-orange-500' /></li>
                    <li><FaStar className='text-sm lg:text-2xl text-orange-500' /></li>
                    <li><FaStar className='text-sm lg:text-2xl text-orange-500' /></li>
                </ul>
                <h3 className='text-base lg:text-xl text-blck font-medium mt-5'>{title}</h3>
                <p className={`text-gray-500 text-xs lg:text-base leading-[180%] mt-2 lg:mt-5`}>{info}</p>
                <h6 className='text-black text-base lg:text-lg font-bold mt-5'>{name}</h6>
                <p className='text-black text-xs lg:text-sm'>{role}</p>
            </div>

            <div className='w-full lg:w-4/12 order-1 lg:order-lg-2'>
                <img src={img} alt="" className='rounded-lg h-full object-cover' />
            </div>

        </div>
    )
}