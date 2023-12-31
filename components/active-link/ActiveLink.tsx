"use client"

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";


interface Props {
    path: String
    text: String
}

export const ActiveLink = ({path, text}: Props) => {
    const pathName = usePathname();
    const styleConditional = `${ style.link }
                              ${(pathName.replace('/','') === path.replace('/','')) && style['active-link']}`
  return (
    <Link 
        
        className={ styleConditional }
        href={`${path}`}>{text}</Link>
  );
}

export default ActiveLink;
