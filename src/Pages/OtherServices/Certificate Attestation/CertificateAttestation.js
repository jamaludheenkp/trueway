import React, {useState} from 'react'
import CA_banner from '../../../Assets/certificate attestation/CA_banner.png'
import banner_mob from '../../../Assets/mobile banners/CertificateAttestation.png';

import HeroSidebar from '../HeroSidebar';



function CertificateAttestation() {

  const [readMore, setReadMore] = useState(false);

  const extraContent = <div>
          <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
            With Trueway International, the certificate attestation procedures are smooth. We have a full-fledged team solely for certificate attestation. Doing attestation with an agency's aid is always a good way to be tension-free. You can feel relaxed with our procedures because once we begin the procedure, you will get real-time updates, and we also give you a tracking ID with which you can track the current status of your procedures.
            <br />
            You can completely trust us with this procedure. We are synonyms for fast and trust. Within a minimum amount of time and at a pocket-friendly rate, we can complete your procedures and get your certificate attested.
          </p>
        </div>

const linkName = readMore ? '' : 'Read More...'

  return (
    <>
      <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={CA_banner} alt="page_banner" />
              <h3 className='absolute lg:text-4xl font-HeadingFont font-extrabold text-black pl-10 py-20 '>Certificate <br/> Attestation</h3>
            </div>

            {/* responsive banner of Certificate attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Trustable <br /><p className='text-green-500'>Certificate Attestation</p> Services in India </h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
              <b>Certificate attestation</b> is crucial if you are planning to migrate. Certificate attestation is the process of checking the authenticity of the certificates that you submit. Not only for immigration purposes, but certificate attestation is mandatory for legal, employment, and education purposes too. As a result of this attestation, your certificate's authenticity will be proved, and the same will be recognised by the destination country, organisation, or institution.</p>
              {/* readMore add in paragraph */}
              <div className='md:hidden flex'>
                <p  onClick={()=> {setReadMore (!readMore)}}>
                  <h2 className='text-green-500 ml-3 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                </p>
                { readMore && extraContent }
              </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              With Trueway International, the certificate attestation procedures are smooth. We have a full-fledged team solely for certificate attestation. Doing attestation with an agency's aid is always a good way to be tension-free. You can feel relaxed with our procedures because once we begin the procedure, you will get real-time updates, and we also give you a tracking ID with which you can track the current status of your procedures.
              <br />
              You can completely trust us with this procedure. We are synonyms for fast and trust. Within a minimum amount of time and at a pocket-friendly rate, we can complete your procedures and get your certificate attested.
              </p>
            </div>
          </div>

          {/* side bar navigation component*/}
          <div className='hidden lg:grid lg:w-1/2'>
            <div className='flex flex-col justify-center items-center'>
              <HeroSidebar/>
            </div>
          </div>
      </div>
    </>
  )
}

export default CertificateAttestation;