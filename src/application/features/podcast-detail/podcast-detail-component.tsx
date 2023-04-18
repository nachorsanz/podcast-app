import React from 'react';
import {
  PodcastType,
   PodcastDetailType,
} from '../../../domain/podcast';
import { formatDate, formatTime } from '../../../infra/services/utils/utils';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const headerStyles = css`
  color: #333;
  padding: 10px;
  font-size: 20px;
`;
const headerContainer = css`
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  background-color: #f5f5f5;
`;

const listStyles = css`
  list-style: none;
  width: 800px;
`;

const listItemStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

const nameStyles = css`
  color: blue;
  cursor: pointer;
`;

const ContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 800px;
  height: auto;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 20px;

  background-color: #fff;
`;

const buttonContainer = css`
width: 100%;
  display: flex;
  align-items: flex-end;
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

const headeContainerStyles = css`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

interface PodcastDetailProps {
  podcast: PodcastDetailType[];
  mainPodcast: PodcastType;
}

const PodcastDetail: React.FC<PodcastDetailProps> = ({
  podcast,
  mainPodcast,
}) => {
  const navigate = useNavigate();

  const handleRedirectToEpisodeDetail = (podcast: PodcastDetailType) => {
    navigate(`/podcast/${podcast?.collectionId}/episode/${podcast?.trackId}`, {
      state: { podcast: podcast, mainPodcast: mainPodcast },
    });
  };
  return (
    <div css={ContainerStyles}>
      <div>
        <div css={headerContainer}>
          <div css={headerStyles}>Title</div>
          <div
            css={headeContainerStyles}
          >
            <div css={headerStyles}>Date</div>
            <div css={headerStyles}>Time</div>
          </div>
        </div>
        <ul css={listStyles}>
          {podcast &&
            podcast.map((podcast) => (
              <li key={podcast.trackViewUrl} css={listItemStyles}>
                <div
                  css={nameStyles}
                  onClick={() => handleRedirectToEpisodeDetail(podcast)}
                >
                  {podcast.trackName}
                </div>
                <div
                  css={headeContainerStyles}
                >
                  <p>{formatDate(podcast.releaseDate)}</p>
                  <p>{formatTime(podcast.trackTimeMillis)}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div
        css={buttonContainer}
      >
        <button css={buttonStyles} onClick={() => navigate('/')}>
          VOLVER AL LISTADO
        </button>
      </div>
    </div>
  );
};

export default PodcastDetail;
