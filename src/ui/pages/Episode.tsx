import React from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import PodcastInfo from '../podcast-info/podcast-info-component';
import Header from '../header-component/header-component';
import Card from '../card-component/card-component';

const ContainerStyles = css`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
`;
const cardStyles = css`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  width: 800px;
  height: 500px;

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
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
    border: 1px solid #e5e5e5;
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
              dangerouslySetInnerHTML={{ __html: podcast?.description }}
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
