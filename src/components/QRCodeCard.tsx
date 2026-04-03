import React from "react";
import { QRCodeSVG } from "qrcode.react";

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

export default function QRCodeCard({
  value,
  title,
  subtitle,
  size = 180,
  backgroundColor = "#ffffff",
  textColor = "#1e1e1e",
  qrColor = "#000000",
  padding = 20,
  borderRadius = 20,
  level = "M",
  includeMargin = false,
  imageSettings,
  style,
  className,
}: QRCodeCardProps) {
  return (
    <div
      className={className}
      style={{
        width: 260,
        padding,
        borderRadius,
        background: backgroundColor,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        ...style,
      }}
    >
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
        <QRCodeSVG 
          value={value} 
          size={size} 
          fgColor={qrColor} 
          level={level}
          includeMargin={includeMargin}
          imageSettings={imageSettings}
        />
      </div>

      <h3 style={{ margin: 0, fontSize: 20, color: textColor }}>{title}</h3>

      {subtitle && (
        <p style={{ marginTop: 8, color: "#666", fontSize: 14 }}>{subtitle}</p>
      )}
    </div>
  );
}
