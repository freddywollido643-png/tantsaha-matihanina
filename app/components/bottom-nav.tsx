"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Beef, Sprout, Calculator, Bot } from "lucide-react";

const tabs = [
  { href: "/protected/home", label: "Accueil", icon: Home },
  { href: "/fiompiana", label: "Fiompiana", icon: Beef },
  { href: "/fambolena", label: "Fambolena", icon: Sprout },
  { href: "/kajy", label: "Kajy", icon: Calculator },
  { href: "/ai", label: "AI", icon: Bot },
];

export function BottomNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) return null;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-background pb-[env(safe-area-inset-bottom)]">
      <ul className="mx-auto flex max-w-md">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center gap-0.5 py-2 text-xs ${
                  active ? "font-semibold text-green-700" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
