
import { ExploreOptions } from '../components/ExploreOptions'
import { Footer } from '../components/Footer'
import { GetTheApp } from '../components/GetTheApp'
import { Heropart } from '../components/Heropart'
import {Collections} from  '../components/Collections'

export function Homepage(){
    return(
    
        <div>
            {/* <div className='bg-red-300'>hello</div> */}
            <Heropart></Heropart>
            <Collections></Collections>
            <GetTheApp></GetTheApp>
            <ExploreOptions></ExploreOptions>
            <Footer></Footer>
        </div>
    
    )
}