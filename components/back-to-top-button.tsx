"use client";

export function BackToTopButton() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <span aria-hidden="true">{"\u2191"}</span>
      Back to top
    </button>
  );
}
