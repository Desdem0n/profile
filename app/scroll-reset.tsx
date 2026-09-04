"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    const resetHorizontalScroll = () => {
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    const resetAfterLayout = () => {
      resetHorizontalScroll();
      requestAnimationFrame(resetHorizontalScroll);
    };

    resetAfterLayout();
    window.addEventListener("hashchange", resetAfterLayout);
    window.addEventListener("resize", resetAfterLayout);

    return () => {
      window.removeEventListener("hashchange", resetAfterLayout);
      window.removeEventListener("resize", resetAfterLayout);
    };
  }, []);

  return null;
}
