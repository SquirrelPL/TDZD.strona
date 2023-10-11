import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import ShrekI from '../../public/ComfortableLameBangeltiger-mobile.gif'
import Logo from '../../public/bgImg.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    type discordStat = {
        _id?: string;
        sku: string;
        members: string;
    }

    const [statDataLoading, setStatDataLoading] = useState(true)
    const [statData, setStatData] = useState<discordStat>() 

    const [Shrek, setShrek] = useState(false)
  
  

    type announcementType = [
    {
        _id?: string;
        Title: string;
        Description: string;
        Date: string;
        Author: string;
        AuthorAvatar: string;
    }
    ]
    const [announcementLoading, setAnnouncementLoading] = useState(true)
    const [announcementData, setAnnouncementData] = useState<announcementType>() 
    useEffect(() => {
        setAnnouncementLoading(true)
        fetch('https://api.trafilesdozlejdzielnicy.pl/tdzd/announcement')
          .then((res) => res.json())
          .then((data) => {
            let list:any = [];
            for(let i =data.length-1; i>=data.length-4; i--){
                list.push(data[i])
            }
            setAnnouncementData(list)
            setAnnouncementLoading(false)
          })
      }, []);

      type adminType = 
      [
        {
          Color:   any;
          Rank_Name: any;
          admins: any
          map(arg0: (item2: any, index2: any) => any): any
          Discord?:{
            AvatarUrl?: string;
            discriminator?: string;
            username?: string;
          }
        }
      ]
        
    const [adminsPublicLoading, setAdminsPublicLoading] = useState(true)
    const [adminBigO, setAdminBigO] = useState<adminType>() 
    const [adminBigH, setAdminBigH] = useState<adminType>() 
    const [adminD0, setAdminD0] = useState<adminType>() 
    const [adminSCP0, setAdminsSCP0] = useState<adminType>() 
    useEffect(() => {
      setAdminsPublicLoading(true)
        fetch('https://api.trafilesdozlejdzielnicy.pl/user/publicAdminInfo/1')
          .then((res) => res.json())
          .then((data) => {
            setAdminBigO(data.filter((x: any) => x?.role[0]?.group == "BigO"))
            setAdminBigH(data.filter((x: any) => x?.role[0]?.group == "BigH"))
            setAdminD0(data.filter((x: any) => x?.role[0]?.group == "DEV"))
            setAdminsSCP0(data.filter((x: any) => x?.role[0]?.group == "SCP"))
            setAdminsPublicLoading(false)
          })
      }, []);
    
  return (
    <>
      <Head>
        <title>Trafiłeś do Złej Dzielnicy</title>
        <meta name="description" content="Trafiłeś do Złej Dzielnicy jest siecią serwerów od graczy dla graczy, tworzymy różnorodną społeczność graczy by zapewnić świetne miejsce do spędzania czasu." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Trafiłeś do Złej Dzielnicy"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trafilesdozlejdzielnicy.pl/" />
        <meta property="og:image" content="https://api.trafilesdozlejdzielnicy.pl/assets/TDZD_LOGO.png" />
        <meta property="og:description" content="Trafiłeś do Złej Dzielnicy jest siecią serwerów od graczy dla graczy, tworzymy różnorodną społeczność graczy by zapewnić świetne miejsce do spędzania czasu." />
        <meta name="theme-color" content="#0095D6"></meta>
      </Head>

      <main className={styles.main} id='home'>
        <section id='landingPage' className={styles.landingPage}>
          <div className={styles.landingPageLeft} >
            <h1 className=" text-1xl sm:text-2xl lg:text-3xl font-extrabold dark:text-white w-[60%]">Trafiłeś do Złej Dzielnicy</h1>
            <p className="my-4 base:text-lg text-gray-500 sm:text-sm xl:text-sm xl:w-3/5 sm:w-full base:w-full">Witajcie na naszym rewirze! Chcecie dołączyć do naszego wewnętrznego kręgu? Zostań na dłużej, a my wprowadzimy cię w życie!</p>

            <a href="https://discord.com/invite/CJhWA4w2wy" className="inline-flex items-center  base:text-lg text-gray-500 sm:text-sm xl:text-sm text-white  rounded p-2 duration-300 bg-sky-500 shadow-lg shadow-sky-700/40 hover:shadow-sm">
            Dołącz na naszego discorda!
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
          </div>
          <div className={styles.landingPageRight} >
            {
             // <Image className='sm:w-[40%] w-0' src={Logo.src} width={1400} height={1200} alt={''}></Image>
            }
          </div>
        </section>
        <section id='timeLine'>
          {/*
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-sky-500 mb-20">Ogłoszenia <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10">parafialne</span></h2>
          <ol className="ml-4 relative border-l border-gray-700">     
          {
            !announcementLoading?
            (
                announcementData?.map((item, index) => (
                    <li className="mb-10 ml-6" key={index}>
                        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-gray-800">
                            <img className="rounded-full shadow-lg" src={item.AuthorAvatar+"32"} alt="Bonnie image"/>
                        </span>
                        <div className="p-4 bg-white  rounded-lg shadow-sm bg-gray-900 ">
                            <div className="items-center justify-between pb-4 rounded-lg shadow-sm sm:flex bg-gray-900 ">
                                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{item.Date}</time>
                                <div className="text-sm font-normal text-gray-300"> <span className='text-white'>{item.Title}</span> ~ <span className='text-sky-500'>{item.Author}</span></div>
                            </div>
                            <div className="p-3 text-xs italic font-normal text-gray-400 rounded-lg bg-gray-800 ">{item.Description}</div>
                        </div>
                    </li>
                ))

            )
            :
            (<></>)
          }             

          </ol>*/}
        </section>

        <section id='about' className="w-full h-fit py-80 flex items-center">
          <div className='h-fit sm:w-[50%] w-0 mb-20 flex justify-center'>
            <img src='../96c.gif'/>
          </div>
          <div className='h-fit sm:w-[50%] w-full '>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-sky-500 mb-10">Dlaczego <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10">my?</span></h2>
            <p className=" text-sm sm:text-sm lg:text-1xl mb-3 font-light text-gray-500 dark:text-gray-400 first-letter:text-7xl first-letter:font-bold first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">Jesteśmy społecznością discord z niepowtarzalnym community i kompetentną administracją... wszyscy czekają żeby przywitać cię z otwartymi ramionami ༼ つ ◕_ ◕ ༽つ Posiadamy Serwer Non-RP w klimatycznej grze SCP: Secret Laboratory, która w połączeniu z naszym community zapewnia rozrywkę na wiele godzin. </p>
            <p className="font-light text-gray-500 dark:text-gray-400">Jesteśmy w ciągłej fazie rozwoju, to wy tworzycie naszą społeczność i jesteśmy otwarci na wszelkie sugestie oraz propozycje, które będą miały na celu wzbogacenie naszej oferty. </p>
          </div>
        </section>

        <section id='randomBlocks' className='flex flex-wrap items-center justify-around w-full mb-40 min-h-fit align'>
          <div className="max-w-sm border rounded-lg shadow bg-gray-900 border-gray-800 my-10">
              <a>
                  <img className="rounded-t-lg" src="" alt="" />
              </a>
              <div className="p-5">
                  <a>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Od graczy Dla graczy</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400">Tworzymy różnorodną społeczność graczy a naszym celem jest tworzenie miejsc do miłego spędzenia czasu.
Z tego też powodu istnieje 4 ownerów, każdy ma inne podejście i wierzymy że dywagacjami i zdrową rozmową jesteśmy w stanie tworzyć lepsze miejsca do gier niż takie z którymi dotychczas się spotykaliśmy.</p>
                  {//<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    //  Read more
                    //  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  //</a>
                }
              </div>
          </div>

          <div className="max-w-sm border rounded-lg shadow bg-gray-900 border-gray-800 my-10 hover:cursor-pointer " onClick={() => setShrek(!Shrek)}>
              <a>
                  <img className="rounded-t-lg" src="" alt="" />
              </a>
              <div className="p-5">
                  <a>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Wykwalifikowani technicy</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400">Wykwalifikowani technicy codziennie pracują nad tym, żeby serwery cieszyły nie tylko duszę, ale też oko. </p>
                  
                  {//<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    //  Read more
                    //  <svg arissa-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  //</a>
                }
                {
                  Shrek? (<img className='rounded'  src={ShrekI.src}/>):(<></>)
                }
                  
                
              </div>
          </div>

          <div className="max-w-sm border rounded-lg shadow bg-gray-900 border-gray-800 my-10">
              <div className="p-5">
                  <a className='flex'>
                  <img className="rounded-t-lg h-6" src="http://api.trafilesdozlejdzielnicy.pl/assets/puzzle-piece-plugin.png" alt="" /><h5 className="mb-2 text-2xl font-bold tracking-tight text-white ml-2">Tworzymy własne pluginy</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400">Tworzymy własne pluginy jednocześnie starając się podchodzić do rozgrywki unikalnie</p>
                  {//<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    //  Read more
                    //  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  //</a>
                }
              </div>
          </div>
         
        </section>

        <section id='team' className=' w-full mt-40 overflow-hidden'>
          <div className='flex flex-col justify-center overflow-hidden'>
            <h2 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Nasza drużyna  </h2>
            <p className="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Oto nasza ekipa z którą prowadzimy Złą dzielnicę.<br/> jeśli chcesz do nas dołączyć sprawdź Kodeks moderacji i zgłoś się do nas na discordzie!</p>
            <div className='self-center flex'>
              <a href="https://docs.google.com/document/d/1wvBunKcm0bBVLjwRqz6cPmrKmpoC6fPFLXw0ruoubmQ/edit#heading=h.knzc1cxzn9gm" className="mr-10 self-center w-fit inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Kodeks Moderacji
                  <svg className="w-5 h-5 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="https://docs.google.com/document/d/1AGAI2SZV3XVggAfxYbgCi-EE-W_TUq9GGzL2LnVVfmg/edit#heading=h.w4gud2o1v463" className="self-center w-fit inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-sky-500  rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Regulamin SCP
                  <svg className="w-5 h-5 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div className='mt-10 overflow-hidden'>
            <h3 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white ">Ownerzy</h3>
            <div className='flex flex-wrap justify-center  mt-10'>

               {//adminsPublicLoading    //adminsPublicData
                    !adminsPublicLoading?
                    (
                      adminBigO?.map((item: any, index) => {
                        return(
                          
                          <div key={index} className="flex items-center space-x-4 justify-center mr-10">
                          <img className="w-10 h-10 rounded-full" src={item.user.discordAvatarUrl+"32"} alt=""/>
                          <div className="font-medium dark:text-white m-2">
                              <div>{item.user.discordUsername}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400" style={{color: item.role[0]?.color}}>{item.role[0]?.name}</div>
                          </div>
                        </div>
                        )

                        })
////
                    )
                    :
                    (<></>)
                }
            </div>
          </div>

          <div className='mt-10 overflow-hidden'>
            <h3 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white">Head Admin</h3>
            <div className='flex flex-wrap justify-center  mt-10'>
               {//adminsPublicLoading    //adminsPublicData
                    !adminsPublicLoading?
                    (
                      adminBigH?.map((item: any, index) => {
                        return(
                          
                          <div key={index} className="flex items-center space-x-4 justify-center mr-10">
                          <img className="w-10 h-10 rounded-full" src={item.user.discordAvatarUrl+"32"} alt=""/>
                          <div className="font-medium dark:text-white m-2">
                              <div>{item.user.discordUsername}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400" style={{color: item.role[0]?.color}}>{item.role[0]?.name}</div>
                          </div>
                        </div>
                        )

                        })
////
                    )
                    :
                    (<></>)
                }
            </div>
          </div>

          <div className='mt-10 overflow-hidden'>
            <h3 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white">Developerzy</h3>
            <div className='flex flex-wrap justify-center  mt-10'>
               {//adminsPublicLoading    //adminsPublicData
                    !adminsPublicLoading?
                    (
                      adminD0?.map((item: any, index) => {
                        return(
                          
                          <div key={index} className="flex items-center space-x-4 justify-center mr-10">
                          <img className="w-10 h-10 rounded-full" src={item.user.discordAvatarUrl+"32"} alt=""/>
                          <div className="font-medium dark:text-white m-2">
                              <div>{item.user.discordUsername}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400" style={{color: item.role[0]?.color}}>{item.role[0]?.name}</div>
                          </div>
                        </div>
                        )

                        })
////
                    )
                    :
                    (<></>)
                }
            </div>
          </div>

          <div className='mt-10 overflow-hidden'>
            <h3 className="mb-4 text-center text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white">SCP Staff</h3>
            <div className='flex flex-wrap justify-center  mt-10'>
                {//adminsPublicLoading    //adminsPublicData
                    !adminsPublicLoading?
                    (
                      adminSCP0?.map((item: any, index) => {
                        return(
                          
                          <div key={index} className="flex items-center space-x-4 justify-center mr-10">
                          <img className="w-10 h-10 rounded-full" src={item.user.discordAvatarUrl+"32"} alt=""/>
                          <div className="font-medium dark:text-white m-2">
                              <div>{item.user.discordUsername}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400" style={{color: item.role[0]?.color}}>{item.role[0]?.name}</div>
                          </div>
                        </div>
                        )

                        })
////
                    )
                    :
                    (<></>)
                }

            </div>
          </div>


        </section>
      </main>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>

    </>
  )
}
