"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { contactConfig } from "@/config/contact";
import {
  type PlanTripOpenDetail,
  planTripOpenEvent,
} from "@/components/plan-trip-trigger";

const focusableSelector =
  'button:not([disabled]), a[href]:not([tabindex="-1"])';

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [attentionActive, setAttentionActive] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);
  const attentionTimersRef = useRef<number[]>([]);

  const stopAttention = useCallback(() => {
    hasInteractedRef.current = true;
    attentionTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    attentionTimersRef.current = [];
    setAttentionActive(false);
  }, []);

  const closePanel = () => {
    setIsOpen(false);

    if (window.location.hash === "#plan-trip") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    window.requestAnimationFrame(() => {
      const lastTrigger = lastTriggerRef.current;
      if (lastTrigger?.isConnected) lastTrigger.focus();
      else triggerRef.current?.focus();
    });
  };

  const openPanel = useCallback(
    (trigger?: HTMLElement) => {
      stopAttention();
      lastTriggerRef.current = trigger ?? triggerRef.current;
      setIsOpen(true);
    },
    [stopAttention],
  );

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#plan-trip") {
        openPanel();
      }
    };

    const openFromTrigger = (event: Event) => {
      const detail = (event as CustomEvent<PlanTripOpenDetail>).detail;
      openPanel(detail?.trigger);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    window.addEventListener(planTripOpenEvent, openFromTrigger);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener(planTripOpenEvent, openFromTrigger);
    };
  }, [openPanel]);

  useEffect(() => {
    const triggerAttention = () => {
      if (hasInteractedRef.current) return;

      setAttentionActive(true);
      attentionTimersRef.current.push(
        window.setTimeout(() => setAttentionActive(false), 900),
      );
    };

    attentionTimersRef.current = [
      window.setTimeout(triggerAttention, 5000),
      window.setTimeout(triggerAttention, 30000),
    ];

    return () => {
      attentionTimersRef.current.forEach((timer) =>
        window.clearTimeout(timer),
      );
      attentionTimersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePanel();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="contact-trigger"
        id="plan-trip"
        aria-haspopup="dialog"
        aria-controls="contact-panel"
        aria-expanded={isOpen}
        data-attention={attentionActive}
        onFocus={stopAttention}
        onPointerEnter={stopAttention}
        onPointerDown={stopAttention}
        onClick={(event) => openPanel(event.currentTarget)}
      >
        Plan a trip <span aria-hidden="true">↗</span>
      </button>

      <div
        className="contact-overlay"
        data-open={isOpen}
        aria-hidden={!isOpen}
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) closePanel();
        }}
      >
        <div
          ref={panelRef}
          className="contact-panel"
          id="contact-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-panel-title"
          aria-describedby="contact-panel-description"
        >
          <div className="contact-panel__handle" aria-hidden="true" />

          <button
            type="button"
            className="contact-panel__close"
            aria-label="Close enquiry"
            tabIndex={isOpen ? 0 : -1}
            onClick={closePanel}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <p className="contact-panel__eyebrow">Connect with Alaikka</p>
          <h2 id="contact-panel-title">Ready to go?</h2>
          <p id="contact-panel-description" className="contact-panel__intro">
            Choose the service you need and start a direct conversation with
            Alaikka.
          </p>

          <div className="contact-panel__actions">
            <a
              href={contactConfig.whatsapp.trip.link}
              target="_blank"
              rel="noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="contact-action contact-action--primary"
            >
              <span className="contact-action__copy">
                <strong>Plan a trip</strong>
                <small>Tour packages &amp; tourist vehicles</small>
              </span>
              <span className="contact-action__arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href={contactConfig.whatsapp.transport.link}
              target="_blank"
              rel="noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="contact-action"
            >
              <span className="contact-action__copy">
                <strong>Transport enquiry</strong>
                <small>Goods, commercial vehicles &amp; machinery</small>
              </span>
              <span className="contact-action__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div
            className="contact-panel__quick-links"
            aria-label="Other contact options"
          >
            <a
              href={contactConfig.callLink}
              tabIndex={isOpen ? 0 : -1}
              className="contact-quick-link"
            >
              Call
            </a>
            <a
              href={contactConfig.instagramLink}
              target="_blank"
              rel="noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="contact-quick-link"
            >
              Instagram
            </a>
            <a
              href={contactConfig.locationLink}
              target="_blank"
              rel="noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="contact-quick-link"
            >
              Location
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
