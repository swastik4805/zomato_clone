import RestDetails from "../../../../backend/Collections/CollectionsSub/ClassicBiryaniPlaces"
import { Appbar } from "../../components/Appbar"
import { ExploreOptions } from "../../components/ExploreOptions"
import { Footer } from "../../components/Footer"
import { CollectionsCardSmall } from "../../miniComponents/CollectionsCardSmall"

export function ClassicBiryaniPlaces(){
    return(
        <div>
        <Appbar></Appbar>
        <div className="flex pt-2">
            <div className=" md:w-2/12"></div>

            <div className="md:w-8/12">
                
                <div className="bg-[url('./assets/coll6.jpg')]">

                    <div className="p-4 pb-6 shadow-xl bg-gradient-to-t from-black rounded-md">
                        <div className="pt-48 text-3xl text-white">
                        8 Classic Biryani Places
                        </div>
                        <div className="text-white">
                        These biryani spots in the city hit all the right notes, authenticity, aroma and flavourful meat so tender that it falls off the bone.
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
                <div className="p-2">
                    <CollectionsCardSmall
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
