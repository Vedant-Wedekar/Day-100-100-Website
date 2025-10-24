import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import "./CharacterAnimation.css"; // create this file (see below)
import "../../../src/index.css"
export default function Para() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // select elements inside this component
    const targets = containerRef.current.querySelectorAll("[data-animate]");
    const instances = [];

    // split each target into chars/words/lines
    targets.forEach((el) => {
      const inst = new SplitType(el, { types: "lines, words, chars", tagName: "span" });
      instances.push(inst);
    });

    // animate chars
    const chars = containerRef.current.querySelectorAll("[data-animate] .char");
    const tl = gsap.from(chars, {
      y: "110%",
      opacity: 0,
      rotationZ: 10,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.05,
    });

    // cleanup on unmount
    return () => {
      instances.forEach((i) => i.revert());
      tl.kill();
    };
  }, []);

  return (
    // <div className="page w-320 h-40 py-10 bg-[#d2f7e9] rounded-[100px] " ref={containerRef}>
    //   <h1 className="font-[font2] text-[#0f172a]" data-animate>At Studio Nexa, we believe every idea deserves</h1>
    //   <p data-animate className="font-[font2] text-black">a strong digital foundation.</p>
    // </div>
    <div
  className="page w-320 py-3 bg-[#d2f7e9] rounded-[100px]  overflow-visible"
  ref={containerRef}
>
  <h1 className="font-[font2] text-[#0f172a] leading-relaxed" data-animate>
    At Studio Nexa, we believe every idea deserves
  </h1>
  <p data-animate className="font-[font2] text-black leading-relaxed">
    a strong digital foundation.
  </p>
</div>

  );
}
