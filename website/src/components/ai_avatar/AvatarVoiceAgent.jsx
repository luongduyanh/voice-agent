import React, { useState } from 'react';
import { Track } from 'livekit-client';

const AvatarVoiceAgent = ({ tracks }) => {
  const [muted, setMuted] = useState(false);

  const cameraTrack = tracks.find(t => t.publication?.source === Track.Source.Camera);

  return (
    <div className="relative w-full h-full">
      {cameraTrack && cameraTrack.publication?.isSubscribed ? (
        <video
          ref={ref => {
            if (ref && cameraTrack.publication.track) {
              ref.srcObject = new MediaStream([cameraTrack.publication.track.mediaStreamTrack]);
            }
          }}
          autoPlay
          className="w-full h-full object-cover"
          muted={true}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white text-sm">Mai</div>
      )}
      <button
        onClick={() => setMuted(m => !m)}
        className="absolute top-2 right-2 bg-white/80 text-xs px-2 py-1 rounded"
      >
        {muted ? 'Bật mic' : 'Tắt mic'}
      </button>
    </div>
  );
};

export default AvatarVoiceAgent;
