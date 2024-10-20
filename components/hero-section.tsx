/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import { HunterCard } from "./hunter-card";

export function HeroSection() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [Airesponce, setAiresponce] = useState();
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub user data.");
      }

      const data = await response.json();
      setUserData(data); // Update the state with GitHub user data

      const res2 = await fetch("/api/github", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: data }), // Correctly pass GitHub user data here
      });

      const data2 = await res2.json();
      const data3 = data2.output.candidates[0].content.parts[0].text.replace(
        /```json|```/g,
        ""
      );

      setAiresponce(JSON.parse(data3));
    } catch (error) {
      setError("An error occurred while fetching the data. Please try again.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-gray-900 bg-white overflow-hidden z-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white dark:text-gray-900">
              GitHub Profile Summary
            </h1>
            <p className="mx-auto max-w-[700px] dark:text-white text-gray-700 md:text-lg lg:text-xl">
              Enter your GitHub username to see your profile summary and ranking
              among other developers.
            </p>
          </div>

          <div className="w-full max-w-md space-y-4">
            <form onSubmit={handleSearch} className="flex space-x-3">
              <div className="relative flex-1">
                <Input
                  className="dark:bg-gray-800 dark:text-white bg-gray-200 text-gray-800 dark:placeholder-gray-500 placeholder-gray-600 backdrop-blur-lg rounded-lg shadow-lg"
                  placeholder="Enter GitHub username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <Button
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-spin h-5 w-5">⏳</span>
                ) : (
                  <>
                    <GithubIcon className="mr-2 h-5 w-5" />
                    Search
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="flex gap-9">
            <div className="w-full max-w-3xl">
              {error && <div className="text-red-500">{error}</div>}
              {Airesponce ? (
                <HunterCard characterData={Airesponce} />
              ) : (
                <div className="text-gray-600 dark:text-white">
                  Enter a GitHub username to see the results
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
