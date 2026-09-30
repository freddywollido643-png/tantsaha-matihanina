import Link from "next/link";
import { HomeMenu } from "@/components/home-menu";

const main = [
  { href: "/protected", label: "Mon Profil" },
  { href: "/protected/feed", label: "Feed" },
  { href: "/protected/demands", label: "Demandes" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-1 text-2xl font-bold">Tantsaha Matihanina</h1>
      <p className="mb-6 text-gray-600">
        Tongasoa amin'ny sehatra ho an'ny tantsaha malagasy.
      </p>

      <h2 className="mb-2 text-sm font-semibold uppercase text-gray-500">Menu</h2>
      <HomeMenu />

      <h2 className="mb-2 mt-6 text-sm font-semibold uppercase text-gray-500">Ny akaiky</h2>
      <div className="grid grid-cols-3 gap-3">
        {main.map((i) => (
          <Link key={i.href} href={i.href}
            className="rounded-xl border p-4 text-center text-sm font-medium">
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
