"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [isJumping, setIsJumping] = useState(false);

  function KeyPressed(e) {
    if (e.key === "ArrowRight" || e.key === "d") {
      moveRight();
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      moveLeft();
    } else if (e.key == " ") {
      jump();
    }
  }

  function jump() {
    if (!isJumping) {
      //do here
    }
  }

  function moveRight() {
    const parentsize = document.getElementById("border").offsetWidth;
    const block = document.getElementById("character");
    if (block) {
      const currentPosition = parseInt(block.style.left) || 0;
      if (currentPosition + 40 > parentsize) {
      } else {
        block.style.left = currentPosition + 9 + "px";
      }
    }
  }

  function moveLeft() {
    const block = document.getElementById("character");
    if (block) {
      const currentPosition = parseInt(block.style.left) || 0;
      if (currentPosition - 9 < 0) {
      } else {
        block.style.left = currentPosition - 9 + "px";
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", KeyPressed);

    return () => {
      window.removeEventListener("keydown", KeyPressed);
    };
  }, []);

  return (
    <div>
      <div
        className="w-[1100px] relative border-solid border-2 border-black mx-auto h-[700px]"
        id="border"
      >
        <div className="bg-green-400 absolute min-w-full bottom-0 min-h-[30px]"></div>
        <div
          className="w-[30px] h-[30px] bg-black absolute bottom-[30px]"
          id="character"
        ></div>
      </div>
    </div>
  );
}

export default page;
