import React, { useState } from "react";

import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillTelephoneFill, BsSearch} from 'react-icons/bs'
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai'

function MobNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [DropdownBlogs, setDropdownBlogs] = useState (false)
    const [DropdownServices, setDropdownServices] = useState (false)

  return (
    <>
        <nav className="lg:hidden bg-green-600 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">

                    {/* top bar content added here */}
                        <div className='md:me-32 lg:hidden flex flex-row justify-between items-start'>
                            <div className='bg-white p-2 rounded-full mx-1  my-2'>
                                <a href="https://wa.link/c3ukjh" className='text-lg md:text-lg text-green-700'><IoLogoWhatsapp /></a>
                            </div>
                            <div className='bg-white p-2 rounded-full mx-1 md:ml-3 my-2'>
                                <a href="tel:+918327626262" className='text-lg md:text-lg  text-green-700'><BsFillTelephoneFill /></a>
                            </div>
                        </div>

                        {/* search bar */}

                        <div className='relative md:ml-[-150px] ml-0'>
                            <input type="text" className='p-2 bg-gray-100 rounded-lg md:w-50 w-48 mx-auto pl-10 align-middle  focus:outline-0 placeholder:font-light' placeholder='Tracking Number'/>
                            <BsSearch  className='absolute left-3 top-3 text-gray-500 cursor-pointer'/>
                        </div>

                    <div className="lg:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white p-2 bg-green-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        {isOpen ? (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                        </svg>
                    </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                <div className="lg:hidden mt-4 my-10 max-h-[500px] overflow-auto">
                    <ul>
                        <li className="ml-5 py-5">
                            <a href="/"
                            className="block text-white text-2xl md:text-3xl  font-bold font-HeadingFont">
                            Home </a>
                        </li>
                        <li className="ml-5 py-5">
                            <a href="/about"
                            className="block text-white text-2xl md:text-3xl  font-bold font-HeadingFont">
                            About </a>
                        </li>
                        {/* our services dropdown added here */}
                        <li className="ml-5 py-5 block text-white text-2xl md:text-3xl  font-bold font-HeadingFont"
                        onClick={()=> setDropdownServices ((prev) => !prev)} >
                         Our Services 

                            { !DropdownServices ? (
                                <AiOutlineCaretDown className='h-8 inline-block justify-between ml-16' />
                            ):(
                                <AiOutlineCaretUp className="h-8 inline-block justify-between ml-16" />
                            )}

                            { DropdownServices && (
                                <div className="pt-5">
                                    <ul className="mb-[-10px]">
                                        <li className="py-3 border-b-[1px] border-b-zinc-100 ">
                                            <a href="/certificateAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium font-poppins ">
                                            Certificate Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/embassyAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Embassy Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/meaAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            MEA Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/mofaAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            MOFA Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/hrdAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            HRD Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/apostilleAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Apostille Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/homeAttestation"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Home Attestation </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/dataflow"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Dataflow Verification </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/examCoaching"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Exam Coaching </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/acls_bls"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            ACLS/BLS </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/pcc"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Police Clearance Certificate </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/migration"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Migration </a>
                                        </li>
                                        <li className="pt-3 border-b-[1px] border-b-zinc-100">
                                            <a href="/Council_verification"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Goodstanding & Council Verification </a>
                                        </li>
                                    </ul>
                                </div>
                            )}


                        </li>

                        <li className="ml-5 py-5">
                            <a href="/wes"
                            className="block text-white text-2xl md:text-3xl  font-bold font-HeadingFont">
                            WES </a>
                        </li>

                        {/* blogs and vlogs added here */}
                        <li className="ml-5 py-5 block text-white  text-2xl    md:text-3xl font-bold font-HeadingFont"
                        onClick={()=> setDropdownBlogs ((prev) => !prev)} >
                        Blogs & Videos

                            { !DropdownBlogs ? (
                                <AiOutlineCaretDown className='h-8 inline-block justify-between ml-10' />
                            ):(
                                <AiOutlineCaretUp className="h-8 inline-block justify-between ml-10" />
                            )}

                            { DropdownBlogs && (
                                <div className="pt-5">
                                    <ul className="mb-[-10px]">
                                        <li className="py-3 border-b-[1px] border-b-zinc-100 ">
                                            <a href="#!"
                                            className="block text-white text-xl md:text-2xl font-medium font-poppins ">
                                            Blogs </a>
                                        </li>
                                        <li className="pt-3">
                                            <a href="#!"
                                            className="block text-white text-xl md:text-2xl font-medium  font-poppins">
                                            Videos </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            
                        </li>
                        <li className="ml-5 py-5">
                            <a href="/contact"
                            className="block text-white  text-2xl md:text-3xl  font-bold font-HeadingFont">
                            Contact</a>
                        </li>
                    </ul>
                </div>
                )}
            </div>
        </nav>
    </>
  )
}

export default MobNavbar