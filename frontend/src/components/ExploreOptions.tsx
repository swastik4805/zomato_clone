
import { DropDownMenu } from "../miniComponents/DropDownList";
import cities from "../../../backend/City_db"
import popularRestaurant from "../../../backend/PopularRestaurant_db"
export function ExploreOptions(){
    
    return(
        <div>
            <DropDownMenu heading={"Popular Restaurant types near me"} list={popularRestaurant}></DropDownMenu>
            <DropDownMenu heading={"Cities We Deliver to"} list={cities}></DropDownMenu>
        </div>
    )
    

}