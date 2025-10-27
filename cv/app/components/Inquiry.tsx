"use client"

import { useState } from "react";
import InquiryForm from "./InquiryForm";

export default function Inquiry() {
    const [isOpen, setIsOpen] = useState(false);

    const onClickInqury = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="text-field">
            <button onClick={onClickInqury}>질문하기</button>
            {isOpen && 
                <InquiryForm setModal={onClickInqury}/>
            }   
        </div>
        
    )
}