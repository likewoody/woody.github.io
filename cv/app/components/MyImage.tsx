import Image from "next/image"

export default function MyImage() {
    return (
        <div className="img">
            <Image 
                src="/woody.webp"
                alt="woody"
                width={300}
                height={0}
            >
            </Image>
        </div>
    )
}