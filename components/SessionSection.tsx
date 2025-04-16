"use client";

import { Clock, Star, ThumbsUp, ThumbsDown, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface SessionCardProps {
  session: {
    _id: string;
    title: string;
    imageUrl: string;
    duration: number;
    rating?: number;
    description?: string;
    date: string;
    status: "completed" | "in-progress" | "planned";
  };
}

interface VotedMovieProps {
  movie: {
    _id: string;
    title: string;
    imageUrl: string;
    upvotes: number;
    downvotes: number;
    points: number;
    rank: number;
  };
}

interface OnlineUserProps {
  user: {
    _id: string;
    name: string;
    avatarUrl: string;
    isActive: boolean;
  };
}

function VotedMovie({ movie }: VotedMovieProps) {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-accent/5 rounded-md transition-colors">
      <div className="flex-shrink-0 relative w-8 h-12">
        <Image
          src={movie.imageUrl}
          alt={movie.title}
          fill
          className="object-cover rounded-sm"
          unoptimized
        />
        <div className="absolute -top-1 -left-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-[10px] font-medium text-white">
            {movie.rank}
          </span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-medium truncate">{movie.title}</h4>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-0.5">
            <ThumbsUp className="w-3 h-3" /> {movie.upvotes}
          </div>
          <div className="flex items-center gap-0.5">
            <ThumbsDown className="w-3 h-3" /> {movie.downvotes}
          </div>
          <div className="flex items-center gap-0.5">
            <Trophy className="w-3 h-3" /> {movie.points}p
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineUser({ user }: OnlineUserProps) {
  return (
    <div className="flex items-center gap-2 p-1.5">
      <div className="relative">
        <Avatar className="w-6 h-6">
          <AvatarImage src={user.avatarUrl} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        {user.isActive && (
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full ring-1 ring-background" />
        )}
      </div>
      <span className="text-xs">{user.name}</span>
    </div>
  );
}

function SessionCard({ session }: SessionCardProps) {
  const statusConfig = {
    completed: { label: "Tamamlandı", color: "bg-green-500/10 text-green-600" },
    "in-progress": {
      label: "Devam Ediyor",
      color: "bg-blue-500/10 text-blue-600",
    },
    planned: { label: "Planlandı", color: "bg-orange-500/10 text-orange-600" },
  };

  const status = statusConfig[session.status];

  return (
    <Card className="relative p-2 hover:bg-accent/5 transition-colors">
      {/* Status Badge */}
      <div className="absolute top-2 left-2 z-10">
        <Badge
          variant="secondary"
          className={`flex items-center gap-1 py-0.5 px-1.5 border shadow-sm hover:bg-background ${status.color}`}
        >
          <Clock className="w-2.5 h-2.5" />
          <span className="text-[9px] font-medium">{status.label}</span>
        </Badge>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[3/4] mb-2">
        <Image
          unoptimized
          src={session.imageUrl}
          alt={session.title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-1">
          <h3 className="font-medium text-[11px] line-clamp-2">
            {session.title}
          </h3>
          <span className="text-[9px] text-muted-foreground shrink-0">
            {session.date}
          </span>
        </div>

        {session.rating && (
          <div className="flex items-center gap-0.5">
            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            <span className="text-[9px] text-muted-foreground">
              {session.rating.toFixed(1)}
            </span>
          </div>
        )}

        {session.description && (
          <p className="text-[9px] text-muted-foreground line-clamp-2">
            {session.description}
          </p>
        )}
      </div>
    </Card>
  );
}

// Mock data for sessions
const mockSessions = [
  {
    _id: "session1",
    title: "The Dark Knight",
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    duration: 152,
    rating: 9.0,
    description:
      "Batman raises the stakes in his war on crime in this thrilling sequel.",
    date: "Bugün",
    status: "in-progress" as const,
  },
  {
    _id: "session2",
    title: "Breaking Bad - Sezon 1",
    imageUrl: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    duration: 45,
    rating: 9.5,
    description:
      "A high school chemistry teacher turned methamphetamine manufacturer.",
    date: "Dün",
    status: "completed" as const,
  },
  {
    _id: "session3",
    title: "God of War Ragnarök",
    imageUrl: "https://image.tmdb.org/t/p/w500/qKZVhD5n0YGvGZYg5rZy4lvkHiS.jpg",
    duration: 120,
    rating: 9.7,
    description: "Kratos and Atreus must journey to each of the Nine Realms.",
    date: "Yarın",
    status: "planned" as const,
  },
  {
    _id: "session4",
    title: "Kronotrop Coffee",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    duration: 60,
    rating: 4.8,
    description: "Specialty coffee roastery ve kahve barı ziyareti.",
    date: "2 gün önce",
    status: "completed" as const,
  },
];

// Mock data for voted movies
const votedMovies = [
  {
    _id: "movie1",
    title: "The Godfather",
    imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    upvotes: 0,
    downvotes: 1,
    points: -1,
    rank: 1,
  },
  {
    _id: "movie2",
    title: "Flow",
    imageUrl: "https://image.tmdb.org/t/p/w500/imKSymKBK7o73sajciEmndJoVkR.jpg",
    upvotes: 0,
    downvotes: 1,
    points: -1,
    rank: 2,
  },
  {
    _id: "movie3",
    title: "Nomadland",
    imageUrl: "https://image.tmdb.org/t/p/w500/k5XzjWihzum1YgLMlqRDRZDmVMn.jpg",
    upvotes: 0,
    downvotes: 1,
    points: -1,
    rank: 3,
  },
];

// Mock data for online users
const onlineUsers = [
  {
    _id: "user1",
    name: "Selim Dilşad Ercan",
    avatarUrl: "https://github.com/shadcn.png",
    isActive: true,
  },
  {
    _id: "user2",
    name: "Gaffar Dulkadir",
    avatarUrl: "https://avatars.githubusercontent.com/u/179176251?v=4",
    isActive: true,
  },
];

export function SessionSection() {
  return (
    <div className="py-3 px-3">
      {/* Session Complete Status */}
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <Trophy className="w-12 h-12 text-yellow-500 mb-2" />
        <h2 className="text-base font-semibold">Oturum Tamamlandı!</h2>
        <p className="text-sm text-muted-foreground">
          Tüm katılımcılar oylamayı tamamladı.
        </p>
      </div>

      {/* Most Voted Section */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">En Çok Beğenilenler</h3>
        <div className="space-y-1">
          {votedMovies.map((movie) => (
            <VotedMovie key={movie._id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Online Users Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <h3 className="text-sm font-semibold"> Kullanıcılar</h3>
          </div>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Oturumdan Ayrıl
          </Button>
        </div>
        <div className="space-y-0.5">
          {onlineUsers.map((user) => (
            <OnlineUser key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
