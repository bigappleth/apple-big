"use client"
import React from 'react'
import VideoPlayerControls from "@/components/VideoPlayerControls";
import { useEffect, useRef, useState } from "react";
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { heroDetails } from '@/data/hero';

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
        if (videoDuration != null && currentTime != null) {
            /* eslint-disable */
            let loadingTimeout = setTimeout(() => {
                if (videoProgress == currentTime / videoDuration) {
                    setVideoProgress((prev) => prev + 0.000001);
                } else {
                    setVideoProgress(currentTime / videoDuration);
                }
            }, 10);

            return () => {
                clearTimeout(loadingTimeout);
            };
        }
    }, [videoProgress, videoDuration, isPaused]);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            /* eslint-disable */
            setIsPaused(!video.paused);
            video.paused ? video.play() : video.pause();
        }
    };
    return (
        <main className="">
            
            <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                    <VideoPlayerControls
                        progress={videoProgress}
                        isPaused={isPaused}
                        onPlayPause={togglePlayPause}
                    />
                </div>
                <video className="w-80" ref={videoRef} playsInline loop autoPlay>
                    <source src="/videos/big-apple.mp4" />
                </video>
            </div>
            <p className=" -mt-80 pl-36 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
            <div className="mt-3 pl-36 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
        </main>
    )
}

export default VideoSection