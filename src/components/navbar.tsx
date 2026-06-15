// src/components/navbar.tsx
/**
 * Primary site navigation for non-admin users (rendered from root layout).
 * Client: loads /api/me for session email and logout; sticky header reacts to scroll.
 * Active link highlighted with accent color + subtle background to match app style.
 */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Me = { id: string; email: string; role: "student" | "admin" };

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/careers", label: "Careers" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/resume-optimizer", label: "Resume Optimizer" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [me, setMe] = useState<Me | null>(null); // Allocates state to store the authenticated user session data object (id, email, role). It defaults to null, meaning the UI treats the visitor as an anonymous guest until verified.
  const [scrolled, setScrolled] = useState(false); // Allocates a boolean state tracker that toggles to true when the user scrolls down the page. This tells the UI when to morph the header styling (e.g., swapping background opacity or adding borders).
  const pathname = usePathname(); // Invokes Next.js's standard navigation hook to fetch the current url location segment. This value is used further down to highlight your links dynamically.

  useEffect(() => {
    // Fires a side-effect block that executes exactly once when the Navbar component mounts into the DOM tree.
    fetch("/api/me") // Dispatches an asynchronous HTTP GET call targeting your application's middleware or proxy route to verify the validity of server cookies/JWT tokens.
      .then((r) => (r.ok ? r.json() : null)) // Checks the server response headers. If response.ok matches a status within the 200–299 range, it unpacks the response body JSON stream; otherwise, it passes along null.
      .then((payload) => setMe(payload?.user ?? null)) // Safe-reads the user context payload object using optional chaining. If data fields are present, it assigns them to the component's state engine; if missing or malformed, it sets it to null.
      .catch(() => setMe(null)); // An exception protection handler. If the route drops completely, runs into network errors, or logs a 5xx infrastructure failure, it overrides execution safely to fallback to an unauthenticated status.
  }, []); // Empty dependency array. Ensures this specific database/auth session query executes only once during initial page delivery, instead of hammering the server on every style change.

  useEffect(() => {
    // Fires a side-effect block that sets up a scroll event listener on the window object. This listener tracks the vertical scroll position and updates the 'scrolled' state accordingly to trigger UI changes in the header styling.
    let ticking = false; // Creates a local mutable lock variable. This serves as a gating system to prevent scroll event flooding from slowing down page rendering.
    const handler = () => {
      // Instantiates the callback loop container that the browser executes every time pixel offsets move on the device.
      if (!ticking) {
        // Evaluates our frame processing lock. If ticking is false, it means there isn't a recalculation task pending, and it's safe to update state.
        requestAnimationFrame(() => {
          // A rendering optimization method. It defers the internal layout check to run exactly when the browser recalculates standard display pixels (typically up to 60Hz/120Hz frames), decoupling intensive DOM state operations from raw input device timing loops.
          setScrolled(window.scrollY > 20); // Checks if the document viewport coordinate has passed more than 20 vertical pixels downward. If yes, it toggles scrolled to true, switching global style modes.
          ticking = false; // Unlocks our frame gating variable inside the browser frame callback window, allowing subsequent screen movements to queue fresh update operations.
        });
        ticking = true; // Instantly flips our lock indicator to true. This ignores all intermediate browser updates while our initial request sits inside the display frame pipeline.
      }
    };
    window.addEventListener("scroll", handler, { passive: true }); // Binds the window to listen for scrolling events. The { passive: true } parameter optimizes smooth scrolling by informing the browser that the handler will never run preventDefault().
    return () => window.removeEventListener("scroll", handler); // Garbage collection routine. When navigating away or unmounting the view, it tears down the event handler so memory leaks don't build up in the client runtime.
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-[#0A0A0F]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "var(--border)" : "transparent" }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold tracking-tight">
            SmartCareer<span className="text-gradient">.Academy</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className="relative rounded-lg px-3 py-2 text-sm transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  background: isActive ? "var(--accent-glow)" : "transparent",
                }}
              >
                {label}
                {/* Active underline dot */}
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </Link>
            );
          })}

          <div className="ml-3 flex items-center gap-2.5">
            {me ? (
              <>
                <span
                  className="hidden text-xs sm:inline mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {me.email}
                </span>
                <button
                  onClick={async () => {
                    await fetch("/api/auth/logout", { method: "POST" });
                    window.location.href = "/";
                  }}
                  className="btn-ghost !py-1.5 !px-3 !text-xs"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="btn-accent !py-1.5 !px-4 !text-xs">
                Sign in
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
