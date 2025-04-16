"use client";

import {
  Film,
  Gamepad2,
  MapPin,
  Calendar,
  Star,
  Sparkles,
  Mic,
  Dice5,
  Activity,
  Video,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type ItemType =
  | "movie"
  | "series"
  | "game"
  | "place"
  | "event"
  | "standup"
  | "board game"
  | "activity"
  | "video";

interface UnifiedCardProps {
  item: {
    _id: string;
    title: string;
    imageUrl: string;
    year?: number;
    rating?: number;
    type: ItemType;
    description?: string;
  };
}

const typeConfig = {
  movie: { icon: Film, label: "Film" },
  series: { icon: Sparkles, label: "Dizi" },
  game: { icon: Gamepad2, label: "Oyun" },
  place: { icon: MapPin, label: "Mekan" },
  event: { icon: Calendar, label: "Etkinlik" },
  standup: { icon: Mic, label: "Stand-up" },
  "board game": { icon: Dice5, label: "Kutu Oyunu" },
  activity: { icon: Activity, label: "Aktivite" },
  video: { icon: Video, label: "Video" },
};

function UnifiedCard({ item }: UnifiedCardProps) {
  const typeInfo = typeConfig[item.type];

  return (
    <Card className="relative p-2 hover:bg-accent/5 transition-colors">
      {/* Type Badge */}
      <div className="absolute top-2 left-2 z-10">
        <Badge
          variant="secondary"
          className="flex items-center gap-1 py-0.5 px-1.5 bg-background border shadow-sm hover:bg-background"
        >
          <typeInfo.icon className="w-2.5 h-2.5" />
          <span className="text-[9px] font-medium">{typeInfo.label}</span>
        </Badge>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[3/4] mb-2">
        <Image
          unoptimized
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-1">
          <h3 className="font-medium text-[11px] line-clamp-2">{item.title}</h3>
          {item.year && (
            <span className="text-[9px] text-muted-foreground shrink-0">
              ({item.year})
            </span>
          )}
        </div>

        {item.rating && (
          <div className="flex items-center gap-0.5">
            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            <span className="text-[9px] text-muted-foreground">
              {item.rating.toFixed(1)}
            </span>
          </div>
        )}

        {item.description && (
          <p className="text-[9px] text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </Card>
  );
}

const libraryItems = {
  movies: [
    {
      _id: "movie1",
      title: "Inception",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      year: 2010,
      rating: 8.8,
      type: "movie" as const,
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },
    {
      _id: "movie2",
      title: "The Shawshank Redemption",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      year: 1994,
      rating: 9.3,
      type: "movie" as const,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
  ],
  series: [
    {
      _id: "series1",
      title: "Breaking Bad",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      year: 2008,
      rating: 9.5,
      type: "series" as const,
      description:
        "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future.",
    },
    {
      _id: "series2",
      title: "The Crown",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      year: 2016,
      rating: 8.7,
      type: "series" as const,
      description:
        "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    },
  ],
  games: [
    {
      _id: "game1",
      title: "The Legend of Zelda: Breath of the Wild",
      imageUrl:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
      year: 2017,
      rating: 9.7,
      type: "game" as const,
      description:
        "Step into a world of discovery, exploration, and adventure in this open-air adventure game.",
    },
    {
      _id: "game2",
      title: "Red Dead Redemption 2",
      imageUrl:
        "https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png",
      year: 2018,
      rating: 9.6,
      type: "game" as const,
      description: "An epic tale of life in America's unforgiving heartland.",
    },
    {
      _id: "game3",
      title: "Bubble Trouble",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEtQBGYK3NqY5YonpQFoPKAu7Ewcke4YbIA&s", // örnek görsel
      year: 2002,
      rating: 8.3,
      type: "game" as const,
      description:
        "Classic arcade-style web game where you pop bubbles with a harpoon while avoiding being hit.",
    },
  ],
  places: [
    {
      _id: "place1",
      title: "Kronotrop Coffee Bar & Roastery",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      type: "place" as const,
      rating: 4.8,
      description:
        "Specialty coffee roastery ve kahve barı. El yapımı tatlılar ve brunch menüsü ile modern bir mekan.",
    },
    {
      _id: "place2",
      title: "Arcade İstanbul",
      imageUrl: "https://images.unsplash.com/photo-1511882150382-421056c89033",
      type: "place" as const,
      rating: 4.6,
      description:
        "Retro arcade oyunları, pinball makineleri ve modern konsol oyunlarıyla eğlenceli vakit geçirebileceğiniz mekan.",
    },
    {
      _id: "place3",
      title: "Climb Time",
      imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      type: "place" as const,
      rating: 4.7,
      description:
        "Profesyonel tırmanış duvarları ve boulder alanları ile her seviyeye uygun tırmanış deneyimi.",
    },
    {
      _id: "place4",
      title: "Board & Brew",
      imageUrl: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09",
      type: "place" as const,
      rating: 4.5,
      description:
        "Yüzlerce kutu oyunu, özel kahve çeşitleri ve atıştırmalıklarla keyifli bir kafe deneyimi.",
    },
    {
      _id: "place5",
      title: "VR Lab",
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
      type: "place" as const,
      rating: 4.4,
      description:
        "En son teknoloji VR ekipmanları ile sanal gerçeklik deneyimi yaşayabileceğiniz eğlence merkezi.",
    },
  ],
  events: [
    {
      _id: "event2",
      title: "Fazıl Say - İstanbul Recitali",
      imageUrl: "https://media.timeout.com/images/105951721/750/422/image.jpg",
      year: 2024,
      type: "event" as const,
      rating: 4.9,
      description:
        "Dünyaca ünlü piyanist Fazıl Say'ın İstanbul'da vereceği özel konser, klasik müzik ve kendi bestelerinden oluşan repertuar.",
    },
    {
      _id: "event3",
      title: "Hamlet - Devlet Tiyatroları",
      imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf",
      year: 2024,
      type: "event" as const,
      rating: 4.7,
      description:
        "Shakespeare'in ölümsüz eseri, modern bir yorumla Devlet Tiyatroları sahnesinde. Yönetmen: Can Yücel.",
    },
    {
      _id: "event4",
      title: "La Traviata - DOB",
      imageUrl: "https://images.unsplash.com/photo-1580809361436-42a7ec204889",
      year: 2024,
      type: "event" as const,
      rating: 4.8,
      description:
        "Verdi'nin ünlü operası, Devlet Opera ve Balesi tarafından sahneleniyor. Muhteşem kostümler ve etkileyici performanslar.",
    },
  ],
  videos: [
    {
      _id: "video1",
      title: "BATIL ROYALE #2 - YOUTUBERLAR SAVAŞI",
      imageUrl: "https://i.ytimg.com/vi/vVOXZI9Tg_Q/maxresdefault.jpg",
      year: 2024,
      rating: 4.8,
      type: "video" as const,
      description:
        "Soğuk Savaş'ın sunumuyla, Berkcan Güven ve 3Y1T'nin katılımıyla gerçekleşen eğlenceli bir YouTube şovu.",
    },
  ],
  standups: [
    {
      _id: "standup2",
      title: "Deniz Göktaş - Selam Selam",
      imageUrl: "https://i.ytimg.com/vi/MLORi76oq4k/maxresdefault.jpg",
      year: 2023,
      rating: 4.7,
      type: "standup" as const,
      description:
        "Deniz Göktaş'ın ilk stand-up gösterisi. Günlük hayattan, ilişkilerden ve sosyal medyadan beslenen özgün bir performans.",
    },
  ],
  boardGames: [
    {
      _id: "boardgame1",
      title: "Wingspan",
      imageUrl:
        "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg",
      year: 2019,
      rating: 8.5,
      type: "board game" as const,
      description:
        "1-5 oyuncu için rekabetçi bir kuş koleksiyonu ve motor inşa etme oyunu.",
    },
  ],
  activities: [
    {
      _id: "activity1",
      title: "Rock Climbing",
      imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      type: "activity" as const,
      description:
        "Doğal veya yapay tırmanış duvarlarında kendinizi fiziksel ve zihinsel olarak zorlayın.",
    },
  ],
};

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function LibrarySection() {
  // Combine all items into a single array and shuffle
  const allItems = shuffleArray([
    ...libraryItems.movies,
    ...libraryItems.series,
    ...libraryItems.games,
    ...libraryItems.places,
    ...libraryItems.events,
    ...libraryItems.videos,
    ...libraryItems.standups,
    ...libraryItems.boardGames,
    ...libraryItems.activities,
  ]);

  return (
    <div className="py-3 px-3">
      <div className="space-y-2 mb-3">
        <h1 className="text-sm font-semibold">Kitaplığın</h1>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {allItems.map((item) => (
          <UnifiedCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
