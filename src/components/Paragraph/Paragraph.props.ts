import { ReactNode } from "react";

export interface ParagraphProps {
    children?: ReactNode,
    size: "large" | "medium" | "small" | "add",
}