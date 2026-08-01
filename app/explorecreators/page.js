"use client";

import ArrowRightIcon from "@/components/ArrowRightIcon";
import { useEffect, useState } from "react";
import { getAllCreators } from "@/actions/useractions";
import Link from "next/link";

export default function Explore() {
    const [creators, setCreators] = useState([]);
    const [search, setSearch] = useState("");

    const searchTerm = search.toLowerCase();

    const filteredCreators = creators.filter((creator) => {
        return (
            creator.name.toLowerCase().includes(searchTerm) ||
            creator.username.toLowerCase().includes(searchTerm)
        );
    });

    const loadCreator = async () => {
        const data = await getAllCreators();
        setCreators(data);
    };

    useEffect(() => {
        loadCreator();
    }, []);

    useEffect(() => {
        document.title = "Explore Creators";
    }, []);

    return (
        <main className="relative z-10 min-h-screen font-sora px-6 py-16">

            {/* Hero */}
            <section className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
                    🌎 Discover Creators
                </span>

                <h1 className="mt-6 md:text-6xl text-4xl font-bold leading-tight text-white">
                    Explore{" "}
                    <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
                        Amazing Creators
                    </span>
                </h1>

                <p className="mt-6 md:text-lg text-md text-slate-400 max-w-2xl mx-auto leading-8">
                    Browse talented creators, discover inspiring work, and support
                    those who create content you love.
                </p>
            </section>

            {/* Search */}
            <section className="max-w-2xl mx-auto mt-14">
                <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">
                        🔍
                    </span>

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search creators..."
                        className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-14 py-4 text-white placeholder:text-slate-500 outline-none focus:border-emerald-400/40 transition-all"
                    />
                </div>
            </section>

            {/* Creator Grid */}
            <section className="max-w-7xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredCreators.length === 0 ? (
                        <div className="col-span-full text-center">
                            <h2 className="text-2xl font-semibold text-white">
                                No creators found
                            </h2>
                            <p className="mt-2 text-slate-500">
                                Try searching for another creator.
                            </p>
                        </div>
                    ) : (
                        filteredCreators.map((creator) => (
                            <div
                                key={creator.username}
                                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/10 group"
                            >
                                {/* Profile */}
                                <div className="flex justify-center">
                                    <img
                                        src={creator.profilepic}
                                        alt={creator.name}
                                        className="w-24 h-24 rounded-full object-cover border-2 border-emerald-400/20 group-hover:scale-105 transition"
                                    />
                                </div>

                                {/* Name */}
                                <h2 className="mt-6 text-center text-2xl font-bold text-white">
                                    {creator.name}
                                </h2>

                                <p className="mt-1 text-center text-emerald-300">
                                    @{creator.username}
                                </p>

                                {/* Stats */}
                                <div className="flex justify-between mt-8">
                                    <div className="text-center flex-1">
                                        <h3 className="text-2xl font-bold text-white">
                                            {creator.supporters}
                                        </h3>

                                        <p className="text-slate-500 text-sm">
                                            Supporters
                                        </p>
                                    </div>

                                    <div className="w-px bg-white/10"></div>

                                    <div className="text-center flex-1">
                                        <h3 className="text-2xl font-bold text-white">
                                            ₹{creator.amountRaised}
                                        </h3>

                                        <p className="text-slate-500 text-sm">
                                            Raised
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <Link
                                    href={`/${creator.username}`}
                                    className="mt-8 w-full flex justify-center items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 py-4 font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all"
                                >
                                    View Profile
                                    <ArrowRightIcon />
                                </Link>
                            </div>
                        ))
                    )}

                </div>
            </section>
        </main>
    );
}