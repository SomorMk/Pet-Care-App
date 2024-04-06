import React from 'react'
import { Container, FeedbackItem, Flex, Image, SectionTitle } from './SubComponents/SubComponents'
import FeedbackImage1 from '/images/team (2).jpg'
import FeedbackImage2 from '/images/team (1).jpg'

const Feedback:React.FC = () => {
  return (
    <section className='py-10 lg:py-20 bg-blue-100'>
        <Container>
            <Flex className='justify-between items-center'>
                <SectionTitle title='Customer Feedback' />
                <div><Image src='/images/fabicon.png' alt='' className='max-w-[30px] lg:max-w-[50px]' /></div>
            </Flex>
            <Flex className=' justify-between xl:justify-around flex-wrap mt-10 gap-y-6 lg:gap-y-0'>
                <div className='w-full sm:w-[48%]'>
                    <FeedbackItem title='Lorem ipsum dolor sit amet.' name='Dr. Zeenat Sultana' role='Doctors' img={FeedbackImage1} info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, ipsa. Esse, corporis et commodi temporibus' />
                </div>
                <div className='w-full sm:w-[48%]'>
                    <FeedbackItem title='Lorem ipsum dolor sit amet.' name='Dr. Afsana Begum' img={FeedbackImage2} info='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, ipsa. Esse, corporis et commodi temporibus' />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Feedback