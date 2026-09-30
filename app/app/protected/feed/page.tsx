"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function FeedPage() {
  const supabase = createClient();
    const [posts, setPosts] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);
        const [newPost, setNewPost] = useState({ title: "", content: "" });
          const [posting, setPosting] = useState(false);

            const loadPosts = async () => {
                const { data } = await supabase
                      .from("posts")
                            .select("*, profiles(full_name)")
                                  .order("created_at", { ascending: false });
                                      setPosts(data || []);
                                          setLoading(false);
                                            };

                                              useEffect(() => {
                                                  loadPosts();
                                                    }, []);

                                                      const handlePost = async (e: React.FormEvent) => {
                                                          e.preventDefault();
                                                              if (!newPost.title.trim()) return;
                                                                  setPosting(true);

                                                                      const { data: { user } } = await supabase.auth.getUser();
                                                                          if (!user) return;

                                                                              const { error } = await supabase.from("posts").insert({
                                                                                    author_id: user.id,
                                                                                          title: newPost.title,
                                                                                                content: newPost.content,
                                                                                                    });

                                                                                                        if (!error) {
                                                                                                              setNewPost({ title: "", content: "" });
                                                                                                                    loadPosts();
                                                                                                                        }
                                                                                                                            setPosting(false);
                                                                                                                              };

                                                                                                                                return (
                                                                                                                                    <div className="max-w-xl mx-auto p-6">
                                                                                                                                          <a href="/protected/home" className="text-blue-600 underline block mb-4">
                                                                                                                                                  ← Hiverina any amin'ny Home
                                                                                                                                                        </a>

                                                                                                                                                              <h1 className="text-2xl font-bold mb-4">Feed</h1>

                                                                                                                                                                    <form onSubmit={handlePost} className="mb-6 border rounded p-4">
                                                                                                                                                                            <input
                                                                                                                                                                                      className="border p-2 w-full rounded mb-2"
                                                                                                                                                                                                placeholder="Lohateny"
                                                                                                                                                                                                          value={newPost.title}
                                                                                                                                                                                                                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                    <textarea
                                                                                                                                                                                                                                              className="border p-2 w-full rounded mb-2"
                                                                                                                                                                                                                                                        placeholder="Inona no vaovao?"
                                                                                                                                                                                                                                                                  value={newPost.content}
                                                                                                                                                                                                                                                                            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                            <button
                                                                                                                                                                                                                                                                                                      type="submit"
                                                                                                                                                                                                                                                                                                                disabled={posting}
                                                                                                                                                                                                                                                                                                                          className="bg-green-600 text-white px-4 py-2 rounded"
                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                            {posting ? "Mandefa..." : "Zaraina"}
                                                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                                                          </form>

                                                                                                                                                                                                                                                                                                                                                                {loading && <p>Mandefa...</p>}

                                                                                                                                                                                                                                                                                                                                                                      <div className="space-y-4">
                                                                                                                                                                                                                                                                                                                                                                              {posts.map((post) => (
                                                                                                                                                                                                                                                                                                                                                                                        <div key={post.id} className="border rounded p-4">
                                                                                                                                                                                                                                                                                                                                                                                                    <p className="text-sm text-gray-500 mb-1">
                                                                                                                                                                                                                                                                                                                                                                                                                  {post.profiles?.full_name || "Tantsaha"}
                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                          <h2 className="font-semibold">{post.title}</h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                      <p className="text-gray-700">{post.content}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {!loading && posts.length === 0 && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p className="text-gray-500">Mbola tsy misy lahatsoratra.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }