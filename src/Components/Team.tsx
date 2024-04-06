import React from 'react'
import { Container, Flex, SectionName, SectionTitle, TeamItem } from './SubComponents/SubComponents'
import TeamImage1 from '/images/team (1).jpg'
import TeamImage2 from '/images/team (2).jpg'
import TeamImage3 from '/images/team (3).jpg'
import TeamImage4 from '/images/team (4).jpg'

const Team:React.FC = () => {
  return (
    <section className='py-[50px] lg:py-[100px]'>
        <Container>
            <Flex className='flex-col items-center gap-y-5 lg:gap-y-10 mb-10'>
                <SectionName name='Our Team' />
                <SectionTitle title='Discover Our Team' />
            </Flex>
            <Flex className='justify-between lg:justify-around flex-wrap gap-y-6 lg:gap-y-0'>
                <div className='w-[48%] lg:w-[23%]'>
                    <TeamItem name='Dr. Afsana Begum' img={TeamImage1} role=' Associate Consultant' />
                </div>
                <div className='w-[48%] lg:w-[23%]'>
                    <TeamItem name='Dr. Zeenat Sultana' img={TeamImage2} role='General Surgeon' />
                </div>
                <div className='w-[48%] lg:w-[23%]'>
                    <TeamItem name='Dr. Md. Iqbal hossain' img={TeamImage4} role='Associate Consultant' />
                </div>
                <div className='w-[48%] lg:w-[23%]'>
                    <TeamItem name='Dr. Nusrat Jahan' img={TeamImage3} role='General Surgeon' />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Team