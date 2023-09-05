import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

//import slider images 
import slider1 from '../../Assets/responsive:home/Banner1.png'
import slider2 from '../../Assets/responsive:home/Banner2.png'
import slider3 from '../../Assets/responsive:home/Banner3.png'
import slider4 from '../../Assets/responsive:home/Banner4.png'

//icons import
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiSolidPhoneCall} from 'react-icons/bi'

function HomeSliderMob() {
  return (
    <div className='lg:hidden h-full w-full '>
        <Swiper 
          style={{
            "--swiper-pagination-color": "#43b54b",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": ".3",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bullet-width": "1px",
            "--swiper-pagination-bullet-horizontal-gap": "3px"
          }}
        pagination={{
        dynamicBullets: true,
        clickable:true
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className='md:flex items-center object-center'>
        <div className="image relative">
          <img src={slider1} alt="slider_1" className='object-center w-auto'/>
          <div className=" absolute top-[10px] px-5  font-[poppins]">
            <h3 className='text-[30px] md:text-[60px] font-bold leading-10 md:leading-normal py-3 md:px-5'> Hello From <br /><text className='md:text-[62px]'>Trueway International</text></h3>
            <p className='font-poppins md:text-[32px]  text-[14px] w-[100%] md:px-8 justify-center text-gray-600 '>
              Trueway International is an ISO-assured confirmation organisation providing UAE Attestation Services in Trivandrum and is affirmed by Ministries and government offices in India and abroad. Main services include Embassy Attestation, MEA, MOFA, HRD, Home, Apostille Attestation, etc.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 md:text-3xl md:p-3 md:m-5 md:my-5'>
             <IoLogoWhatsapp className='text-green-700 text-xl mx-2  md:text-3xl '/> <a href="https://wa.link/c3ukjh">Free Consulting Now</a>
            </button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
        <div className="image relative">
          <img src={slider2} alt="slider_2" className='object-center w-auto'/>
          <div className=" absolute top-[10px] px-5 font-[poppins]">
            <h3 className='text-[30px] md:text-[60px] font-bold leading-10 md:leading-normal py-3 md:px-5'> Make The Migration<br /><text className='md:text-[62px]'>Smooth With Dataflow</text></h3>
            <p className='font-poppins md:text-[32px]  text-[14px] w-[100%] md:px-8 justify-center text-gray-600 '>
            For every migration, data flow is significant. The types of dataflow services we provide are DHA, HAAD, MOH, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman, etc. In order to prove the authenticity of the documents you submitted, Dataflow is mandatory.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 md:text-3xl md:p-3 md:m-5 md:my-5'>
             <IoLogoWhatsapp className='text-green-700 text-xl mx-2  md:text-3xl '/> <a href="https://wa.link/c3ukjh">Contact us to migration easy</a>
            </button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
        <div className="image relative">
          <img src={slider3} alt="slider_1" className='object-center w-auto'/>
          <div className=" absolute top-[10px] px-5 font-[poppins]">
            <h3 className='text-[30px] md:text-[60px] font-bold leading-10 md:leading-normal py-3 md:px-5'>The Complete Option for Exam Coaching</h3>
            <p className='font-poppins md:text-[32px]  text-[14px] w-[100%] md:px-8 justify-center text-gray-600 '>
            Trying to achieve the highest scores in the exams to go abroad? For that, you need a complete academic preparation course. We provide coaching for IELTS, OET, and Prometric exams. We teach you the key skills and give you a better understanding of the subject.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 md:text-3xl md:p-3 md:m-5 md:my-5'>
             <IoLogoWhatsapp className='text-green-700 text-xl mx-2  md:text-3xl '/> <a href="https://wa.link/c3ukjh">Register your slot now</a>
            </button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
        <div className="image relative">
          <img src={slider4} alt="slider_4" className='object-center w-auto'/>
          <div className=" absolute top-[10px] px-5 font-[poppins]">
            <h3 className='text-[30px] md:text-[60px] font-bold leading-10 md:leading-normal py-3 md:px-5'> Employment Abroad is the Dream?<br /><text className='md:text-[62px]'></text></h3>
            <p className='font-poppins md:text-[32px]  text-[14px] w-[100%] md:px-8 justify-center text-gray-600 '>
            Verification, Attestation, data flow, and many more are needed to get visa approval to fly abroad. All this will make you mad, but with Trueway International, all of these are easy, quick, and trustworthy.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 md:text-3xl md:p-3 md:m-5 md:my-5'>
             <BiSolidPhoneCall className='text-green-700 text-xl mx-2  md:text-3xl '/> <a href="tel:+918327626262">Connect with our customer care </a>
            </button>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSliderMob


