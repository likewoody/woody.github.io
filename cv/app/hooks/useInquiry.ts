import { FieldValues, UseFormWatch } from "react-hook-form";

export function useInquiry({setModal}: InquiryProps, watch: UseFormWatch<FieldValues>) {
    const onClickInquiry = async () => {
        const email = watch("email");
        const title = watch("title");
        const content = watch("content");

        if (!email) {
            alert("이메일을 입력하세요.");
            return;
        }
        if (!title) {
            alert("제목을 입력하세요.");
            return;
        }
        if (!content) {
            alert("내용을 입력하세요.");
            return;
        }
    
        const response = await fetch("/api/inquiry", {
            method: "POST",
            headers: {"Content-Type": "applicatio/json"},
            body: JSON.stringify({email, title, content})
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data || "서버 요청 실패함");
        }

        setModal();
        alert("질문이 완료되었습니다.");
    }

    return {onClickInquiry}
}