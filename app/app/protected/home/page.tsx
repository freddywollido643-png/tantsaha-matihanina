"use client";

import Link from "next/link";

export default function HomePage() {
  return (
      <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Tantsaha Matihanina</h1>
                  <p className="mb-6 text-gray-600">
                          Tongasoa amin'ny sehatra ho an'ny tantsaha malagasy.
                                </p>

                                      <div className="grid gap-4">
                                              <Link
                                                        href="/protected"
                                                                  className="border rounded p-4 hover:bg-gray-50"
                                                                          >
                                                                                    <h2 className="font-semibold">👤 Ny Profiliko</h2>
                                                                                              <p className="text-sm text-gray-500">Jereo sy hanova ny mombamomba anao</p>
                                                                                                      </Link>

                                                                                                              <Link
                                                                                                                        href="/protected/feed"
                                                                                                                                  className="border rounded p-4 hover:bg-gray-50"
                                                                                                                                          >
                                                                                                                                                    <h2 className="font-semibold">📰 Feed</h2>
                                                                                                                                                              <p className="text-sm text-gray-500">Jereo ny lahatsoratra sy tarehimarika avy amin'ny tantsaha hafa</p>
                                                                                                                                                                      </Link>

                                                                                                                                                                              <Link
                                                                                                                                                                                        href="/protected/marketplace"
                                                                                                                                                                                                  className="border rounded p-4 hover:bg-gray-50"
                                                                                                                                                                                                          >
                                                                                                                                                                                                                    <h2 className="font-semibold">🛒 Marketplace</h2>
                                                                                                                                                                                                                              <p className="text-sm text-gray-500">Jereo sy mivarotra vokatra</p>
                                                                                                                                                                                                                                      </Link>

                                                                                                                                                                                                                                              <Link
                                                                                                                                                                                                                                                        href="/protected/demands"
                                                                                                                                                                                                                                                                  className="border rounded p-4 hover:bg-gray-50"
                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                    <h2 className="font-semibold">📋 Demandes</h2>
                                                                                                                                                                                                                                                                                              <p className="text-sm text-gray-500">Jereo ny filàna avy amin'ny mpividy</p>
                                                                                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                  }