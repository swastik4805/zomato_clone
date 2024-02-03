import coll1 from '../assets/coll1.jpg'


export function CollectionsCard(){
    return(
        <div className="bg-[url('./assets/coll1.jpg')] pt-12 bg-cover bg-center bg-no-repeat rounded-md">
            <div className='pt-48'>

                <div className='shadow-xl bg-gradient-to-t from-black rounded-md'>
                    <div className='text-white text-xl px-4'>
                        7 best luxury dinin...
                    </div>
                    
                    <div className='text-white text-xl pl-4 pb-2'>
                        7 places
                    </div>
                </div>
            </div>
        </div>
    )
}

