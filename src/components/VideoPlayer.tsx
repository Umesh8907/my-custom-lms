'use client';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string; // URL of the video
  thumbnailUrl?: string; // Optional thumbnail URL for poster image
}

export default function VideoPlayer({ videoUrl, thumbnailUrl }: VideoPlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="video-wrapper" style={{ position: 'relative', paddingTop: '56.25%' }}>
      <ReactPlayer
        url={videoUrl}
        playing={false}
        controls
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        light={thumbnailUrl} // This is the thumbnail
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload', // Disable the download button
            },
          },
        }}
      />
    </div>
  );
}
