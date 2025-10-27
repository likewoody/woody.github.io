"use client"

import { useState } from "react";
import InquiryForm from "./InquiryForm";

export default function Inquiry() {
    const [isOpen, setIsOpen] = useState(false);

    const onClickInqury = () => {
        setIsOpen(!isOpen);
    }    

    return (
        <div className="mx-auto flex max-w-sm justify-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-700 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <button onClick={onClickInqury}>질문하기</button>
            {isOpen && 
                <InquiryForm setModal={onClickInqury}/>
            }   
        </div>
        
    )
}