export function getYouTubeEmbedUrl(url: string, autoplay: boolean = false): string {
  try {
    const videoId = url.includes('youtube.com') 
      ? new URL(url).searchParams.get('v')
      : url.split('youtu.be/')[1]?.split('?')[0];
    
    return videoId 
      ? `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1&mute=1' : ''}`
      : '';
  } catch {
    return '';
  }
}