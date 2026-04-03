import React from "react";
import { QRCodeSVG } from "qrcode.react";

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

export default function QRCodeAvatarCard({
  value,
  name,
  role,
  avatarUrl,
  size = 140,
  backgroundColor = "#f8f9ff",
  textColor = "#222222",
  qrColor = "#000000",
  padding = 24,
  borderRadius = 24,
  level = "M",
  includeMargin = false,
  imageSettings,
  style,
  className,
}: QRCodeAvatarCardProps) {
  return (
    <div
      className={className}
      style={{
        width: 280,
        padding,
        borderRadius,
        background: backgroundColor,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        ...style,
      }}
    >
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 14,
            border: "2px solid #ffffff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      )}

      <h3 style={{ margin: 0, color: textColor }}>{name}</h3>

      {role && (
        <p style={{ marginTop: 6, marginBottom: 16, color: "#666", fontSize: 15 }}>{role}</p>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <QRCodeSVG 
          value={value} 
          size={size} 
          fgColor={qrColor}
          level={level}
          includeMargin={includeMargin}
          imageSettings={imageSettings}
        />
      </div>
    </div>
  );
}