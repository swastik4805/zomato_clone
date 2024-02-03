import appstore from "../../assets/appstore.png"
import playstore from "../../assets/playstore.png"
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



export function FooterSocial(){
    return(
        <div>

            <div>
                <div className="font-medium text-lg pb-3">
                    SOCIAL LINKS
                </div>
                <div className="flex justify-between pb-3">
                    <IoLogoLinkedin />
                    <RiInstagramFill />
                    <AiFillTwitterCircle />
                    <FaYoutube />
                    <FaFacebook /> 
                </div>
                <div>
                    <img className="py-1" style={{width:'100px'}} src={appstore}></img>
                    <img className="py-1" style={{width:'100px'}} src={playstore}></img>
                </div>
            </div>
        </div>
    )
}