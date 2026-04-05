import { default as React } from 'react';
export type QRCodeAvatarCardProps = {
    value: string;
    name: string;
    role?: string;
    avatarUrl?: string;
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
export default function QRCodeAvatarCard({ value, name, role, avatarUrl, size, backgroundColor, textColor, qrColor, padding, borderRadius, level, includeMargin, imageSettings, style, className, }: QRCodeAvatarCardProps): import("react/jsx-runtime").JSX.Element;
