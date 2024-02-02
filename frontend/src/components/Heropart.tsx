import logo from '../assets/zomato.png'
import { Searchbar } from './Searchbar'

export function Heropart(){
    return(
        <div className="bg-[url('./assets/hero.jpg')] p-4 pt-20">
            <div className="h-20 flex justify-center pb-4">
                <img src={logo}></img>
            </div>
            <div className="text-white text-4xl flex justify-center pt-6">
                Discover the best food & drinks in Mumbai
            </div>
            <div className="flex justify-center pt-8 pb-6">
                <Searchbar label="Search for restautant"></Searchbar>
            </div>
        </div>
    )
}