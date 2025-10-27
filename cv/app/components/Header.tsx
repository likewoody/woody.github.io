import Link from "next/link"

export default function Header() {
    return (
        <div className="text-center p-4 font-bold">
            <Link href={"/"}>조성진</Link>
        </div>
    )
}