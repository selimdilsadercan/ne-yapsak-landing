import {
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Star,
  Calendar,
  Film,
  Award,
  TrendingUp,
  Clock,
  User,
  Trophy,
  X,
  Heart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SwipeableCardProps {
  title: string;
  iconName: string;
  imageUrl: string;
  onSwipe: (direction: "left" | "right" | "up") => void;
  rating: number;
  year: number;
  duration: number;
  genres: string[];
  imdbRank: number;
  awards: string[];
  actors: {
    name: string;
    imageUrl: string;
    isLiked?: boolean;
  }[];
}

function SwipeableCard({
  title,
  iconName,
  imageUrl,
  onSwipe,
  rating,
  year,
  duration,
  genres,
  imdbRank,
  awards,
  actors,
}: SwipeableCardProps) {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Calculate rotation based on drag
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  // Calculate opacity for direction indicators
  const leftIndicatorOpacity = useTransform(x, [-200, -100, 0], [1, 1, 0]);
  const rightIndicatorOpacity = useTransform(x, [0, 100, 200], [0, 1, 1]);

  const handleDragEnd = async (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset;
    const velocity = info.velocity;

    const swipe = {
      x: Math.abs(offset.x) * Math.sign(velocity.x),
      y: Math.abs(offset.y) * Math.sign(velocity.y),
    };

    // Determine swipe direction based on velocity and offset
    if (Math.abs(swipe.x) > 100 || Math.abs(swipe.y) > 100) {
      if (swipe.x > 0) {
        await controls.start({ x: 1000, opacity: 0 });
        onSwipe("right");
      } else if (swipe.x < 0) {
        await controls.start({ x: -1000, opacity: 0 });
        onSwipe("left");
      } else if (swipe.y < 0) {
        await controls.start({ y: -1000, opacity: 0 });
        onSwipe("up");
      }
    } else {
      // Reset position if not swiped far enough
      controls.start({ x: 0, y: 0, opacity: 1 });
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{ x, y, rotate }}
      initial={{ opacity: 1 }}
      whileDrag={{
        scale: 1.02,
        cursor: "grabbing",
      }}
      className="absolute w-full cursor-grab active:cursor-grabbing will-change-transform"
    >
      {/* Left Indicator (NOPE) */}
      <motion.div
        className="absolute left-4 top-4 z-10 rotate-[-20deg]"
        style={{ opacity: leftIndicatorOpacity }}
      >
        <div className="rounded-md border-4 border-red-500 px-4 py-1">
          <span className="text-2xl font-bold text-red-500">NOPE</span>
        </div>
      </motion.div>

      {/* Right Indicator (LIKE) */}
      <motion.div
        className="absolute right-4 top-4 z-10 rotate-[20deg]"
        style={{ opacity: rightIndicatorOpacity }}
      >
        <div className="rounded-md border-4 border-green-500 px-4 py-1">
          <span className="text-2xl font-bold text-green-500">LIKE</span>
        </div>
      </motion.div>

      <Card className="w-full h-fit relative bg-white py-0 pb-10">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {Math.floor(duration / 60)}h {duration % 60}m
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{year}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#f5c518]">IMDb</span>
              <span className="font-semibold">{rating}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge
                  key={genre}
                  variant="secondary"
                  className="text-sm bg-gray-300/50"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              draggable={false}
              unoptimized
            />
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">#{imdbRank} on IMDb Top 250</span>
            </div>
            {awards.map((award, index) => (
              <div key={index} className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">{award}</span>
              </div>
            ))}
            {actors
              .filter((actor) => actor.isLiked)
              .map((actor) => (
                <div key={actor.name} className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={actor.imageUrl}
                      alt={actor.name}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <span className="text-sm">
                    The actor you love {actor.name} is in this movie
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => onSwipe("left")}
          >
            <X className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => onSwipe("right")}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export { SwipeableCard };
