"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the target or its parents are interactive
            const isInteractive = target.closest('a, button, [role="button"], input, textarea, select') || 
                                  window.getComputedStyle(target).cursor === 'pointer';
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? "hover" : ""}`}
            style={{ 
                left: position.x, 
                top: position.y,
            }}
        ></div>
    );
}
