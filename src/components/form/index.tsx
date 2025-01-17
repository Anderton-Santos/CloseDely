import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Form(props: InputProps){
    return(
        <input
        className="border-2 h-9 rounded-md outline-none px-2 mb-3"
        {...props}
        />
    )
}