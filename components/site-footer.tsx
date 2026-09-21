import type { ReactNode } from "react";
import { BackToTopButton } from "@/components/back-to-top-button";
import { contactConfig } from "@/config/contact";

type ContactIconName =
  | "whatsapp"
  | "phone"
  | "instagram"
  | "location"
  | "mail";

type FooterContact = {
  label: string;
  detail: string;
  href: string;
  icon: ContactIconName;
  external?: boolean;
  wide?: boolean;
};

const footerContacts: readonly FooterContact[] = [
  {
    label: "WhatsApp",
    detail: "Start a conversation",
    href: contactConfig.whatsapp.contact.link,
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Call",
    detail: contactConfig.displayPhone,
    href: contactConfig.callLink,
    icon: "phone",
  },
  {
    label: "Instagram",
    detail: "Follow the journey",
    href: contactConfig.instagramLink,
    icon: "instagram",
    external: true,
  },
  {
    label: "Location",
    detail: "Find us on Maps",
    href: contactConfig.locationLink,
    icon: "location",
    external: true,
  },
  {
    label: "Email",
    detail: contactConfig.email,
    href: contactConfig.emailLink,
    icon: "mail",
    wide: true,
  },
] as const;

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths = {
    whatsapp: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.89-9.884a9.821 9.821 0 0 1 7.021 2.91 9.825 9.825 0 0 1 2.9 7.029c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  } satisfies Record<ContactIconName, ReactNode>;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={name === "whatsapp" ? "currentColor" : "none"}
      stroke={name === "whatsapp" ? "none" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner shell">
        <div className="site-footer__layout">
          <div className="site-footer__statement">
            <p className="site-footer__brand">Alaikka</p>
            <h2>
              Go somewhere
              <br />
              worth remembering.
            </h2>
            <address>
              Tirur <span>&middot;</span> Malappuram
              <br />
              Kerala <span>&middot;</span> India
            </address>
          </div>

          <div className="site-footer__connect">
            <p className="site-footer__eyebrow">Connect</p>
            <div className="site-footer__contact-grid">
              {footerContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className={`footer-contact${contact.wide ? " footer-contact--wide" : ""}`}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                >
                  <span className="footer-contact__icon">
                    <ContactIcon name={contact.icon} />
                  </span>
                  <span className="footer-contact__copy">
                    <strong>{contact.label}</strong>
                    <small>{contact.detail}</small>
                  </span>
                  <span className="footer-contact__arrow">
                    <ExternalArrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__base">
          <a href={contactConfig.callLink}>{contactConfig.displayPhone}</a>
          <BackToTopButton />
          <div className="site-footer__legal">
            <p>
              Alaikka&reg; <span>&middot;</span> Registered Trademark No. 5459723
            </p>
            <p>
              &copy; 2026 Alaikka Travel Mate <span>&middot;</span> All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
