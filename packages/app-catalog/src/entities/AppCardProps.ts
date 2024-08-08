import {ReactNode} from "react";

export interface AppCardProps
{
    title: string;
    img: string;
    description: string;
    action: ReactNode[]
}