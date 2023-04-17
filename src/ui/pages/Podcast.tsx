import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import PodcastDetail from '../podcast-detail/podcast-detail-component';
import Header from '../header-component/header-component';
import Card from '../card-component/card-component';
import { useParams, useLocation } from 'react-router-dom';
import {
  PodcastDetail as PodcastDetailType,
} from '../../domain/podcast';
import { getPodcastDetail } from '../../api/get-data-from-api/get-data-from-api';
import PodcastInfo from '../podcast-info/podcast-info-component';

const ContainerStyles = css`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
`;

const PodcastPage: React.FC = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const [podcast, setPodcast] = useState<PodcastDetailType[]>();

  useEffect(() => {
    id &&
      getPodcastDetail(id).then((response) => {
        response?.results && setPodcast(response.results.slice(1));
        console.log(podcast);
      });
  }, []);
  return (
    <>
      <Header>PODCAST APP</Header>
      <div css={ContainerStyles}>
        <Card width="300px" height="auto">
          <PodcastInfo podcast={state?.podcast} />
        </Card>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 800px;
            height: auto;
            padding: 20px;
            margin-top: 20px;
          `}
        >
          <div
            css={css`
              font-size: 24px;
              font-weight: bold;
            `}
          >
            Episodes: {podcast?.length}
          </div>
          <PodcastDetail podcast={podcast ?? []} mainPodcast={state.podcast} />
        </div>
      </div>
    </>
  );
};

export default PodcastPage;
