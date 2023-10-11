import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";
import { useEffect } from 'react';

import { Drawer } from "flowbite";
import type { DrawerOptions, DrawerInterface } from "flowbite";
import Link from 'next/link';
import logo from '../../../public/TDZD_LOGO.png'

const inter = Inter({ subsets: ['latin'] })



export default function Navbar() {
  let drawer: DrawerInterface;


  useEffect(() => {
    const $targetEl = document.getElementById('drawer-disable-body-scrolling');

    // options with default values
    const options: DrawerOptions = {
      placement: 'right',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30 left-[100vw] top-0'
    };
    
    /*
    * $targetEl: required
    * options: optional
    */
    drawer = new Drawer($targetEl, options);
  },[])




  return (<>
<nav className=" px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0" style={{backgroundColor: "#101621"}}>
  <div className="container flex flex-wrap items-center justify-between mx-auto ">
  <Link href="/" className="flex items-center">
      <Image src={logo.src} width={45} height={10} className="h-10 mr-3 sm:h-12" alt="TDZD LOGO"/>
      <div className='flex flex-col'>
        <span className=" font-semibold whitespace-nowrap text-sky-500 h-5 xs:text-xs md:text-base  lg:text-1xl">Trafiłeś do Złej Dzielnicy</span>
        <span className="whitespace-nowrap text-gray-600 text-sm" >Here we go again</span>
      </div>
  </Link>
  <div className="flex md:order-2">
      {//<button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-sky-500 hover:bg-sky-600" >Get started</button>
      }
      <button id='triggerEl' data-drawer-toggle="drawer-disable-body-scrolling" data-drawer-target="drawer-disable-body-scrolling" data-drawer-placement="right" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
    <li>
        <Link href="/#home" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:hover:text-sky-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
      </li>
      <li>
      <Link href="/servers/scp/1" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:hover:text-sky-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SCP:SL</Link>
        {/*
        <button data-dropdown-toggle="ServerDropDown" className="flex align-baseline py-2 pl-3 pr-4 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-500 md:p-0 dark:text-white" aria-current="page">Serwery <svg className="w-4 h-4 ml-2 self-center" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="ServerDropDown" className="z-10 hidden bg-gray-800 divide-y divide-gray-900 rounded-lg shadow w-44 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
              <li>
                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 block px-4 py-2 hover:bg-gray-900 hover:text-sky-500 text-gray-300">SCP:SL<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
                <div id="doubleDropdown" className="z-10 hidden bg-gray-800 divide-y divide-gray-900 rounded-lg shadow w-44 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                    <li>
                      <Link href="/servers/scp/214" className="block px-4 py-2 hover:bg-gray-900 hover:text-sky-500 text-gray-300">NON RP</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a  className="block px-4 py-2">Minecraft</a>
              </li>
            </ul>
            <div className="py-2">
              <Link href="/documents/premium" className="block px-4 py-2 hover:bg-gray-900 hover:text-sky-500 text-gray-300">Rangi Premium</Link>
            </div>
        </div>
    */}
      </li>
      <li>
        <Link href="/#about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:hover:text-sky-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">O nas</Link>
      </li>
      <li>
        <Link href="/#randomBlocks" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:hover:text-sky-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Randomowe klocki?</Link>
      </li>
      <li>
        <Link href="/#team" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:hover:text-sky-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Drużyna</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div id="drawer-disable-body-scrolling"  className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform w-80 translate-x-full" style={{backgroundColor: "#080b12"}} tabIndex={-10} aria-labelledby="drawer-disable-body-scrolling-label">
<h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 h-4"></h5>
<button type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    <span className="sr-only">Close menu</span>
</button>
<div className="py-4 overflow-y-auto">
  <ul className="space-y-2">
     <li>
        <Link href="/#home" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-sky-500 hover:text-white">
           <span className="ml-3">Home</span>
        </Link>
     </li>
     <li>
      {/*
        <button type="button"  className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-sky-500 hover:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <span className="flex-1 ml-3 text-left whitespace-nowrap">Serwery</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <ul id="dropdown-example" className="hidden py-2 space-y-2">
              <li>
                 <Link href="/servers/scp/214" className="flex items-center w-full p-2 text-base font-normal text-white transition duration-75 rounded-lg pl-11 group hover:bg-sky-500 hover:text-white">SCP:SL - NON RP</Link>
              </li>
              <li>
                 <a className="flex items-center w-full p-2 text-base font-normal text-gray-500 transition duration-75 rounded-lg pl-11 group ">Minecraft</a>
              </li>
        </ul>
    */}
     </li>
     <li>
        <Link href="/documents/premium" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-white hover:bg-sky-500">
           <span className="flex-1 ml-3 whitespace-nowrap">Rangi Premium</span>
        </Link>
     </li>
     <li>
        <Link href="/#about" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-white hover:bg-sky-500">
           <span className="flex-1 ml-3 whitespace-nowrap">O nas</span>
        </Link>
     </li>
     <li>
        <Link href="/#randomBlocks" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-white hover:bg-sky-500">
           <span className="flex-1 ml-3 whitespace-nowrap">Randomowe klocki?</span>
        </Link>
     </li>
     <li>
        <Link href="/#team" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-white hover:bg-sky-500">
           <span className="flex-1 ml-3 whitespace-nowrap">Drużyna</span>
        </Link>
     </li>
  </ul>
</div>
</div>
</>
  )
}
