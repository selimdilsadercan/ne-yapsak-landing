"use client";

import {
  Film,
  Gamepad2,
  MapPin,
  PartyPopper,
  Activity,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const defaultLists = [
  {
    id: "experience",
    title: "Yeni Bir Şey Deneyimlemek",
    description: "Yeni deneyimler",
    icon: Sparkles,
  },
  {
    id: "watch",
    title: "Bir Şey İzlemek",
    description: "Film ve diziler",
    icon: Film,
  },
  {
    id: "game",
    title: "Bir Şey Oynamak",
    description: "Video oyunları",
    icon: Gamepad2,
  },
  {
    id: "visit",
    title: "Bir Yere Gitmek",
    description: "Mekanlar ve yerler",
    icon: MapPin,
  },
  {
    id: "event",
    title: "Bir Etkinliğe Gitmek",
    description: "Konser, tiyatro ve daha fazlası",
    icon: PartyPopper,
  },
  {
    id: "activity",
    title: "Bir Aktivite Yapmak",
    description: "Yapabileceğiniz her şey",
    icon: Activity,
  },
];

interface DefaultListCardProps {
  title: string;
  description: string;
  icon: any;
  className?: string;
}

function DefaultListCard({
  title,
  description,
  icon: Icon,
  className,
}: DefaultListCardProps) {
  return (
    <div
      className={cn(
        "group flex items-start gap-1.5 rounded-md bg-card transition-all hover:bg-accent",
        className
      )}
    >
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-3 w-3" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[11px] font-medium leading-tight">
          {title}
        </h3>
        <p className="truncate text-[9px] text-muted-foreground leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}

interface ListCardProps {
  title: string;
  description?: string;
}

function ListCard({ title, description }: ListCardProps) {
  return (
    <Card className="h-full p-2">
      <h3 className="text-xs font-medium leading-tight">{title}</h3>
      {description && (
        <p className="mt-0.5 text-[9px] text-muted-foreground leading-tight">
          {description}
        </p>
      )}
    </Card>
  );
}

export function HomeSection() {
  // For now, we'll use mock data for suggested lists
  const mockSuggestedLists = [
    {
      id: "film-1",
      title: "En İyi Filmler",
      description: "2024'ün en iyileri",
    },
    {
      id: "film-2",
      title: "Tek Solukta İzlenecekler",
      description: "Sürükleyici ve temposu yüksek filmler",
    },

    // 📺 Diziler
    {
      id: "series-1",
      title: "Tek Sezonluk Diziler",
      description: "Az zamanda çok keyif",
    },
    {
      id: "series-2",
      title: "En Çok Konuşulanlar",
      description: "Trend diziler burada",
    },

    // 🎮 Oyunlar
    {
      id: "game-1",
      title: "Yeni Oyunlar",
      description: "Bu ay çıkanlar",
    },
    {
      id: "game-2",
      title: "Arkadaşlarla Oynanır",
      description: "Multiplayer keyifli oyunlar",
    },

    // 📍 Mekanlar
    {
      id: "place-1",
      title: "Kahve Severler İçin",
      description: "En iyi kahveciler",
    },
    {
      id: "place-2",
      title: "Retro Oyun Mekanları",
      description: "Nostalji dolu eğlence",
    },

    // 🎭 Etkinlikler
    {
      id: "event-1",
      title: "Bu Hafta Ne Var?",
      description: "İstanbul’daki güncel etkinlikler",
    },
    {
      id: "event-2",
      title: "Stand-up Gecesi",
      description: "Kahkaha garantili gösteriler",
    },

    // 📦 Kutu Oyunları
    {
      id: "boardgame-1",
      title: "Yeni Başlayanlar İçin",
      description: "Kolay öğrenilen kutu oyunları",
    },

    // 📹 Videolar
    {
      id: "video-1",
      title: "Trend Videolar",
      description: "YouTube'da öne çıkanlar",
    },

    // 🧗 Aktiviteler
    {
      id: "activity-1",
      title: "Deneyimlenesi Aktiviteler",
      description: "Yapılacak ilginç şeyler",
    },
    {
      id: "activity-2",
      title: "Doğa İçin Dışarı",
      description: "Açık hava aktiviteleri",
    },
  ];

  return (
    <div className="space-y-4 py-3 px-3">
      {/* Default Lists Section */}
      <section>
        <h1 className="mb-2 text-sm font-semibold">
          Bugün Ne Yapmak İstersin?
        </h1>
        <div className="grid grid-cols-2 gap-1.5">
          {defaultLists.map((list) => (
            <DefaultListCard
              key={list.id}
              title={list.title}
              description={list.description}
              icon={list.icon}
              className="p-1.5"
            />
          ))}
        </div>
      </section>

      {/* Suggested Lists Section */}
      <section>
        <h2 className="mb-2 text-sm font-semibold">Listeler</h2>
        <div className="grid grid-cols-2 gap-1.5">
          {mockSuggestedLists.map((list) => (
            <ListCard
              key={list.id}
              title={list.title}
              description={list.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
