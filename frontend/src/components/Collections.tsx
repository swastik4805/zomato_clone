import { CollectionsCard } from "../miniComponents/CollectionsCard";

export function Collections(){
    return(
        <div className="flex p-4">
            <div className="p-4"><CollectionsCard></CollectionsCard></div>
            <div className="p-4"><CollectionsCard></CollectionsCard></div>
            <div className="p-4"><CollectionsCard></CollectionsCard></div>
            <div className="p-4"><CollectionsCard></CollectionsCard></div>
        </div>
    )
}