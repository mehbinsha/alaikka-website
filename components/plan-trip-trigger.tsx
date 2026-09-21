"use client";

import type { ReactNode } from "react";

export const planTripOpenEvent = "alaikka:open-plan-trip";

export type PlanTripOpenDetail = {
  trigger: HTMLButtonElement;
};

type PlanTripTriggerProps = {
  children: ReactNode;
  className?: string;
  onBeforeOpen?: () => void;
  tabIndex?: number;
};

export function PlanTripTrigger({
  children,
  className,
  onBeforeOpen,
  tabIndex,
}: PlanTripTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      aria-controls="contact-panel"
      tabIndex={tabIndex}
      onClick={(event) => {
        onBeforeOpen?.();
        window.dispatchEvent(
          new CustomEvent<PlanTripOpenDetail>(planTripOpenEvent, {
            detail: { trigger: event.currentTarget },
          }),
        );
      }}
    >
      {children}
    </button>
  );
}
