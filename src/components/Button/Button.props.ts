import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: ReactNode;
    variant: 'outline' | 'fill' | 'text' | 'text-active';
    color: 'light-gold' | 'light-blue' | 'dark-blue' | 'exit';
    size: 'large' | 'medium' | 'content';
    widthContent?: boolean;
}