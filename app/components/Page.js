import Image from "next/image";

export function Page({children}) {
    return (
        <div className="relative w-[60ch] h-[80ch] border-gray-500 shadow-xl">
            <Image
                src="/paper.jpg"
                alt="Background"
                fill
                className="object-cover z-10"
                priority
            />
            <div className={`relative z-20 bg-white/60 px-[10ch] py-[5ch] flex justify-center items-center h-full w-full text-xl`}>
                {children}
            </div>
        </div>
    );
}