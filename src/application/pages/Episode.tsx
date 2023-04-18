import React from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import PodcastInfo from '../features/podcast-info/podcast-info-component';
import Header from '../features/header-component/header-component';
import Card from '../features/card-component/card-component';
import { sanitizeHtml } from '../../infra/services/utils/utils';

const ContainerStyles = css`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
`;
const cardStyles = css`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 800px;
  height: 540px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const PodcastInfoStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: 700px;
    height: 300px;
    text-align: justify;
    margin-bottom: 10px;
    overflow: scroll;
    text-overflow: ellipsis;
  }
`;

const buttonStyles = css`
  background-color: #007aff;
  border: 1px solid #007aff;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #0062cc;
    border: 1px solid #0062cc;
  }
`;

const EpisodePage: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const podcast = state?.podcast;
  const mainPodcast = state?.mainPodcast;

  return (
    <>
      <Header>PODCAST APP</Header>

      <div css={ContainerStyles}>
        <Card width="300px" height="min-content">
          <PodcastInfo podcast={mainPodcast} />
        </Card>
        <div css={cardStyles}>
          <h2>
            {podcast?.collectionName} - {podcast?.trackName}
          </h2>
          <div css={PodcastInfoStyles}>
            <span
              dangerouslySetInnerHTML={sanitizeHtml(podcast?.description)}
            ></span>
          </div>
          <div>
            <audio controls>
              <source src={podcast?.episodeUrl} type="audio/mp3" />
            </audio>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <button
              css={buttonStyles}
              onClick={() =>
                navigate(`/podcast/${mainPodcast.id.attributes['im:id']}`, {
                  state: {
                    podcast: mainPodcast,
                  },
                })
              }
            >
              VOLVER AL LISTADO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodePage;
