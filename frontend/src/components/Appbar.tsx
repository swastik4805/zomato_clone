import { useNavigate } from "react-router-dom";
import zomato from "../assets/zomatoInBlack.png"


export function Appbar(){
  const navigate=useNavigate();
    return(
        <div className="shadow-md">
            <div  className="flex justify-between pb-2">

                <div className="pt-3 pl-4 w-1/6 cursor-pointer"
                onClick={()=>{
                  navigate("/")
                }}>
                    <img style={{width:'100px'}} src={zomato}></img>
                </div>

                <div className="pl-1 w-4/6 shadow rounded-xl">
                    <Searchbar></Searchbar>
                </div>

                <div className="w-1/6">
                    <div className="flex">
                        <div className="text-md text-gray-400 pt-3 pl-2 cursor-pointer"
                        onClick={()=>{
                          alert("hi! This is just a dummy!")
                        }}>
                          Log in
                        </div>
                        <div className="text-md text-gray-400 pt-3 pl-2 cursor-pointer"
                        onClick={()=>{
                          alert("Hi! This is just a dummy!")
                        }}>
                          Sign up
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Searchbar() {
    return (
      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            // style={{width:'1200px'}}
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-full"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
    );
  }
  