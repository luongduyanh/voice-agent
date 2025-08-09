import { useSearchParams } from 'react-router-dom';
import LiveKitWidget from '@/components/ai_avatar/LiveKitWidget';

const DiscordSupport = () => {
  const [searchParams] = useSearchParams();
  const sessionToken = searchParams.get('session');
  
  if (!sessionToken) {
    return <div>Invalid session</div>;
  }

  return (
    <div className="min-h-screen bg-discord-dark flex items-center justify-center">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Discord AI Support</h2>
        <LiveKitWidget setShowSupport={() => window.close()} />
      </div>
    </div>
  );
};

export default DiscordSupport;