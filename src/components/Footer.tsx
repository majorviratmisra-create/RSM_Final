"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#why-youth", label: "Why Youth" },
  { href: "#vision", label: "Vision" },
  { href: "#priorities", label: "Priorities" },
  { href: "#get-involved", label: "Join" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary-dark)] text-white flex-shrink-0">
      {/* Main Footer */}
      <div className="py-8 sm:py-10 md:py-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              {/* Logo */}
              <Link href="#home" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex gap-[3px]">
                  <div className="w-[4px] sm:w-[5px] h-6 sm:h-8 bg-[var(--primary)] rounded-sm transform -skew-x-12"></div>
                  <div className="w-[4px] sm:w-[5px] h-6 sm:h-8 bg-[var(--primary)] rounded-sm transform -skew-x-12"></div>
                  <div className="w-[4px] sm:w-[5px] h-6 sm:h-8 bg-[var(--primary)] rounded-sm transform -skew-x-12"></div>
                </div>
                <span className="flex flex-col leading-tight">
                  <span className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    Rashtrama
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-[var(--primary)]">
                    RSM (राष्ट्रमा)
                  </span>
                </span>
              </Link>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base space-y-1">
                <span className="block">Inspired by Netaji</span>
                <span className="block">Driven &amp; Led by Youth</span>
                <span className="block">Committed to Bharat</span>
              </p>
              <p
                className="mt-3 text-lg sm:text-xl font-bold text-[var(--primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                सब राष्ट्र का!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ fontFamily: "var(--font-heading)", color: "#E85D04" }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div id="contact">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ fontFamily: "var(--font-heading)", color: "#E85D04" }}>
                Connect
              </h4>
              <p className="text-gray-400 text-sm sm:text-base mb-3">
                Follow Rashtrama on social media.
              </p>
              <Link
                href="#social"
                className="text-sm sm:text-base text-[var(--primary)] hover:underline"
              >
                Social Media Wall
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--secondary-light)]">
        <div className="container-custom py-3 sm:py-4">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {currentYear} Rashtrama (RSM · राष्ट्रमा). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
