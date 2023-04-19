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
  const { id } = useParams();
  const { state } = useLocation();
  const [cachedResponse, setCachedResponse] = useState<string | null>(
    localStorage.getItem('cachedResponse'),
  );
  const [podcast, setPodcast] = useState<PodcastDetailType[]>();

  useEffect(() => {
    if (cachedResponse) {
      const cachedDate = JSON.parse(cachedResponse).date;
      const now = new Date().toISOString();
      const difference =
        new Date(now).getTime() - new Date(cachedDate).getTime();
      const differenceInHours = Math.floor(difference / 1000 / 60 / 60);
      if (differenceInHours >= 24) {
        localStorage.removeItem('cachedResponse');
        setCachedResponse(null);
        id &&
          getPodcastDetail(id).then((data) => {
            const result = data.results.slice(1);
            setPodcast(result);
            localStorage.setItem(
              'cacheDetail',
              JSON.stringify({
                date: new Date().toISOString(),
                response: result,
              }),
            );
          });
      } else {
        id &&
          getPodcastDetail(id).then((data) => {
            const result = data.results.slice(1);
            setPodcast(result);
            localStorage.setItem(
              'cacheDetail',
              JSON.stringify({
                date: new Date().toISOString(),
                response: result,
              }),
            );
          });
      }
    }
  }, [id, cachedResponse]);
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
