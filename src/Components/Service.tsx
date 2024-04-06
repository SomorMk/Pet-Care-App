import React from 'react'
import { Container, Flex, SectionName, SectionTitle, ServiceItem } from './SubComponents/SubComponents'

const Service: React.FC = () => {
    return (
        <section className='py-[50px] lg:py-[100px] bg-blue-100'>
            <Container>
                <Flex className='flex-col items-center gap-y-5 lg:gap-y-12'>
                    <SectionName name='Service' />
                    <SectionTitle title='Service We Provide' />
                </Flex>
                <Flex className='justify-around flex-col gap-y-6 lg:gap-y-10 sm:flex-row flex-wrap mt-10 lg:mt-14'>
                    <div className='w-full sm:w-[48%] lg:w-[23%]'>
                        <ServiceItem title='Cats' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam pariatur, repellendus nisi rem dolorem inventore asperiores vero ut voluptatibus provident, molestiae voluptate ex autem dolor sed eum? Dolorem, magnam.' />
                    </div>
                    <div className='w-full sm:w-[48%] lg:w-[23%]'>
                        <ServiceItem title='Dogs' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam pariatur, repellendus nisi rem dolorem inventore asperiores vero ut voluptatibus provident, molestiae voluptate ex autem dolor sed eum? Dolorem, magnam.' />
                    </div>
                    <div className='w-full sm:w-[48%] lg:w-[23%]'>
                        <ServiceItem title='Birds' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam pariatur, repellendus nisi rem dolorem inventore asperiores vero ut voluptatibus provident, molestiae voluptate ex autem dolor sed eum? Dolorem, magnam.' />
                    </div>
                    <div className='w-full sm:w-[48%] lg:w-[23%]'>
                        <ServiceItem title='Others' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam pariatur, repellendus nisi rem dolorem inventore asperiores vero ut voluptatibus provident, molestiae voluptate ex autem dolor sed eum? Dolorem, magnam.' />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Service