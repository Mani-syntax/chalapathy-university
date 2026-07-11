"use client";

import { useState, useEffect } from "react";

/**
 * Tracks the window scroll position.
 * Returns `true` when scrolled past the given threshold.
 */
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler(); // initial check
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}
