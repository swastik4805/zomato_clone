import { FaRegStar } from "react-icons/fa";

export function StarRating({num}){
    return(

        <div className="flex bg-green-400 rounded-md w-11">
            <div className="pl-1.5 text-xs">
                {num}
            </div>
            <div className="pt-0.5 pl-1 text-xs">
                <FaRegStar />
            </div>
        </div>
    )
}