import { PodcastType } from '../../models/podcast';
import DOMPurify from 'dompurify';

export const paginateArray = (podcasts: PodcastType[], pageSize: number) => {
  return podcasts.reduce(
    (acc: PodcastType[][], val: PodcastType, i: number) => {
      const pageIndex = Math.floor(i / pageSize);
      const page = acc[pageIndex] || (acc[pageIndex] = []);
      page.push(val);
      return acc;
    },
    [],
  );
};

export function formatTime(milliseconds: number): string {
  const totalSeconds = Math.round(milliseconds / 1000);
  const minutes = Math.round(totalSeconds / 60);
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

export const has24HoursPassed = (dateString: string): boolean => {
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const now = new Date();
  const date = new Date(dateString);
  return now.getTime() - date.getTime() >= ONE_DAY_IN_MS;
};

export const sanitizeHtml = (data: string) => {
  return {
    __html: DOMPurify.sanitize(data),
  };
};
