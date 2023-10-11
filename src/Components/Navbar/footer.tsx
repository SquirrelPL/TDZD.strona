import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";
import { useEffect } from 'react';

import { Drawer } from "flowbite";
import type { DrawerOptions, DrawerInterface } from "flowbite";
import Link from 'next/link';


export default function Navbar() {
  


  return (
    <>
      <footer className="p-4 sm:p-6 bg-gray-900">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <Link href="https://trafilesdozlejdzielnicy.pl/" className="flex items-center">
                <Image src="https://api.trafilesdozlejdzielnicy.pl/assets/TDZD_LOGO_100.png" width={30} height={30} className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center xs:text-xs md:text-base  lg:text-1xl font-semibold whitespace-nowrap text-white">Trafiłeś do Złej Dzielnicy</span>
            </Link>
            
        </div>
        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Odwiedź nas!</h2>
                <ul className="text-gray-400">
                    <li className="mb-4">
                        <Link href="https://www.youtube.com/channel/UCXziW8gzEYJFzgZWV_AEFFg" className="hover:underline ">Youtube</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="https://www.tiktok.com/@trafilesdozlejdzielnicy" className="hover:underline">Tiktok</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="https://discord.com/invite/CJhWA4w2wy" className="hover:underline">Discord</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase  text-white">Oficialne dokumenty</h2>
                <ul className="text-gray-400">
                    <li className="mb-4">
                        <Link href="https://docs.google.com/document/d/1C8CWqB44FP7tJC8ypeVGohLD0_lviZKDBFoL4hwmvDs/edit#heading=h.20q5lnoh96so" className="hover:underline ">Oferta Premium</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="https://docs.google.com/document/d/1wvBunKcm0bBVLjwRqz6cPmrKmpoC6fPFLXw0ruoubmQ/edit#heading=h.knzc1cxzn9gm" className="hover:underline">Kodeks moderacji</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="https://docs.google.com/document/d/1AGAI2SZV3XVggAfxYbgCi-EE-W_TUq9GGzL2LnVVfmg/edit#heading=h.w4gud2o1v463" className="hover:underline">Regulamin SCP</Link>
                    </li>
                </ul>
            </div>
            {//<div>
             //   <h2 className="mb-6 text-sm font-semibold uppercase text-white">Polityka</h2>
             //   <ul className="text-gray-400">
             //       <li className="mb-4">
             //           <Link href="#" className="hover:underline">Polityka prywatności</Link>
             //       </li>
             //       <li>
             //           <Link href="#" className="hover:underline">Obowiązujące warunki</Link>
             //       </li>
             //   </ul>
             //</div>
            }
        </div>
    </div>
    <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-gray-400">© 2023 <Link href="https://trafilesdozlejdzielnicy.pl/" className="hover:underline">Trafiłeś do Złej Dzielnicy</Link>. All Rights Reserved.
            ~ Made by <Link href='https://github.com/SquirrelPL' className='text-amber-700'>Squirrel</Link>
        </span>
        
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="https://www.youtube.com/channel/UCXziW8gzEYJFzgZWV_AEFFg" className="text-gray-500 hover:text-white">
                <svg fill="currentColor" className="w-5 h-5"  viewBox="-271 311.2 256 179.8" >
                    <path d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5
                        C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z"/>
                </svg>
                <span className="sr-only">Youtube</span>
            </Link>
            <Link href="https://www.tiktok.com/@trafilesdozlejdzielnicy" className="text-gray-500 hover:text-white">
                    <svg className="w-5 h-5" viewBox="62.370000000000005 70.49 675.3000000000001 675.3000000000001" xmlns="http://www.w3.org/2000/svg">
                        <g fill="currentColor">
                        <path d="M196 498.32l1.64 4.63c-.21-.53-.81-2.15-1.64-4.63zM260.9 393.39c2.88-24.88 12.66-38.81 31.09-53.09 26.37-19.34 59.31-8.4 59.31-8.4V267a135.84 135.84 0 0 1 23.94 1.48V352s-32.93-10.94-59.3 8.41c-18.42 14.27-28.22 28.21-31.09 53.09-.09 13.51 2.34 31.17 13.53 46.44q-4.15-2.22-8.46-5.06c-24.65-17.27-29.14-43.18-29.02-61.49zM511.25 147c-18.14-20.74-25-41.68-27.48-56.39h22.82s-4.55 38.57 28.61 76.5l.46.51A132.76 132.76 0 0 1 511.25 147zM621.18 205.8v81.84s-29.12-1.19-50.67-6.91c-30.09-8-49.43-20.27-49.43-20.27s-13.36-8.75-14.44-9.36v169c0 9.41-2.47 32.91-10 52.51-9.83 25.64-25 42.47-27.79 45.91 0 0-18.45 22.75-51 38.07-29.34 13.82-55.1 13.47-62.8 13.82 0 0-44.53 1.84-84.6-25.33a169.63 169.63 0 0 1-24.16-20.26l.2.15c40.08 27.17 84.6 25.33 84.6 25.33 7.71-.35 33.47 0 62.8-13.82 32.52-15.32 51-38.07 51-38.07 2.76-3.44 18-20.27 27.79-45.92 7.51-19.59 10-43.1 10-52.51V231c1.08.62 14.43 9.37 14.43 9.37s19.35 12.28 49.44 20.27c21.56 5.72 50.67 6.91 50.67 6.91v-64.13c9.96 2.33 18.45 2.96 23.96 2.38z"/>
                        <path d="M597.23 203.42v64.11s-29.11-1.19-50.67-6.91c-30.09-8-49.44-20.27-49.44-20.27s-13.35-8.75-14.43-9.37V400c0 9.41-2.47 32.92-10 52.51-9.83 25.65-25 42.48-27.79 45.92 0 0-18.46 22.75-51 38.07-29.33 13.82-55.09 13.47-62.8 13.82 0 0-44.52 1.84-84.6-25.33l-.2-.15a157.5 157.5 0 0 1-11.93-13.52c-12.79-16.27-20.63-35.51-22.6-41a.24.24 0 0 1 0-.07c-3.17-9.54-9.83-32.45-8.92-54.64 1.61-39.15 14.81-63.18 18.3-69.2A162.84 162.84 0 0 1 256.68 303a148.37 148.37 0 0 1 42.22-25 141.61 141.61 0 0 1 52.4-11v64.9s-32.94-10.9-59.3 8.4c-18.43 14.28-28.21 28.21-31.09 53.09-.12 18.31 4.37 44.22 29 61.5q4.31 2.85 8.46 5.06a65.85 65.85 0 0 0 15.5 15.05c24.06 15.89 44.22 17 70 6.68C401.06 474.78 414 459.23 420 442c3.77-10.76 3.72-21.59 3.72-32.79V90.61h60c2.48 14.71 9.34 35.65 27.48 56.39a132.76 132.76 0 0 0 24.41 20.62c2.64 2.85 16.14 16.94 33.47 25.59a130.62 130.62 0 0 0 28.15 10.21z"/>
                        </g>
                    </svg>
                <span className="sr-only">Tiktok</span>
            </Link>
            <Link href="https://discord.com/invite/CJhWA4w2wy" className="text-gray-500 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M464,66.52A50,50,0,0,0,414.12,17L97.64,16A49.65,49.65,0,0,0,48,65.52V392c0,27.3,22.28,48,49.64,48H368l-13-44L464,496ZM324.65,329.81s-8.72-10.39-16-19.32C340.39,301.55,352.5,282,352.5,282a139,139,0,0,1-27.85,14.25,173.31,173.31,0,0,1-35.11,10.39,170.05,170.05,0,0,1-62.72-.24A184.45,184.45,0,0,1,191.23,296a141.46,141.46,0,0,1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62,19.09,42.38,28.26c-7.27,9.18-16.23,19.81-16.23,19.81-53.51-1.69-73.85-36.47-73.85-36.47,0-77.06,34.87-139.62,34.87-139.62,34.87-25.85,67.8-25.12,67.8-25.12l2.42,2.9c-43.59,12.32-63.44,31.4-63.44,31.4s5.32-2.9,14.28-6.77c25.91-11.35,46.5-14.25,55-15.21a24,24,0,0,1,4.12-.49,205.62,205.62,0,0,1,48.91-.48,201.62,201.62,0,0,1,72.89,22.95S333.61,145,292.44,132.7l3.39-3.86S329,128.11,363.64,154c0,0,34.87,62.56,34.87,139.62C398.51,293.34,378.16,328.12,324.65,329.81Z"/><path d="M212.05,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.8,0,24.7-11.83,24.7-26.57C237,229.81,225.85,218,212.05,218Z"/><path d="M300.43,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.81,0,24.7-11.83,24.7-26.57S314,218,300.43,218Z"/></svg>
                <span className="sr-only">Discord</span>
            </Link>
        </div>
    </div>
</footer>
    </>
  )
}
