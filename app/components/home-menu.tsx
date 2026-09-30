import Link from "next/link";

const items = [
  { href: "/marketplace", label: "Tsena" },
  { href: "/video", label: "Réseau Video" },
  { href: "/chat", label: "Communauté" },
  { href: "/vaksiny", label: "Vaksiny" },
  { href: "/boky", label: "Boky" },
  { href: "/meteo", label: "Météo" },
];

export function HomeMenu() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((i) => (
        <Link key={i.href} href={i.href}
          className="rounded-xl border p-4 text-center text-sm font-medium">
          {i.label}
        </Link>
      ))}
    </div>
  );
}
