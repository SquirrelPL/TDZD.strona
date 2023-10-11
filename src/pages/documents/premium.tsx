import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import { Drawer } from "flowbite";
import type { DrawerOptions, DrawerInterface } from "flowbite";



export default function Navbar() {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Skopiowano');
      setCopied(true);
      
      let show = true;
      let counter = 2;
      function trigger() {
        show = true;
        counter = 5;
        timeout();
      }
      const timeout = (): any => {
        if (--counter > 0)
          return setTimeout(timeout, 1000);
        setCopied(false);
        
      }
      trigger()
      /* Resolved - text copied to clipboard successfully */
    },() => {
      console.error('Nie udało się skopiować :(');
      /* Rejected - text failed to copy to the clipboard */
    });
  }


  return (
    <div className='min-h-screen h-full p-10 pt-20 mt-20 overflow-hidden'>
      
      <h1 className="mb-4 font-extrabold leading-none tracking-tight text-2xl md:text-2xl lg:text-3xl text-white">Trafiłeś do Złej Dzielnicy <span className="underline underline-offset-3 decoration-8  decoration-sky-500">Oferta premium</span></h1>
      <p className=" font-normal text-gray-500  sm:text-sm md:text-sm lg:text-lg ">Podane ceny to minimum, jakie należy dobrowolnie wpłacić w formie darowizny na konto: 
      <button onClick={(e) => copyToClipboard("09 1140 2004 0000 3302 7895 8765")} data-modal-target="#toast-success" data-modal-toggle="staticModal" className='bg-gray-800 text-white px-3 rounded ml-2' type="button">
      09 1140 2004 0000 3302 7895 8765
      </button>
      <br/>
W tytule przelewu prosimy podać <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-placement="bottom" data-popover-target="popover-steamID">SteamID</a> i <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-placement="bottom" data-popover-target="popover-discordID">DiscordID</a> / Pseudonim#TAG</p>



<div id="popover-steamID" role="tooltip" className="absolute z-10 left-0 right-1 invisible inline-block text-sm font-light transition-opacity duration-300 border w-full max-w-sm rounded-lg shadow-sm opacity-0 text-gray-400 bg-gray-800 border-gray-600">
    <div className="">
        <div className=" p-3">
            <div className="space-y-2">
                <h3 className="font-bold text-white">Jak uzyskać swoje Steam ID?</h3>
                <p>Aby uzyskać swoje steam id można skorzystać z narzędzia na <a href='https://steamid.xyz/' target='_blank' rel="noreferrer" className='text-sky-500'>steamid.xyz</a> Gdzie należy skopiować <span className='px-1 bg-gray-700 rounded'>Steam64 ID</span></p>
            </div>
        </div>
    </div>
</div>
<div id="popover-discordID" role="tooltip" className="absolute z-10 left-0 right-1 invisible inline-block text-sm font-light transition-opacity duration-300 border w-full max-w-sm rounded-lg shadow-sm opacity-0 text-gray-400 bg-gray-800 border-gray-600">
    <div className="">
        <div className=" p-3">
            <div className="space-y-2">
                <h3 className="font-bold text-white">Jak uzyskać swoje discord ID?</h3>
                <p>Aby uzyskać swoje discord ID należy włączyć <a href="https://www.download.net.pl/jak-wlaczyc-lub-wylaczyc-tryb-dewelopera-na-discordzie/n/21836/" target='_blank' rel="noreferrer">"Tryb developera"</a> po czym kliknąć prawym guzikiem na sibie i wcisnąć <span className='px-1 bg-gray-700 rounded'>Kopiuj ID</span></p>
            </div>
        </div>
    </div>
</div>

<div className='w-full mt-20 flex justify-center'>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex align-center min-w-[70%] max-w-screen-md">
      <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase :text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-800 xs:text-xs md:text-base lg:text-1xl">
                      Ranga
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-800 xs:text-xs md:text-base lg:text-1xl">
                      Cena
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="border-b border-gray-700  bg-gray-700 hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-fuchsia-700">
                      Burżuazja
                  </th>
                  <td className="px-6 py-4">
                      1 Discord Boost
                  </td>
              </tr>
              <tr className="border-b border-gray-700  bg-gray-700 hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-yellow-400">
                    VIP
                  </th>
                  <td className="px-6 py-4">
                      9.00 zł
                  </td>
              </tr>
              <tr className="border-b border-gray-700 bg-gray-700 hover:bg-gray-600 ">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-cyan-600">
                      SVIP
                  </th>
                  <td className="px-6 py-4">
                    19.00 zł
                  </td>
              </tr>
          </tbody>
      </table>
    </div>

   
</div>
<br/>    <br/>

<p className="mb-3 font-light text-gray-500 dark:text-gray-400">W zamian za wsparcie nas odwdzięczamy się rangą na okres 30 dni na serwerze. <span className='underline'>Nie podlega ona zwrotowi.</span> Ranga zostanie przyznana dopiero po zaksięgowaniu wpłaty.</p>

<h2 className="text-4xl font-extrabold dark:text-white mt-40">Serwer SCP Secret Laboratory</h2>

<div className='w-full mt-20 flex justify-center'>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex align-center min-w-[70%] max-w-screen-md">
      <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase :text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-800 xs:text-xs md:text-base lg:text-1xl">
                      
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-800 xs:text-xs md:text-base lg:text-1xl text-fuchsia-700">
                    Burżuazja
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-800 xs:text-xs md:text-base lg:text-1xl text-yellow-400">
                      VIP
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-800 xs:text-xs md:text-base lg:text-1xl text-sky-500">
                      SVIP
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="border-b border-gray-700  bg-gray-700 hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-amber-700">
                      Klasa D
                  </th>
                  <td className="px-6 py-4">
                    Karta Dozorcy
                  </td>
                  <td className="px-6 py-4">
                  Karta Dozorcy + Latarka
                  </td>
                  <td className="px-6 py-4">
                  Karta Dozorcy + Latarka + Moneta
                  </td>
              </tr>
              <tr className="border-b border-gray-700  bg-gray-700 hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-yellow-300">
                    Naukowiec
                  </th>
                  <td className="px-6 py-4">
                  Latarka
                  </td>
                  <td className="px-6 py-4">
                  Latarka + Moneta
                  </td>
                  <td className="px-6 py-4">
                  Karta Kierownika Badań + Latarka + Moneta
                  </td>
              </tr>
              <tr className="border-b border-gray-700 bg-gray-700 hover:bg-gray-600 ">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-stone-900">
                    Ochroniarz
                  </th>
                  <td className="px-6 py-4">
                  Adrenalina
                  </td>
                  <td className="px-6 py-4">
                  Adrenalina + Moneta
                  </td>
                  <td className="px-6 py-4">
                  Adrenalina + Moneta + Crossvec
                  </td>
              </tr>
              <tr className="border-b border-gray-700 bg-gray-700 hover:bg-gray-600 border-t-solid border-t-2 border-b-0 border-sky-500 ">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    Cena za 30 dni
                  </th>
                  <td className="px-6 py-4">
                    1 Discord Boost
                  </td>
                  <td className="px-6 py-4">
                      9.00 zł
                  </td>
                  <td className="px-6 py-4">
                      19.00 zł
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
</div>




<div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-20">
    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">O działaniu monety możesz poczytać w naszym <a href='https://docs.google.com/document/d/1AGAI2SZV3XVggAfxYbgCi-EE-W_TUq9GGzL2LnVVfmg/edit' target='_blank' rel="noreferrer" className='text-white'>Regulaminie SCP</a> Rangi mogą ulec zmianie w celach balansu rozgrywki lub innych nieprzewidzianych sytuacji.
</p>
    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">Resztę opcji jakie się dostaje jest rozpisane na serwerze discord, na kanale <a href='https://discord.com/channels/407996605220782121/1054083315658924162' target='_blank' rel="noreferrer" className='text-white bg-gray-800 rounded px-2'>🚩┃zasady</a>, w zakładce Rangi Premium.</p>
    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">Aby otrzymać rangę <span className='text-fuchsia-700'>Burżuazja</span> na serwerze SCP SL, należy ulepszyć serwer, po czym ukaże się tobie kanał <a href='https://discord.com/channels/407996605220782121/990621991620989028' target='_blank' rel="noreferrer" className='text-white bg-gray-800 rounded px-2'>💎┃podaj-steam-id</a>, na którym możesz stworzyć ticket podając nam swoje SteamID, abyś uzyskał rangę na kolejne 30 dni.</p>
</div>




<div id="toast-success" className={`fixed bottom-2 right-5 flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-gray-800 ${copied?"show":"hidden"}`} role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-green-800 text-green-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ml-3 text-sm font-normal">Skopiowano.</div>
    <button type="button" onClick={() => setCopied(false)} className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
    </div>
  )
}
