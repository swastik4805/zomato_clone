import { Appbar } from "../../components/Appbar";
import { CollectionsCardSmall } from "../../miniComponents/CollectionsCardSmall";
import RestDetails from "../../../../backend/Collections/CollectionsSub/BestBarsAndPubs"
import { ExploreOptions } from "../../components/ExploreOptions";
import { Footer } from "../../components/Footer";



export function BestBarsAndPubs(){
    return(
        <div>
            <Appbar></Appbar>
        <div className="flex pt-2">
            <div className=" md:w-2/12"></div>

            <div className="md:w-8/12">
                
                <div className="bg-[url('./assets/coll2.jpg')]">
                    <div className="p-4 pb-6 shadow-xl bg-gradient-to-t from-black rounded-md">
                        <div className="pt-48 text-3xl text-white">
                            16 Best Bars & Pubs
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
            </div>
            <div className="md:w-2/12"></div>
        </div>
        <Footer></Footer>
        </div>
    )
}
function ExportRestList(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4">
            {RestDetails.map(x=>(
                <div className="p-2 cursor-pointer"><CollectionsCardSmall
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