import { Podcast } from '../../domain/podcast';

export const paginateArray = (array: Podcast[], pageSize: number) => {
  return array.reduce((acc: Podcast[][], val: Podcast, i: number) => {
    const pageIndex = Math.floor(i / pageSize);
    const page = acc[pageIndex] || (acc[pageIndex] = []);
    page.push(val);
    return acc;
  }, []);
};
