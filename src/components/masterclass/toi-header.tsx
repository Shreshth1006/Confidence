"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";

const navItems = [
  "TOI Games", "Videos", "City", "India", "World", "Business",
  "Tech", "Cricket", "Sports", "Entertainment", "Astro", "TV",
  "Education", "Life & Style", "Health",
];

function formatDate() {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "short", month: "short", day: "numeric", year: "numeric",
  });
}

export function TOIHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header style={{ width: "100%", background: "#fff", borderBottom: "1px solid #e5e5e5" }}>

        {/* Row 1: Utility bar — hidden on mobile */}
        <div style={{ background: "#fafafa", borderBottom: "1px solid #ebebeb" }}
          className="hidden sm:block">
          <div style={{
            maxWidth: 1400, margin: "0 auto", padding: "5px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#666" }}>
              <span style={{ fontWeight: 600, color: "#222" }}>Edition</span>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <span style={{ fontSize: 14 }}>🇮🇳</span>
                <span style={{ fontWeight: 700, color: "#222" }}>IN</span>
              </span>
              <span style={{ width: 1, height: 13, background: "#ccc", display: "inline-block" }} />
              <span>English</span>
              <span style={{ width: 1, height: 13, background: "#ccc", display: "inline-block" }} />
              <span>{formatDate()}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button type="button" style={{
                border: "1.5px solid #e11d2a", borderRadius: 3, padding: "3px 10px",
                fontSize: 12, fontWeight: 700, color: "#e11d2a", background: "transparent", cursor: "pointer",
              }}>Read ePaper</button>
              <button type="button" style={{
                background: "#e11d2a", border: "none", borderRadius: 3, padding: "4px 12px",
                fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer",
              }}>Subscribe to TOI+</button>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {[Facebook, Twitter, Youtube, Instagram, Linkedin, Send].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 26, height: 26, borderRadius: "50%", border: "1px solid #ddd", color: "#888",
                  }}>
                    <Icon style={{ width: 12, height: 12 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Masthead */}
        <div style={{
          maxWidth: 1400, margin: "0 auto",
          padding: "8px 12px",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        }}>
          {/* Left badge — hidden on mobile */}
          <div className="hidden md:flex" style={{
            position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
            flexDirection: "column", gap: 1,
          }}>
            <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e11d2a", lineHeight: 1.4 }}>
              A Times of India
            </span>
            <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e11d2a", lineHeight: 1.4 }}>
              Initiative
            </span>
          </div>

          {/* Masthead */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "clamp(1.1rem, 5vw, 3rem)",
              fontWeight: 700, color: "#111", letterSpacing: "-0.01em", lineHeight: 1,
              display: "block", userSelect: "none",
            }}>
              THE TIMES OF INDIA
            </span>
          </a>

          {/* Right label — hidden on mobile */}
          <div className="hidden md:flex" style={{
            position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
            flexDirection: "column", alignItems: "flex-end", gap: 1,
          }}>
            <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#999", lineHeight: 1.4 }}>Kids Confidence</span>
            <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#999", lineHeight: 1.4 }}>Masterclass</span>
          </div>
        </div>

        {/* Row 3: Nav strip — inline */}
        {!scrolled && <NavStrip />}
      </header>

      {/* Sticky nav — appears on scroll */}
      {scrolled && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "#fff", boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
          borderBottom: "1px solid #e5e5e5",
          animation: "slideDown 0.18s ease-out",
        }}>
          <NavStrip compact />
        </div>
      )}

      {scrolled && <div style={{ height: 40 }} />}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
      `}</style>
    </>
  );
}

function NavStrip({ compact = false }: { compact?: boolean }) {
  return (
    <nav style={{
      borderTop: "2px solid #e11d2a",
      borderBottom: compact ? "none" : "1px solid #e5e5e5",
      background: "#fff", overflowX: "auto", scrollbarWidth: "none",
    }}>
      <div style={{
        maxWidth: 1400, margin: "0 auto", padding: "0 8px",
        display: "flex", alignItems: "stretch", whiteSpace: "nowrap",
      }}>
        <a href="#" style={{
          display: "inline-flex", alignItems: "center",
          padding: compact ? "8px 10px 8px 4px" : "9px 12px 9px 4px",
          fontSize: 13, fontWeight: 800, color: "#111", textDecoration: "none",
          borderRight: "1px solid #e5e5e5", marginRight: 2, flexShrink: 0,
        }}>
          TOI<span style={{ color: "#e11d2a", fontSize: 15 }}>+</span>
        </a>
        {navItems.map((item) => (
          <a key={item} href="#" style={{
            display: "inline-flex", alignItems: "center",
            padding: compact ? "8px 8px" : "9px 10px",
            fontSize: 12, fontWeight: 500, color: "#333", textDecoration: "none",
            flexShrink: 0, lineHeight: 1.2, borderBottom: "2px solid transparent",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#e11d2a";
              (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#e11d2a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#333";
              (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}