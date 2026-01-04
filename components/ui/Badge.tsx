import { ReactNode } from "react";
import Image from "next/image";

interface BadgeProps {
  children: ReactNode;
  icon?: string;
}

export default function Badge({ children, icon }: BadgeProps) {
  return (
    <div
      className="bg-white rounded-[200px] h-[28px] flex items-center gap-[8px] whitespace-nowrap"
      style={{
        boxShadow: "var(--shadow-badge)",
        paddingLeft: "8px",
        paddingRight: "8px",
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={32}
          height={17}
          className="w-[32px] h-[17px]"
        />
      )}
      <span
        className="font-medium"
        style={{
          color: "#006FE8",
          fontSize: "16px",
          lineHeight: "1",
        }}
      >
        {children}
      </span>
    </div>
  );
}
