import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, FreeMode} from 'swiper/modules';

import avatar from '../Assets/avatar.png'
import {FaQuoteLeft} from 'react-icons/fa'


const TestimonialData = [
    {
        id:1,
        img:avatar,
        quote: "I personally appreciate Ms Shimna for her communication skills and service which makes the customer well satisfied. My attestation processing was much faster than imagined and I'm so much grateful to this institute as well as the staffing coordination.",
        name:"Jafer",
        relation:"Customer"

    },
    {
        id:2,
        img:avatar,
        quote: "Friendly handling and they complete the works with in the time frame. Thanks for your support to finish my paper works.",
        name:"Rupa Soman",
        relation:"Customer"

    },
    {
        id:3,
        img:avatar,
        quote: "Excellent service. Special thanks to Ms. Suhana and Mr Aneesh for your guidance and support.",
        name:" Renjitha",
        relation:"Customer"

    },
    {
        id:4,
        img:avatar,
        quote: "I am grateful for your excellent service specially Ms suhana. I strongly recommending those who need thier overseas processing, they will update you.",
        name:"Chaithra",
        relation:"Customer"

    },
    {
        id:5,
        img:avatar,
        quote: "I sincerely appreciate on Trueway international for their excellent services. I personally appreciate Ms Shimna for her excellent services and communications for me. My all process was smooth and much faster than I expected and I'm so much thankful to this institute.",
        name:"SREERAG ",
        relation:"Customer"

    },
    {
        id:6,
        img:avatar,
        quote: "It was a really good experience on collaborating with Trueway international for the attestation process. Ms. Mary Jemi helped me for the registration, tracking and document submission for the process. Mary coordinated so professionally,efficiently and politely for the assignment.",
        name:"Sanjay MS",
        relation:"Customer"

    },

]


function TestimonialCard() {


  return (
    <div >
        <Swiper
            className="w-full h-full"
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                '@0.50': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@0.75': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                '@1.50': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}

            modules={[FreeMode, Pagination]}
        >
        {/* <SwiperSlide  className='text-center flex flex-row justify-center'>
                { TestimonialData.map((data, index ) => (
                    <div key={index} className=' mx-5 flex my-4  flex-wrap overflow-x-scroll scrolling-touch items-start mb-8'>
                        <div  className='grid  text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                            <img className='h-24 w-24 object-cover rounded-full inline-block  bg-opacity-10 ms-auto' src={data.img}  alt="avatar_icon" />
                            <FaQuoteLeft className='flex w-5 h-5 text-green-500 '/>
                            <p className='leading-relaxed text-zinc-500'>
                            {data.quote}
                            </p>
                            <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '></hr>
                            <h2 className='font-bold  text-sm tracking-wider'> {data.name} </h2>
                            <p className='text-gray-500'> {data.relation} </p>
                        </div>  
                    </div>
                ))}
        </SwiperSlide> */}

        <SwiperSlide >
                <div className='md:w-72 ml-4 my-10'>
                    <div className='text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                        <img className='block h-24 w-24 object-cover ms-auto'  src={avatar}  alt='avatar_img'/>
                        <FaQuoteLeft className=' w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam exercitationem animi, saepe blanditiis quis omnis id similique dolores a possimus consequuntur. Natus repudiandae at totam, nostrum ipsa assumenda eos.
                        </p>
                        <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '/>
                        <h2 className='font-bold  text-sm tracking-wider'> Abc name </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>
                </div>
        </SwiperSlide>


        <SwiperSlide >
                <div className=' md:w-72 md:ml-16 my-10'> 
                    <div className=' text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                        <img className='block h-24 w-24 object-cover ms-auto'  src={avatar}  alt='avatar_img'/>
                        <FaQuoteLeft className=' w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam exercitationem animi, saepe blanditiis quis omnis id similique dolores a possimus consequuntur. Natus repudiandae at totam, nostrum ipsa assumenda eos.
                        </p>
                        <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '/>
                        <h2 className='font-bold  text-sm tracking-wider'> Abc name </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>
                </div>
        </SwiperSlide>


        <SwiperSlide >
                <div className='md:w-72 md:ml-28 my-10'> 
                    <div className='  text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                        <img className='block h-24 w-24 object-cover ms-auto'  src={avatar}  alt='avatar_img'/>
                        <FaQuoteLeft className=' w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam exercitationem animi, saepe blanditiis quis omnis id similique dolores a possimus consequuntur. Natus repudiandae at totam, nostrum ipsa assumenda eos.
                        </p>
                        <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '/>
                        <h2 className='font-bold  text-sm tracking-wider'> Abc name </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>
                </div>
        </SwiperSlide>


        <SwiperSlide >
                <div className='md:w-72 md:ml-40 my-10'> 
                    <div className='  text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                        <img className='block h-24 w-24 object-cover ms-auto'  src={avatar}  alt='avatar_img'/>
                        <FaQuoteLeft className=' w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam exercitationem animi, saepe blanditiis quis omnis id similique dolores a possimus consequuntur. Natus repudiandae at totam, nostrum ipsa assumenda eos.
                        </p>
                        <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '/>
                        <h2 className='font-bold  text-sm tracking-wider'> Abc name </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide >
                <div className='md:w-72 md:ml-52 my-10'> 
                    <div className='  text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                        <img className='block h-24 w-24 object-cover ms-auto'  src={avatar}  alt='avatar_img'/>
                        <FaQuoteLeft className=' w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam exercitationem animi, saepe blanditiis quis omnis id similique dolores a possimus consequuntur. Natus repudiandae at totam, nostrum ipsa assumenda eos.
                        </p>
                        <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '/>
                        <h2 className='font-bold  text-sm tracking-wider'> Abc name </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>
                </div>
        </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default TestimonialCard



                // <div className='my-10 mx-10'> 
                //     <div className='lg:w-[400px] md:w-[300px] w-[100%]   text-center p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl border-2  border-gray-200 cursor-pointer'>
                //         <img className='block h-24 w-24 object-cover ms-auto'  src={avatar}  alt='avatar_img'/>
                //         <FaQuoteLeft className=' w-5 h-5 text-green-500 '/>
                //         <p className='leading-relaxed text-zinc-500'>
                //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam exercitationem animi, saepe blanditiis quis omnis id similique dolores a possimus consequuntur. Natus repudiandae at totam, nostrum ipsa assumenda eos.
                //         </p>
                //         <hr className='h-1 w-20 rounded bg-green-400 mx-auto my-2 '/>
                //         <h2 className='font-bold  text-sm tracking-wider'> Abc name </h2>
                //         <p className='text-gray-500'> Customer </p>
                //     </div>
                // </div>