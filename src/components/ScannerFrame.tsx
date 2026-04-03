import React from "react";

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

export default function ScannerFrame({
  text = "Place QR code inside the frame",
  width = 260,
  height = 260,
  frameColor = "#6c4cff",
  frameStyle = "dashed",
  backgroundColor = "rgba(108,76,255,0.05)",
  textColor = "#555555",
  className,
  style,
  children,
}: ScannerFrameProps) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        fontFamily: "Arial, sans-serif",
        ...style,
      }}
    >
      <div
        style={{
          width,
          height,
          position: "relative",
          borderRadius: 24,
          border: `2px ${frameStyle} ${frameColor}`,
          background: backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            width: 40,
            height: 40,
            borderTop: `4px solid ${frameColor}`,
            borderLeft: `4px solid ${frameColor}`,
            borderTopLeftRadius: 12,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 40,
            height: 40,
            borderTop: `4px solid ${frameColor}`,
            borderRight: `4px solid ${frameColor}`,
            borderTopRightRadius: 12,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            width: 40,
            height: 40,
            borderBottom: `4px solid ${frameColor}`,
            borderLeft: `4px solid ${frameColor}`,
            borderBottomLeftRadius: 12,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            width: 40,
            height: 40,
            borderBottom: `4px solid ${frameColor}`,
            borderRight: `4px solid ${frameColor}`,
            borderBottomRightRadius: 12,
          }}
        />
        {children}
      </div>

      {text && <p style={{ margin: 0, color: textColor, fontWeight: 500 }}>{text}</p>}
    </div>
  );
}