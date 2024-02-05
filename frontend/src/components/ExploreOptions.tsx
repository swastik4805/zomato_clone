
import { DropDownMenu } from "../miniComponents/DropDownList";
import cities from "../../../backend/City_db"
import popularRestaurant from "../../../backend/PopularRestaurant_db"
import popularCuisines from "../../../backend/PopularCuisines"
//this is the drop down menus
export function ExploreOptions(){
    
    return(
        <div className="p-4">
            <div className="pt-8 pl-4 md:pl-12 text-2xl font-semibold">
            Explore options near me
            </div>
            <div className="p-6">
                <div className="border-solid border-2 rounded-lg">
                    <DropDownMenu heading={"Popular cuisines near me"} list=
                        {popularCuisines}></DropDownMenu>
                </div>
                <br></br>
                <div className="border-solid border-2 rounded-lg">
                    <DropDownMenu heading={"Popular Restaurant types near me"} list=
                    {popularRestaurant}></DropDownMenu>
                </div>
                <br></br>
                <div className="border-solid border-2 rounded-lg">
                    <DropDownMenu heading={"Cities We Deliver to"} list={cities}></DropDownMenu>
                </div>
            </div>
        </div>
    )
    

}