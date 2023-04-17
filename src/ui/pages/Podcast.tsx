import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import PodcastDetail from '../podcast-detail/podcast-detail-component';
import Header from '../header-component/header-component';
import Card from '../card-component/card-component';
import { useParams } from 'react-router-dom';
import { Podcast } from '../../domain/podcast';
import { getPodcastDetail } from '../../api/get-data-from-api/get-data-from-api';
import { findPodcastById } from '../../common/utils/utils';

const ContainerStyles = css`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
`;

const PodcastPage: React.FC = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState<any[]>();

  useEffect(() => {
    id &&
      getPodcastDetail(id).then((response) => {
        response?.results && setPodcast(response.results);
        console.log(podcast);
      });
  }, [id]);
  return (
    <>
      <Header>PODCAST APP</Header>
      <div css={ContainerStyles}>
        <Card width="300px" height="600px">
          <h2>Titulo</h2>
        </Card>
        <Card width="800px" height="auto">
          <PodcastDetail podcast={podcast ?? []} />
        </Card>
      </div>
    </>
  );
};

export default PodcastPage;
