import React, { useEffect, useState } from 'react';
import { RoomAudioRenderer, useTracks, LiveKitRoom } from '@livekit/components-react';
import { Track } from 'livekit-client';
import AvatarVoiceAgent from './AvatarVoiceAgent';

// Placeholder function to fetch a token - replace with real backend call.
async function fetchToken() {
  // In a real app this would call your backend.
  return {
    url: import.meta.env.VITE_LIVEKIT_URL || 'wss://example.livekit.cloud',
    token: 'DUMMY_TOKEN'
  };
}

const LiveKitWidget = () => {
  const [info, setInfo] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    (async () => {
      const tk = await fetchToken();
      setInfo(tk);
    })();
  }, []);

  if (!info) return <div className="p-4 text-sm">Đang khởi tạo trợ lý...</div>;

  return (
    <div className="fixed bottom-4 right-4 w-80 z-50 bg-white border rounded-lg shadow-lg overflow-hidden">
      <LiveKitRoom
        token={info.token}
        serverUrl={info.url}
        connect={true}
        audio={true}
        video={false}
        onConnected={() => setConnected(true)}
        style={{ height: '100%' }}
      >
        <RoomAudioRenderer />
        <TracksAvatar />
        {!connected && <div className="p-2 text-xs text-gray-500">Đang kết nối...</div>}
      </LiveKitRoom>
    </div>
  );
};

const TracksAvatar = () => {
  const tracks = useTracks([
    { source: Track.Source.Camera, withPlaceholder: true },
    { source: Track.Source.Microphone, withPlaceholder: true }
  ]);

  return (
    <div className="w-full h-60 bg-black flex items-center justify-center">
      <AvatarVoiceAgent tracks={tracks} />
    </div>
  );
};

export default LiveKitWidget;
