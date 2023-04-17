import { Podcast } from '../../domain/podcast';

export const paginateArray = (podcasts: Podcast[], pageSize: number) => {
  return podcasts.reduce((acc: Podcast[][], val: Podcast, i: number) => {
    const pageIndex = Math.floor(i / pageSize);
    const page = acc[pageIndex] || (acc[pageIndex] = []);
    page.push(val);
    return acc;
  }, []);
};

export const findPodcastById = (id: string, podcasts: Podcast[]) => {
  return podcasts.find((podcast) => podcast.id.attributes['im:id'] === id);
};

export function formatTime(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
