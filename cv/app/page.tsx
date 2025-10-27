// import Image from "next/image";
import { Suspense } from "react";
import Linking from "@/components/Linking";
import MyImage from "@/components/MyImage";
import Information from "@/components/Information";
// import Inquiry from "./components/Inquiry";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>로딩 중...</div>}>
        <Linking/>
        <MyImage/>
        <Information/>
      </Suspense>
    </div>
  );
}
