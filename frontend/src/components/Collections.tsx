import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import CollectionList from "../../../backend/Collections/CollectionsList"


export function Collections(){
    // const x="https://b.zmtcdn.com/data/collections/a8173c084c01678cd6234dc98ba93ea4_1694690149.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
    const navigate=useNavigate();
    return(
        
        <div  >

            <RenderCollections></RenderCollections>

        </div>
    
    )
}



// 

function FirstLabel({ sentence }) {
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 640px)'
  }); // Adjust the breakpoint as needed
  const characterLimit = isSmallScreen ? 10 : 20;

  const truncatedSentence = sentence.length > characterLimit
    ? `${sentence.slice(0, characterLimit)}...`
    : sentence;

  return (
    <div className='text-white text-xl'>
      {truncatedSentence}
    </div>
  );
}


function RenderCollections(){
    const navigate=useNavigate();
    return(
        <div className='p-4 grid grid-cols-2 md:grid-cols-4'>
            {CollectionList.map(x=>(
                <div className="p-4" onClick={()=>{
                    navigate(x.navigateTo)
                }}>
                    <div className={`pt-12 bg-cover bg-center bg-no-repeat rounded-md`}
                    style={{backgroundImage:"url("+x.bgImg+")"}}
                        onClick={()=>{
                            navigate(x.navigateTo);
                        }}>
                            <div className='pt-48'>
                                <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                                    <div className='text-white text-xl px-4'>
                                        <FirstLabel sentence={x.firstTitle}></FirstLabel>
                                    </div>
                                    
                                    <div className='text-white text-xl pl-4 pb-2'>
                                        {x.firstTitle[1]===" "? x.firstTitle[0] : x.firstTitle[0]+x.firstTitle[1]} Places
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}