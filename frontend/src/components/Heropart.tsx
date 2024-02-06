import { useEffect, useState } from 'react';
import logo from '../assets/zomato.png'
import { Searchbar } from './Searchbar'

export function Heropart(){
    const MetroCities=['Kolkata','Mumbai','Delhi','Hydrabad','Chennai'];
    const[curIndex, setCurIndex]=useState(0)

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurIndex((prevIndex)=>
                (prevIndex+1)%5)
        },5000);
        return ()=> clearInterval(intervalId);
    },[])

    return(
        <div className='flex justify-center'>
        <div style={{width:'100%'}} className="bg-[url('./assets/hero.jpg')] p-4 pt-20 ">
            <div className="h-20 flex justify-center pb-4">
                <img src={logo}></img>
            </div>
            <div className="text-white text-4xl flex justify-center pt-6">
                Discover the best food & drinks in {MetroCities[curIndex]}
            </div>
            <div className="flex justify-center pt-8 pb-6">
                <Searchbar label="Search for restautant"></Searchbar>
            </div>
        </div>
        </div>
    )
}