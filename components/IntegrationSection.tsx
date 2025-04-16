"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PlatformCardProps {
  platform: {
    id: string;
    name: string;
    description: string;
    iconUrl: string;
    iconBgColor?: string;
  };
}

function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              platform.iconBgColor || "bg-background"
            }`}
          >
            <Image
              src={platform.iconUrl}
              alt={platform.name}
              width={24}
              height={24}
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="font-medium">{platform.name}</span>
        </div>
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">{platform.description}</p>

      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-muted rounded-md flex items-center justify-center"
          >
            <Plus className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </Card>
  );
}

const platforms = [
  {
    id: "justwatch",
    name: "JustWatch",
    description:
      "Track where to watch your favorite movies and TV shows across streaming platforms!",
    iconUrl: "/icons/justwatch.svg",
    iconBgColor: "bg-[#FBB831]/10",
  },
  {
    id: "steam",
    name: "Steam",
    description:
      "Connect your Steam library and track your gaming achievements and playtime!",
    iconUrl: "/icons/steam.svg",
    iconBgColor: "bg-[#1B2838]/10",
  },
  {
    id: "goodreads",
    name: "Goodreads",
    description: "Keep a log of your books and see what % you've read!",
    iconUrl: "/icons/goodreads.svg",
    iconBgColor: "bg-[#553B08]/10",
  },
  {
    id: "netflix",
    name: "Netflix",
    description:
      "Track your Netflix watching history and get personalized recommendations!",
    iconUrl: "/icons/netflix.svg",
    iconBgColor: "bg-[#E50914]/10",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "See your favorite channels, playlists, and watch history!",
    iconUrl: "/icons/youtube.svg",
    iconBgColor: "bg-[#FF0000]/10",
  },
];

export function IntegrationSection() {
  return (
    <div className="py-3 px-3">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Platform connections</h1>
      </div>

      <div className="space-y-4">
        {platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
}
