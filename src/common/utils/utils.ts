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
