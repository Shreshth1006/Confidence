import { Facebook, Instagram, Linkedin, Rss, Send, Twitter, Youtube } from "lucide-react";

const navItems = [
  "TOI Games", "Videos", "City", "India", "World", "Business", "Tech",
  "Cricket", "Sports", "Entertainment", "Astro", "TV", "Education", "Life & Style", "Health",
];

function formatDate() {
  return new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

export function TOIHeader() {
  return (
    <header className="w-full border-b border-border/60 bg-background">
      {/* Top utility bar */}
      <div className="border-b border-border/40">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
            <span className="font-semibold text-foreground">Edition</span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="text-base leading-none">🇮🇳</span>
              <span className="font-semibold text-foreground">IN</span>
            </span>
            <span className="hidden sm:inline-block h-4 w-px bg-border" />
            <span className="hidden sm:inline">English</span>
            <span className="hidden md:inline-block h-4 w-px bg-border" />
            <span className="hidden md:inline">{formatDate()}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="rounded-md border border-[#e11d2a] px-2.5 py-1 text-xs font-bold text-[#e11d2a] hover:bg-[#e11d2a]/10 sm:text-sm">
              Read ePaper
            </button>
            <button className="rounded-md bg-[#e11d2a] px-2.5 py-1 text-xs font-bold text-white hover:bg-[#c4161f] sm:text-sm">
              Subscribe to TOI+
            </button>
            <div className="hidden items-center gap-2 lg:flex">
              {[Facebook, Twitter, Rss, Youtube, Instagram, Linkedin, Send].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground">
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto max-w-[1400px] px-4 py-5 text-center">
        <h2 className="font-serif text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          THE TIMES OF INDIA
        </h2>
      </div>

      {/* Nav strip */}
      <nav className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto flex max-w-[1400px] items-center gap-5 overflow-x-auto px-4 py-3 text-sm font-semibold text-foreground">
          <span className="flex shrink-0 items-center gap-0.5 font-black">
            TOI<span className="text-[#e11d2a]">+</span>
          </span>
          {navItems.map((item) => (
            <a key={item} href="#" className="shrink-0 whitespace-nowrap hover:text-[#e11d2a]">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
