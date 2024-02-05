import { useParams } from "react-router-dom";
import {AllRestaurants} from "../../../backend/AllRestaurant"
import { Appbar } from "../components/Appbar";
import { Footer } from "../components/Footer";
import coll1 from "../assets/coll1.jpg"

export function RestaurantName(){
    const {restaurantName}=useParams();
    const restaurant=AllRestaurants.find((r)=> r.name==restaurantName);
    // console.log(restaurantName)
    if(!restaurant){
        return(
            <div>Page Not Found</div>
        )
    }

    return(
        <div className="flex">
            <div className=" md:w-2/12"></div>

            <div className="md:w-8/12">
                <Appbar></Appbar>
                <br></br>
                <img src={restaurant.img}></img>
                <br></br>
                <div className="font-semibold text-4xl">
                    {restaurant.name}
                </div>
                <div className="text-gray-500 pt-4">
                    {restaurant.desc}
                </div>
                <div className="text-gray-400">
                    {restaurant.address}
                </div>
                <div className="flex pt-2">
                <div className="text-red-300 pr-3"> Open Now </div>
                <div>11:30am – 11pm (Today)</div>
                </div>
                

                <div className="flex pt-8">
                    <div className="w-2/3 overflow-y-auto no-scrollbar" style={{ maxHeight: '100vh' }}>
                        <div>Menu</div>
                        <div className="flex">
                            <div><img className="rounded-lg pr-6" src={restaurant.menuImage1}></img></div>
                            <div><img src={restaurant.menuImage2}></img></div>
                        </div>
                        
                        <RenderCuisines prop={restaurantName}></RenderCuisines>
                        <RenderWhatPeopleSay prop={restaurantName}></RenderWhatPeopleSay>
                        <RenderAverageCost prop={restaurantName}></RenderAverageCost>
                        <RenderMoreInfo prop={restaurantName}></RenderMoreInfo>
                        <RenderReviewHighlights prop={restaurantName}></RenderReviewHighlights>
                    </div>
                    <div className="flex w-1/3 overflow-hidden">
                        {/* here the map will go*/}
                        {/* <img style={{height:'100px'}}src={coll1}></img> */}
                        <RenderMapComponent prop={restaurantName}></RenderMapComponent>
                    </div>
                </div>

                
                {/* <ExportRestLisy></ExportRestLisy> */}

                <br></br>
                {/* <ExploreOptions></ExploreOptions> */}

                <br></br>
                <Footer></Footer>

            </div>
            <div className="md:w-2/12"></div>
        </div>
    )
}


function RenderCuisines({prop}){
    const cuisines=AllRestaurants.find((r)=> r.name===prop)
    const arr=cuisines?.Cuisines;
    return(
        <div>
        <div className="text-xl pt-8">
            Cuisines
        </div>
        {arr.length > 0 ? (
            <div className="flex">
            {arr.map((cuisine, index) => (
                <div className="pt-2 pr-2">
                    <div key={index} className=" rounded-3xl p-1 border-solid border-2 border-black-200 text-green-700 text-sm">
                        {cuisine}
                    </div>
                </div>
                
            ))}
            </div>
        ):(
            <p>No cuisines available for {prop}</p>
        )}
        </div>
    )
}




function RenderWhatPeopleSay({prop}){
    const cuisines=AllRestaurants.find((r)=> prop===r.name);
    
    return(
        <div className="pt-4">
        <div className="text-xl pt-8">
            People Say This Place Is Known For
        </div>
        <div className="text-md text-gray-400 pt-2">
            {cuisines?.Peoplesay}
        </div>
        </div>
    )
}

function RenderAverageCost({prop}){
    const cuisines=AllRestaurants.find((r)=> prop===r.name);
    return(
        <div className="pt-4">
        <div className="text-xl pt-8">
            Average Cost
        </div>
        <div className="text-md text-gray-400 pt-2">
            {cuisines?.AverageCost}
        </div>
        <div className="text-sm text-gray-300">
            Exclusive of applicable taxes and charges, if any
        </div>
        </div>
    )
}


function RenderMoreInfo({prop}){
    const cuisines=AllRestaurants.find((r)=> r.name==prop);
    const arr=cuisines?.moreInfo;

    return(
        <div>
            <div className="text-xl pt-8">
                More Info
            </div>
            <div className="grid grid-cols-2">
                {arr?.map((info,index)=>(
                    <div className="flex justify-between">
                        <div className="flex pt-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#119199" width="20" height="25" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iRDDBk"><path d="M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.75 7.25L8.75 12.1875L6.25 9.75C5.9375 9.4375 5.5 9.4375 5.1875 9.75C4.875 10 4.875 10.5 5.1875 10.8125L8.1875 13.8125C8.3125 13.9375 8.5 14.0625 8.75 14.0625C8.9375 14.0625 9.125 14 9.25 13.8125L14.75 8.3125C15.0625 8 15.0625 7.5625 14.75 7.25C14.4375 6.9375 14 6.9375 13.75 7.25Z"></path></svg>
                            </div>
                            <div className="text-md text-gray-400 pl-1">{info}</div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}


function RenderReviewHighlights({prop}){
    const cuisines=AllRestaurants.find((r)=> r.name===prop)
    const arr=cuisines?.ReviewHighlights;
    return(
        <div>
        <div className="text-xl pt-8">
            Cuisines
        </div>
        {arr.length > 0 ? (
            <div className="flex flex-row">
            {arr.map((x, index) => (
                <div className="pt-2 pr-2">
                    <div key={index} className="rounded-3xl p-1 border-solid border-2 border-black-200 text-green-700 text-sm">
                        <div className="whitespace-nowrap">
                        {x}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        ):(
            <p>No cuisines available for {prop}</p>
        )}
        </div>
    )
}
function RenderMapComponent({prop}){
    const restaurant=AllRestaurants.find((r)=> prop===r.name)
    const phoneNumber=restaurant?.call

    return(
        <div className="bg-gray-100 p-4 rounded-xl shadow-lg"
        style={{height:'350px'}}>
            <div>Call</div>
            {phoneNumber?.map((x,index)=>(
                <div className="text-red-400">{x}</div>
            ))}
            <div className="pt-4">Directions</div>
            <img src={"https://maps.zomato.com/php/staticmap?center=20.2844157098,85.8347158134&maptype=zomato&markers=20.2844157098,85.8347158134,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"}></img>
            <div>{restaurant.address}</div>
            <div className="flex justify-between pt-6">
                <button className="bg-white px-3 py-1 rounded-lg border-solid shadow">Copy</button>
                <button className="bg-white px-3 py-1 rounded-lg border-solid shadow">Directions</button>
            </div>
        </div>
    )
}