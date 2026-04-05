import { default as React } from 'react';
export type ScannerFrameProps = {
    text?: string;
    width?: number | string;
    height?: number | string;
    frameColor?: string;
    frameStyle?: "dashed" | "solid" | "dotted";
    backgroundColor?: string;
    textColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};
export default function ScannerFrame({ text, width, height, frameColor, frameStyle, backgroundColor, textColor, className, style, children, }: ScannerFrameProps): import("react/jsx-runtime").JSX.Element;
