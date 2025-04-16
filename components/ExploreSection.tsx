"use client";

import { useState, useMemo } from "react";
import { SwipeableCard } from "@/components/SwipeableCard";

// Generate random angle between -8 and 8 degrees
const getRandomAngle = () => Math.random() * 16 - 8;

// Mock data for movies
const mockMovies = [
  {
    _id: "movie9",
    title: "Interstellar",
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    year: 2014,
    duration: 169,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    imdbRank: 21,
    awards: ["2015 Oscar Winner - Best Visual Effects"],
    actors: [
      {
        name: "Matthew McConaughey",
        imageUrl:
          "https://image.tmdb.org/t/p/w500/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg",
        isLiked: true,
      },
      {
        name: "Anne Hathaway",
        imageUrl:
          "https://image.tmdb.org/t/p/w500/tLelKoPNiyJCSEtQTj1uGK59GM1.jpg",
      },
    ],
  },
  // Add more mock movies here for demonstration
  {
    _id: "movie10",
    title: "Inception",
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
    year: 2010,
    duration: 148,
    genres: ["Action", "Sci-Fi", "Thriller"],
    imdbRank: 13,
    awards: ["2011 Oscar Winner - Best Cinematography"],
    actors: [
      {
        name: "Leonardo DiCaprio",
        imageUrl:
          "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
        isLiked: true,
      },
    ],
  },
  {
    _id: "movie11",
    title: "The Dark Knight",
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    year: 2008,
    duration: 152,
    genres: ["Action", "Crime", "Drama"],
    imdbRank: 3,
    awards: ["2009 Oscar Winner - Best Supporting Actor"],
    actors: [
      {
        name: "Christian Bale",
        imageUrl:
          "https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg",
      },
    ],
  },
];

export function ExploreSection() {
  const movies = mockMovies;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate random angles for each card and memoize them
  const cardAngles = useMemo(
    () => movies?.map(() => getRandomAngle()) ?? [],
    [movies]
  );

  const handleSwipe = (direction: "left" | "right" | "up") => {
    // Move to next card
    setCurrentIndex((prev) => prev + 1);
  };

  const renderContent = () => {
    if (currentIndex >= movies.length) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl font-bold">All movies viewed!</h1>
          <p className="text-muted-foreground">Refresh to see more movies.</p>
        </div>
      );
    }

    return (
      <div className="relative h-[500px]">
        {movies.slice(currentIndex, currentIndex + 3).map((movie, index) => {
          const angle = cardAngles[currentIndex + index];
          const xOffset = Math.sin(angle * (Math.PI / 180)) * 5;

          return (
            <div
              key={movie._id}
              className="absolute inset-x-0"
              style={{
                zIndex: movies.length - index,
                transform: `
                  scale(${1 - index * 0.03}) 
                  translateY(${index * 4}px)
                  translateX(${xOffset}px)
                  rotate(${angle}deg)
                `,
                opacity: 1 - index * 0.15,
                transition: "transform 0.3s ease-out",
              }}
            >
              <SwipeableCard
                title={movie.title}
                iconName="Film"
                imageUrl={movie.imageUrl}
                onSwipe={handleSwipe}
                rating={movie.rating}
                year={movie.year}
                duration={movie.duration}
                genres={movie.genres}
                imdbRank={movie.imdbRank}
                awards={movie.awards}
                actors={movie.actors}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[320px] mx-auto py-6">{renderContent()}</div>
  );
}
