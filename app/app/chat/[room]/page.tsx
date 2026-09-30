import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function RoomContent({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  const supabase = await createClient();

  const { data: roomData } = await supabase
    .from("chat_rooms")
    .select("*")
    .eq("id", room)
    .single();

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("room_id", room)
    .order("created_at", { ascending: true })
    .limit(100);

  async function sendMessage(formData: FormData) {
    "use server";
    const content = String(formData.get("content") || "").trim();
    if (!content) return;
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    await supabase
      .from("messages")
      .insert({ room_id: room, user_id: user.id, content });
    revalidatePath(`/chat/${room}`);
  }

  return (
    <>
      <h1 className="text-xl font-bold my-3">
        {roomData?.icon} {roomData?.name}
      </h1>

      <div className="space-y-2 mb-4">
        {messages?.length ? (
          messages.map((m) => (
            <div key={m.id} className="border rounded-xl p-3 bg-white">
              <p className="text-sm">{m.content}</p>
              <p className="text-xs opacity-50 mt-1">
                {new Date(m.created_at).toLocaleString("fr-FR")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm opacity-60">Tsy mbola misy hafatra.</p>
        )}
      </div>

      <form action={sendMessage} className="flex gap-2">
        <input
          name="content"
          placeholder="Soraty eto..."
          className="flex-1 border rounded-xl p-3"
          required
        />
        <button className="border rounded-xl px-4 font-semibold">
          Alefa
        </button>
      </form>
    </>
  );
}

export default function RoomPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  return (
    <div className="max-w-md mx-auto p-4">
      <Link href="/chat" className="text-sm underline">
        ← Sokajy rehetra
      </Link>
      <Suspense fallback={<p className="text-sm opacity-60 mt-3">Miandry...</p>}>
        <RoomContent params={params} />
      </Suspense>
    </div>
  );
}
