'use client';
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { PlayIcon } from "./ui/icons";

export const VideoPlayerTestimonies = memo(({ path }: { path: string }) => {
    const video_ref = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
      if (video_ref.current) {
          requestAnimationFrame(() => {
              video_ref.current?.play();
          });
          setIsPlaying(true);
      }
    }
    
    const handleStopVideo = () => {
      if (video_ref.current) {
        video_ref.current.pause();
        video_ref.current.currentTime = 0;
        setIsPlaying(false);
      }
    }

    useEffect(() => {
      const videoElement = video_ref.current;

      const handleEnded = () => {
        if (videoElement) {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
        setIsPlaying(false);
      }

      if(videoElement) videoElement.addEventListener('ended', handleEnded);

      return () => {
        if(videoElement) videoElement.removeEventListener('ended', handleEnded);
      }
    }, []);

    return (
        <Card className="w-full h-auto 2xl:w-[256px] rounded-xl border-none shadow-none">
            <CardContent
                className="relative flex items-center justify-center min-h-[480px] grow rounded-[16px] bg-gray-50 object-center p-0 md:min-h-[420px] overflow-hidden"
                onClick={isPlaying ? handleStopVideo : handlePlayVideo}
            >
                <div
                    className={cn(
                        isPlaying && 'hidden',
                        'absolute z-20 size-full backdrop-blur-[5px]'
                    )}
                />

                <video
                    ref={video_ref}
                    preload="metadata"
                    className={
                        'absolute top-0 z-10 size-full object-cover aspect-w-9'
                    }
                >
                    <source src={path} type="video/mp4" />
                </video>

                {!isPlaying && (
                    <button
                        onClick={handlePlayVideo}
                        className="absolute z-30 flex size-12 rounded-full bg-white p-3 ring-4 ring-white/30"
                    >
                        <PlayIcon className="m-auto" />
                        <span className="sr-only">Play Button</span>
                    </button>
                )}
            </CardContent>
        </Card>
    )
})

VideoPlayerTestimonies.displayName = 'VideoPlayerTestimonies';