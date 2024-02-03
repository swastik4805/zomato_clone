import { FooterSocial } from "./footerSubParts/FooterSocial";
import { Lists } from "./footerSubParts/Lists";
import zomato from "../assets/zomatoInBlack.png"

export function Footer(){
    const list1=["who we are","blog","work with us","invstor relations", "Report Fraud","press Kit","Contact us"]
    const list2=['Zomato', 'Blinkit', 'Feeding India', 'Hyperpure', 'Zomaland'];
    const list3=['Partner with us','Apps For You']
    const list4=['Zomato for Enterprise']
    const list5=['privacy','Security','Terms','Sitemap']
    return(

        <div className="bg-gray-100 pt-6">
            <div className="flex justify-between">
                <div style={{width:'150px'}}><img src={zomato}></img></div>
                <div>India  English</div>
            </div>

            <br></br>
            <br></br>
            <div>
                <div className="flex justify-center">
                    <div className="px-4"><Lists title={"ABOUT ZOMATO"} list={list1}></Lists></div>
                    <div className="px-4"><Lists title={"ZOOMAVERSE"} list={list2}></Lists></div>

                    <div>
                        <div className="px-4 pb-4"><Lists title={"FOR RESTAURANTS"} list={list3}></Lists></div>
                        <div className="px-4"><Lists title={"FOR ENTERPRISES"} list={list4}></Lists></div>
                    </div>

                    <div className="px-4"><Lists title={"LEARN MORE"} list={list5}></Lists></div>

                    <FooterSocial></FooterSocial>
                </div>
            </div>
        </div>
    )
}