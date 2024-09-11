import Link from "next/link";

export default function CustomButton({title, id, textStyle, style}:{title:string, id:string, textStyle?:string, style?:string } ){
    return(
        <Link href={id}
        type="button" 
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none  ${style}`}
        >
            <span className={`flex-1 ${textStyle}`} >
                {title}
                </span>
                
        </Link>
    )
}