import Form from "next/form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useInquiry } from ""

export default function InquiryForm({setModal} : InquiryProps) {
    
    const {
        handleSubmit, 
        register, 
        watch, 
        formState: { errors }
    } = useForm();

    // 모달 내부를 눌렀을 때 꺼지는걸 방지한다.
    const preventOffModal = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    useEffect(() => {
        // 모달이 뜨면 body의 overflow를 hidden으로 설정
        document.body.style.overflow = "hidden";

        // 모달이 사라지면 body의 overflow를 auto로 설정
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <div onClick={setModal} className="fixed inset-0 bg-gray-500/50 flex justify-center items-center">
            <div onClick={preventOffModal} className="bg-gray-500 w-1/2 h-1/2 rounded-md p-5 text-gray-100 text-black">
                <Form action={""} onSubmit={handleSubmit(onClickInquiry)}>
                    <div className="grid p-6 gap-9">
                        <input {...register("email", {})} placeholder="이메일을 입력하세요" type="email" />
                        <input {...register("title", {})} placeholder="제목을 입력하세요" type="text" />
                        <textarea {...register("content", {})} name="content" placeholder="내용을 입력하세요"/>
                        <button type="submit">질문완료</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}