"use client";
import { useEffect } from "react";

const DisableInspect = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C"))) {
        event.preventDefault();
        alert("Developer tools are disabled.");
      }
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      alert("Right-click is disabled.");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DisableInspect;
