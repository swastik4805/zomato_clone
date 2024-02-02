
import hero from '../assets/hero.jpg'
import { ExploreOptions } from '../components/ExploreOptions'
import { GetTheApp } from '../components/GetTheApp'
import { Heropart } from '../components/Heropart'

export function Homepage(){
    return(
        <div>
            <div className='bg-red-300'>hello</div>
            <Heropart></Heropart>
            <GetTheApp></GetTheApp>
            <ExploreOptions></ExploreOptions>
        </div>
    )
}