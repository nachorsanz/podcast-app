const topPodcastsUrl = process.env.VITE_APP_PODCAST_MAIN_URL as string;
const detailPodcastUrl = process.env.VITE_APP_PODCAST_DETAIL_URL as string;

export const getTopPodcasts = async () => {
  const response = await fetch(topPodcastsUrl);

  const data = await response?.json();
  return data;
};

export const getPodcastDetail = async (podcastId: string) => {
  const response = await fetch(`${detailPodcastUrl}${podcastId}`);

  const data = await response?.json();
  return data;
};
