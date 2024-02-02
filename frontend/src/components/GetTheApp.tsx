import mob from "../assets/mob.jpg"
import playstore from "../assets/playstore.png"
import appstore from  "../assets/appstore.png"
import { useState } from "react";

export function GetTheApp(){
    return(
        <div className="bg-[#E6E6E6] flex justify-center p-4">
            <div>

            </div>

            <div style={{width:'200px'}} className="pt-12">
                <img src={mob}></img>
            </div>
            <GetAppCard></GetAppCard>
        </div>
    )
}



function GetAppCard(){
    const [emailOrPhone, setEmailOrPhone] = useState('email');

    const handleChange = (event) => {
        setEmailOrPhone(event.target.value)
    }


    return(
        <div>
            <div className="text-4xl font-semibold p-4">
                Get The Zomato app
            </div>
            <div className="p-4 text-sm text-gray-600">
                We will send you a link, open it on your phone to download the app
            </div>


        
            
            <div className="flex p-4">
                <div className="pr-6">
                    <input
                    type="radio"
                    value="email"
                    checked={emailOrPhone === 'email'}
                    onChange={handleChange}
                    /> email
                </div>
                <div className="pl-6">
                    <input
                    type="radio"
                    value="phone"
                    checked={emailOrPhone === 'phone'}
                    onChange={handleChange}
                    /> phone
                </div>
            </div>



            <div className="flex">
                <form>   
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative pl-3">
                        
                        <input type="search" id="default-search" 
                        style={{ width: '250px', height: '40px' }}
                        className="pl-2 text-sm text-gray-900 rounded-lg dark:text-white border" 
                        placeholder={emailOrPhone} required/>
                    </div>
                </form>
                <div className="pl-2">
                    <button className="bg-red-400 rounded-md p-2 text-white">
                        share app link
                    </button>
                </div>
            </div>



            <div className="text-sm text-gray-400 p-4">
                Download app from
            </div>




            <div className="flex p-4">
                <img className="pr-1" style={{width:'100px', height:'30px'}} src={playstore}></img>
                <img className="pl-1" style={{width:'100px', height:'30px'}} src={appstore}></img>
            </div>
        </div>
    )
}