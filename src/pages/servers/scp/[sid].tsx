import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import { Drawer } from "flowbite";
import type { DrawerOptions, DrawerInterface } from "flowbite";

import { List } from 'postcss/lib/list';
import kaczorD from '../../../../public/kaczor-donald.gif'


export default function Navbar() {

  const [online, setOnline] = useState(false)

  type statusList = {
    players?: string;
    maxplayers?: string;
    status?: string;
    name?: string;
    playersList?: [
      {
        id?: number;
        name?: string;
        steamid?: string;
        admin?: boolean;
      }
    ];
  };

  const [statDataLoading, setStatDataLoading] = useState(true)
  const [statData, setStatData] = useState<any>() 
  const [playearData, setPlayearData] = useState<any>() 

  const router = useRouter()
  const { sid } = router.query

  useEffect(() => {
    setStatDataLoading(true)
    fetch('https://api.trafilesdozlejdzielnicy.pl/server/info/Id/1')
      .then((res) => res.json())
      .then((data) => {
        setStatData(data)
        data.status == "online" ? setOnline(true) : setOnline(false);
        setStatDataLoading(false)
      })
  }, []);

  useEffect(() => {
    setStatDataLoading(true)
    fetch('https://api.trafilesdozlejdzielnicy.pl/server/getCurrentPlayersPublic/Id/1')
      .then((res) => res.json())
      .then((data) => {
        setPlayearData(data)
      })
  }, []);



  return (
    <div className='min-h-screen h-fit p-10 pt-20 m-h-[100vh]'>
      <div className="grid grid-cols-1  lg:grid-cols-3  gap-4 m-h-[100vh] h-full">
        <div className="rounded col-span-2">
          <div className='bg-gray-800 rounded p-5 h-fit flex flex-col  lg:flex-row justify-between'>
            <div className='flex flex-col mb-2'>
              <span className='text-zinc-500'>Nazwa</span>
              {!statDataLoading ?
              <span>{statData?.name}</span>:<> <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div></>
              }
              
            </div>
            <div className='flex flex-col mb-2'>
              <span className='text-zinc-500'>Adres</span>
              <span>pl1.mathost.eu:7769</span>
            </div>
            <div className='flex flex-col mb-2'>
              <span className='text-zinc-500'>Pastebin</span>
              <span>641LRve6</span>
            </div>

          </div>

        </div>

        <div className=" row-span-4 rounded ">
          <div className='bg-gray-800 h-full rounded w-full'>
            <div className='bg-gray-900 rounded p-5 h-fit flex justify-between'>Lista Graczy
              <div className="px-2 py-1 bg-sky-500 rounded">
                {
                  !statDataLoading ? (<>{statData?.currentPlayers}</>):(<svg aria-hidden="true" className=" w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>)
                }
               
                </div>
            </div>
            <div className='px-5 flex flex-col overflow-auto max-h-96'>
              <>
            {
                !statDataLoading ? 
                (
                 
                  playearData?.map((item: any, index: any) => (
                    <div key={index} className='flex mb-2 p-3 justify-between'>
                      <span className='text-center p-1'>{item.name}</span>{
                        item.isAdmin? (<span className='text-white rounded bg-sky-500 p-1'>Admin</span>):(<></>)
                      }
                    </div>
                  ))
                )
                :
                (<img src={kaczorD.src}/>)
              }</>
              
            </div>
            
            <div className=" p-5 rounded">
              <img className='w-full h-full rounded' src='https://mathost.eu/stats/214.png'></img>
            </div>
          </div>

        </div>

        <div className="col-span-2 row-span-2  p-5 rounded"></div>
        <div className="col-span-2 p-5 rounded flex overflow-auto">
          <a href='https://github.com/Exiled-Team/AdminTools' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>AdminTools</span><span className='text-sm text-slate-600'>Author: joker-119</span></a>
          <a href='https://github.com/Jesus-QC/BanLogger' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>BanLogger</span><span className='text-sm text-slate-600'>Author: Jesus-QC</span></a>
          <a href='https://github.com/Exiled-Team/Common-Utils' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>Common_Utilities</span><span className='text-sm text-slate-600'>Author: joker-119</span></a>
          <a href='https://github.com/Michal78900/MapEditorReborn' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>MapEditorReborn</span><span className='text-sm text-slate-600'>Author: Michal78900</span></a>
          <a href='' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>OptimizedRemoteKeycard</span><span className='text-sm text-slate-600'>Author: idk</span></a>
          <a href='https://github.com/Michal78900/RespawnTimer' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>RespawnTimer</span><span className='text-sm text-slate-600'>Author: Michal78900</span></a>
          <a href='' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>BetterCoin</span><span className='text-sm text-slate-600'>Author: TDZD (Squirrel)</span></a>
          <a href='' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>ServerLogger</span><span className='text-sm text-slate-600'>Author: TDZD (Squirrel)</span></a>
          <a href='' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>Trafiles do Zlej Dzielnicy [Exiled]</span><span className='text-sm text-slate-600'>Author: TDZD (Squirrel)</span></a>
          <a href='' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>AdministrationTime [NW API]</span><span className='text-sm text-slate-600'>Author: TDZD (Squirrel)</span></a>
          <a href='' className='text-white rounded bg-slate-800 px-5 flex flex-col justify-center mr-2 w-fit whitespace-nowrap'><span>Trafiles do Zlej Dzielnicy [NW API]</span><span className='text-sm text-slate-600'>Author: TDZD (Squirrel)</span></a>
        </div>

      </div>

    </div>
  )
}
