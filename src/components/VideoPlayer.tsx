import { motion } from 'framer-motion';
import { getYouTubeEmbedUrl } from '../utils/videoUtils';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description?: string;
  autoplay?: boolean;
}

function VideoPlayer({ videoUrl, title, description, autoplay = false }: VideoPlayerProps) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl, autoplay);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden bg-secondary/30 backdrop-blur-sm"
    >
      <div className="aspect-video">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Video not available
          </div>
        )}
      </div>
      {(title || description) && (
        <div className="p-4">
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {description && <p className="text-gray-300">{description}</p>}
        </div>
      )}
    </motion.div>
  );
}

export default VideoPlayer;