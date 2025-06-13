"use client"
import React, { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "@/components/VideoPlayerControls";
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { heroDetails } from '@/data/hero';
import Link from "next/link";

const VideoSection = () => {
    const [videoProgress, setVideoProgress] = useState<number>(0);
    const [videoDuration, setVideoDuration] = useState<number>();
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setVideoDuration(video.duration);
        }
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const currentTime = videoRef.current?.currentTime;
        if (videoDuration != null && currentTime != null && videoDuration !== 0) {
            const loadingTimeout = setTimeout(() => {
                const newProgress = currentTime / videoDuration;
                if (videoProgress === newProgress) {
                    setVideoProgress((prev) => prev + 0.000001);
                } else {
                    setVideoProgress(newProgress);
                }
            }, 10);

            return () => clearTimeout(loadingTimeout);
        }
    }, [videoProgress, videoDuration, isPaused]);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPaused(false);
            } else {
                video.pause();
                setIsPaused(true);
            }
        }
    };

    return (
        <main className="min-h-[70vh] flex flex-col justify-between items-center py-8 px-2 sm:py-16 sm:px-4">
            <div className="flex flex-col lg:flex-row flex-1 w-full max-w-4xl items-center justify-between gap-8 lg:gap-12">
                {/* Video */}
                <div className="w-full flex justify-center lg:flex-1">
                    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                        <div className="absolute top-4 right-4 z-10">
                            <VideoPlayerControls
                                progress={videoProgress}
                                isPaused={isPaused}
                                onPlayPause={togglePlayPause}
                            />
                        </div>
                        <video
                            className="w-full h-full object-cover rounded-xl"
                            style={{ objectPosition: "center 30%" }}
                            ref={videoRef}
                            playsInline
                            loop
                            autoPlay
                            controls
                            muted
                            preload="metadata"
                            onTimeUpdate={() => {
                                const currentTime = videoRef.current?.currentTime;
                                if (currentTime != null && videoDuration != null) {
                                    setVideoProgress(currentTime / videoDuration);
                                }
                            }}
                            onLoadedMetadata={() => {
                                const video = videoRef.current;
                                if (video) {
                                    setVideoDuration(video.duration);
                                }
                            }}
                            onPause={() => setIsPaused(true)}
                        >
                            <source src="/videos/big_apple_mobile.mp4" />
                        </video>
                    </div>
                </div>
                {/* Site Info, Description and Buttons */}
                <div className="w-full flex flex-col justify-center items-center gap-6 lg:gap-8 lg:flex-1">
                    <Link href="/" className="flex items-center gap-2">
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {heroDetails.siteName}
                        </h3>
                    </Link>
                    <h1 className="hidden md:block text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
                        {heroDetails.heading1} <br />
                        {heroDetails.heading2} <br />
                        {heroDetails.heading3} </h1>
                    <p className="mt-3.5 text-foreground-accent text-center text-base sm:text-lg leading-relaxed md:text-xl font-medium max-w-xs sm:max-w-md md:max-w-lg">
                        {heroDetails.subheading}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-2 w-full max-w-xs sm:max-w-md md:max-w-lg">
                        <AppStoreButton dark />
                        <PlayStoreButton dark />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VideoSection;