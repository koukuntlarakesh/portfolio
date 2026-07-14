"use client";

import dynamic from "next/dynamic";

const VideoIntro = dynamic(() => import("@/components/VideoIntro"), { ssr: false });

export default function ClientVideoIntro() {
  return <VideoIntro />;
}
