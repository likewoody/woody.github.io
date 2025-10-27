import Link from "next/link"
export default function Linking() {
    return (
        <div className="">
            <Link 
                className="text-field" 
                target="_blank" 
                href={"https://github.com/likewoody/"}>
                    깃허브
            </Link>
            <Link 
                className="text-field"
                target="_blank" 
                href={"https://velog.io/@woodingco/"}>
                    블로그
            </Link>
        </div>
    )
}