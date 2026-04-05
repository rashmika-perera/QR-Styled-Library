import { default as React } from 'react';
export type QRCodeCardProps = {
    value: string;
    title: string;
    subtitle?: string;
    size?: number;
    backgroundColor?: string;
    textColor?: string;
    qrColor?: string;
    padding?: number;
    borderRadius?: number;
    level?: "L" | "M" | "Q" | "H";
    includeMargin?: boolean;
    imageSettings?: {
        src: string;
        height: number;
        width: number;
        excavate: boolean;
        x?: number;
        y?: number;
    };
    style?: React.CSSProperties;
    className?: string;
};
export default function QRCodeCard({ value, title, subtitle, size, backgroundColor, textColor, qrColor, padding, borderRadius, level, includeMargin, imageSettings, style, className, }: QRCodeCardProps): import("react/jsx-runtime").JSX.Element;
