import type { ReactNode } from "react";

interface HalfCardProps {
  imageUrl: string;
  altText?: string;
  children? :ReactNode
}
const HalfCard = ({imageUrl, altText, children}:HalfCardProps)=> {
    return (
        <div className="relative w-full lg:w-1/2 h-fit">
            <img src={imageUrl} alt={altText} className="aspect-[3/4] object-cover w-full h-9/12 rounded-2xl" />
            <div className="absolute top-5 lg:top-10 left-5 lg:left-10">
                {children}
            </div>
        </div>
    )
}

export default HalfCard