import { Appbar } from "../../components/Appbar";
import { CollectionsCardSmall } from "../../miniComponents/CollectionsCardSmall";
import RestDetails from "../../../../backend/Collections/CollectionsSub/PlacesForAuthenticOdiaCuisine"
import { ExploreOptions } from "../../components/ExploreOptions";
import { Footer } from "../../components/Footer";



export function PlacesForAuthenticOdiaCuisine(){
    return(
        <div className="flex">
            <div className=" md:w-2/12"></div>

            <div className="md:w-8/12">
                <Appbar></Appbar>
                <div className="bg-[url('./assets/coll3.jpg')]">

                    <div className="p-4 pb-6 shadow-xl bg-gradient-to-t from-black rounded-md">
                        <div className="pt-48 text-3xl text-white">
                        9 Places for Authentic Odia Cuisine
                        </div>
                        <div className="text-white">
                        Discover the flavors of Odia cuisine at Bhubneshwar's top restaurants! Indulge in traditional dishes like dalma, machha besara, and chhena poda.
                        </div>
                    </div>
                </div>
                <br></br>
                
                <ExportRestList></ExportRestList>

                <br></br>
                <ExploreOptions></ExploreOptions>

                <br></br>
                <Footer></Footer>

            </div>
            <div className="md:w-2/12"></div>
        </div>
    )
}
function ExportRestList(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4">
            {RestDetails.map(x=>(
                <div className="p-2"><CollectionsCardSmall
                    title={x.title}
                    rating={x.rating}
                    desc={x.desc}
                    imgURL={x.img}
                    
                    linkTo={`/restaurant/${x.title}`}
                    ></CollectionsCardSmall>
                </div>
            ))}
        </div>
    )
}