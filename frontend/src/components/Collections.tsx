import { CollectionsCard } from "../miniComponents/CollectionsCard";
import { useMediaQuery } from 'react-responsive';

export function Collections(){
    return(
        <div className="p-4 grid grid-cols-2 md:grid-cols-4">
            <div className="p-4">
                <div className="bg-[url('./assets/coll1.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>

                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"7 Best Luxury Dining Places"}></FirstLabel>
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="bg-[url('./assets/coll2.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>

                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"16  Best Bars & Pubs"}></FirstLabel>
                                
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="bg-[url('./assets/coll3.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>

                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"9 Places for Authentic Odia Cuisine"}></FirstLabel>
                                
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="bg-[url('./assets/coll4.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>

                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"9 Great Cafes"}></FirstLabel>
                                
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="bg-[url('./assets/coll5.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>

                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"8 Serene Rooftop Places"}></FirstLabel>
                                
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="bg-[url('./assets/coll6.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>

                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"8 Classic Biryani Places"}></FirstLabel>
                                
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="bg-[url('./assets/coll7.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
                    <div className='pt-48'>
                        
                        <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
    
                            <div className='text-white text-xl px-4'>
                                <FirstLabel sentence={"9 Places for South Indian Delicacies"}></FirstLabel>
                                
                            </div>
                            
                            <div className='text-white text-xl pl-4 pb-2'>
                                7 places
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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