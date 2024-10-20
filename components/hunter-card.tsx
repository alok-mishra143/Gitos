"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CharacterData {
  name: string;
  summary: string;
  rank: string;
  quote: string;
}

export function HunterCard({
  characterData,
}: {
  characterData: CharacterData;
}) {
  return (
    <Card className="w-full max-w-3xl overflow-hidden">
      <CardContent className="p-6 sm:p-8 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-950">
        <div className="relative">
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-400 dark:bg-pink-600 rounded-full opacity-20 blur-2xl"></div>
          <div className="relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {characterData.name}
            </h2>
            <Badge className="bg-yellow-400 text-yellow-900 dark:bg-yellow-500 dark:text-yellow-950">
              {characterData.rank}
            </Badge>
            <p className="text-white dark:text-gray-100 leading-relaxed">
              {characterData.summary}
            </p>
            <div className="mt-6 p-4 bg-white/10 dark:bg-black/20 rounded-lg backdrop-blur-sm">
              <p className="text-yellow-200 dark:text-yellow-300 font-semibold italic">
                &quot;{characterData.quote}&quot;
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
