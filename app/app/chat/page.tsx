import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

async function Rooms() {
  const supabase = await createClient();
  const { data: rooms } = await supabase
    .from("chat_rooms")
    .select("*")
    .order("name");

  return (
    <div className="grid grid-cols-2 gap-3">
      {rooms?.map((room) => (
        <Link
          key={room.id}
          href={`/chat/${room.id}`}
          className="border rounded-xl p-4 text-center bg-white shadow-sm"
        >
          <div className="text-3xl mb-1">{room.icon}</div>
          <div className="font-semibold text-sm">{room.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default function ChatPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">🤝 Tantsaha Chat</h1>
      <Suspense fallback={<p className="text-sm opacity-60">Miandry...</p>}>
        <Rooms />
      </Suspense>
    </div>
  );
}
