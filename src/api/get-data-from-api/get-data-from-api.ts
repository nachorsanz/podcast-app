export const getTopPodcasts = async () => {
  const response = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  );
  const data = await response.json();
  return data;
};

export const getPodcastDetail = async (podcastId: string) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
  );
  const data = await response.json();
  return data;
};
