import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import PodcastDetail from '../features/podcast-detail/podcast-detail-component';
import Header from '../features/header-component/header-component';
import Card from '../features/card-component/card-component';
import { useParams, useLocation } from 'react-router-dom';
import { PodcastDetailType } from '../../domain/models/podcast';
import { getPodcastDetail } from '../../infra/api/get-data-from-api/get-data-from-api';
import PodcastInfo from '../features/podcast-info/podcast-info-component';

const containerStyle = css`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
`;

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
  padding: 20px;
  margin-top: 20px;
`;

const listItemStyle = css`
  font-size: 24px;
  font-weight: bold;
`;

const PodcastPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const [cachedResponses, setCachedResponses] = useState<
    { id: string; data: PodcastDetailType[]; date: string }[]
  >(() => {
    const cachedResponsesString = localStorage.getItem('cachedResponses');
    if (cachedResponsesString) {
      return JSON.parse(cachedResponsesString);
    }
    return [];
  });

  const updateCachedResponses = (
    id: string,
    data: PodcastDetailType[],
    date: string,
  ) => {
    const cachedResponse = cachedResponses.find((r) => r.id === id);
    const newCachedResponses = cachedResponse
      ? cachedResponses.filter((r) => r.id !== id)
      : cachedResponses;
    newCachedResponses.push({ id, data, date });
    localStorage.setItem('cachedResponses', JSON.stringify(newCachedResponses));
    setCachedResponses(newCachedResponses);
  };

  useEffect(() => {
    const cachedResponse = cachedResponses.find((r) => r.id === id);
    if (cachedResponse) {
      const cachedDate = cachedResponse.date;
      const now = new Date().toISOString();
      const difference = new Date(now).getTime() - new Date(cachedDate).getTime();
      const differenceInHours = Math.floor(difference / 1000 / 60 / 60);
      if (differenceInHours >= 24 || !cachedResponse.data) {
        const newCachedResponses = cachedResponses.filter((r) => r.id !== id);
        localStorage.setItem('cachedResponses', JSON.stringify(newCachedResponses));
        setCachedResponses(newCachedResponses);
       id && getPodcastDetail(id).then((data) => {
          const result = data.results.slice(1);
          updateCachedResponses(id, result, new Date().toISOString());
        });
      } else {
        setPodcast(cachedResponse.data);
      }
    } else {
     id && getPodcastDetail(id).then((data) => {
        const result = data?.results.slice(1);
        setPodcast(result);
        updateCachedResponses(id, result, new Date().toISOString());
      });
    }
  }, [id, cachedResponses]);

  const [podcast, setPodcast] = useState<PodcastDetailType[]>([]);

  return (
    <>
      <Header>PODCAST APP</Header>

      <div css={containerStyle}>
        <Card width="300px" height="min-content">
          <PodcastInfo podcast={state?.podcast} />
        </Card>
        <div css={listContainerStyle}>
          <div css={listItemStyle}>Episodes: {podcast?.length}</div>
          <PodcastDetail podcast={podcast ?? []} mainPodcast={state.podcast} />
        </div>
      </div>
    </>
  );
};

export default PodcastPage;
