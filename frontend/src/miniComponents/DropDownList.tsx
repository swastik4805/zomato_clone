import { useState } from "react";
import Table from "./Table";


export function DropDownMenu({heading,list}){
    const[hidden, setHidden]=useState("hidden");
    const handleButton=()=>{
        if(hidden==="hidden") setHidden("");
        else setHidden("hidden");
    }
    return(
        <div id="accordion">
            
            <div id="accordion-collapse" data-accordion="open">
            <h2 id="accordion-collapse-heading-1">
                <button onClick={handleButton} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  rounded-t-xl focus:ring-4    gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true">
                <span>{heading}</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className={hidden}>
                <div className="p-5 border border-b-0 border-gray-200">
                    <Table props={list}></Table>
                </div>
            </div>
            
            
        
            
            </div>          
        </div>
    )
}