import Image from "next/image"

export default function MyImage() {
    return (
        <div className="img img--hidden">
            {/* <motion.div initial={{ opacity: 0, scale: 0.5 }}> */}
            <Image 
                src="/woody.webp" 
                alt="woody" 
                width={200}
                height={0}
            >
            </Image>
            {/* </motion.div> */}
        </div>
    )
}