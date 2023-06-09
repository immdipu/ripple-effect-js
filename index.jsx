import React from "react";
import "./style.css";

function RippleButton({
  children,
  color = "red",
  speed = 1000,
  radius = 2,
  width = 100,
  height,
}) {
  function createRipple(event) {
    // Create a new ripple element
    const button = event.currentTarget;
    const ripple = document.createElement("div");
    button.appendChild(ripple);
    let d = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = d + "px";
    const buttonRect = button.getBoundingClientRect();
    ripple.style.left = event.clientX - buttonRect.left - d / 2 + "px";
    ripple.style.top = event.clientY - buttonRect.top - d / 2 + "px";
    ripple.style.backgroundColor = color;
    ripple.style.animationDuration = `${speed}ms`;
    ripple.classList.add("ripple");
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }

  const heightStyle =
    typeof height === "number" ? `${height}px` : height || "100%";

  return (
    <div
      className="ripple-button"
      style={{
        borderRadius: `${radius}px`,
        width: `${width}%`,
        height: heightStyle,
      }}
      onClick={createRipple}
    >
      {children}
    </div>
  );
}

export default RippleButton;
