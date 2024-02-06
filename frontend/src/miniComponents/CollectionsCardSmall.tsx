// import coll1 from "../assets/coll1.jpg"
import { useNavigate } from "react-router-dom"
import { StarRating } from "./StarRating"


export function CollectionsCardSmall({title,rating,desc, imgURL, linkTo}){
    const navigate=useNavigate();
    return(
        
        <div>
            <div onClick={()=>{
                navigate(linkTo)
            }}>
                <img src={imgURL} className="rounded-md"></img> 
                <div className="text-sm font-semibold">
                    {title}
                </div>
                <div className="flex">
                    <div>
                        <StarRating num={rating}></StarRating>
                    </div>
                    <div className="text-xs pl-2 text-gray-700">
                        DINING
                    </div>
                </div>
                <div className="text-xs pt-2 text-gray-500">
                    {desc}
                </div>
            </div>
        </div>
    )
}

