import { Appbar } from "../components/Appbar";
import { Searchbar } from "../components/Searchbar";
import img from "../assets/coll1.jpg"
import coll1 from "../assets/coll1.jpg"
import { CollectionsCardSmall } from "../miniComponents/CollectionsCardSmall";
import RestDetails from "../../../backend/BestLuxuryDiningComp"
import { ExploreOptions } from "../components/ExploreOptions";
import { Footer } from "../components/Footer";



export function BestLuxuryDiningPLaces(){
    return(
        <div className="flex">
            <div className=" md:w-2/12"></div>

            <div className="md:w-8/12">
                <Appbar></Appbar>
                <div className="bg-[url('./assets/coll1.jpg')]">

                    <div className="p-4 pb-6 shadow-xl bg-gradient-to-t from-black rounded-md">
                        <div className="pt-48 text-3xl text-white">
                            7 Best Luxury Dining Places
                        </div>
                        <div className="text-white">
                        Restaurants that are unmatched on multiple fronts with luxurious indoor settings and extravagant menus
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
                        ></CollectionsCardSmall>
                    </div>
            ))}
        </div>
    )
}