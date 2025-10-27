import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: "gmail", // 사용하고자 하는 서비스
    host: "smtp.gmail.com", // host를 gmail로 설정
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS
    }
});

export async function POST(request: NextRequest) {
    try {   
        const {email, title, content} = await request.json();
        
        if (!email || !title || !content) {
            return NextResponse.json("Bad Request", {status: 400});
        }

        console.log(email, content);
        const response = transport.sendMail({
            from: email,
            to: process.env.USER_EMAIL,
            replyTo: email, // 사용자가 입력한 메일 주소
            subject: title,
            text: content,
        });

        if (!response) {
            return NextResponse.json("메일 전송에 실패하였습니다.", {status: 500});
        }

        return NextResponse.json("OK", {status: 200});
    } catch {
        return NextResponse.json("Internal Error", {status: 500});
    }
}