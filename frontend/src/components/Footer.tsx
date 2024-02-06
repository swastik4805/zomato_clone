import { FooterSocial } from "./footerSubParts/FooterSocial";
import { Lists } from "./footerSubParts/Lists";
import zomato from "../assets/zomatoInBlack.png"
import { DropDown } from "./footerSubParts/DropDown";

export function Footer(){
    const list1=["who we are","blog","work with us","invstor relations", "Report Fraud","press Kit","Contact us"]
    const list2=['Zomato', 'Blinkit', 'Feeding India', 'Hyperpure', 'Zomaland'];
    const list3=['Partner with us','Apps For You']
    const list4=['Zomato for Enterprise']
    const list5=['privacy','Security','Terms','Sitemap']
    return(
        <div className="flex bg-gray-100">
            <div className=" w-2/12">
            </div>

            <div className="w-8/12 pt-6">
                <div className="flex justify-between px-4">
                    <div style={{width:'150px'}}><img src={zomato}></img></div>
                    <div>
                        <DropDown></DropDown>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div>
                    <div className="flex justify-center pb-4 px-2">
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
                <br></br>
                <div className="text-sm text-gray-400 p-4">
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                </div>
            </div>

            <div className="w-2/12">
            </div>

        </div>
    )
}