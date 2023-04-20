import React from 'react';
import { PodcastType, PodcastDetailType } from '../../../domain/models/podcast';
import { formatDate, formatTime } from '../../../domain/services/utils/utils';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import {
  MAIN_BLUE,
  MAIN_WHITE,
  SECONDARY_BLUE,
} from '../../../domain/services/constants/constants';

const headerStyle = css`
  color: #333;
  padding: 10px;
  font-size: 20px;
`;
const headerContainerStyle = css`
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  background-color: #f5f5f5;
`;

const listStyle = css`
  list-style: none;
  width: 800px;
`;

const listItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

const nameStyle = css`
  color: blue;
  cursor: pointer;
`;

const containerStyle = css`
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

  background-color: ${MAIN_WHITE};
`;

const buttonContainerStyle = css`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;
const buttonStyle = css`
  background-color: ${MAIN_BLUE};
  border: 1px solid ${MAIN_BLUE};
  color: ${MAIN_WHITE};
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${SECONDARY_BLUE};
    border: 1px solid ${SECONDARY_BLUE};
  }
`;

const headeContainerStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

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
    <div css={containerStyle}>
      <div>
        <div css={headerContainerStyle}>
          <div css={headerStyle}>Title</div>
          <div css={headeContainerStyle}>
            <div css={headerStyle}>Date</div>
            <div css={headerStyle}>Time</div>
          </div>
        </div>
        <ul css={listStyle}>
          {podcast &&
            podcast.map((podcast) => (
              <li key={podcast.trackViewUrl} css={listItemStyle}>
                <div
                  css={nameStyle}
                  onClick={() => handleRedirectToEpisodeDetail(podcast)}
                >
                  {podcast.trackName}
                </div>
                <div css={headeContainerStyle}>
                  <p>{formatDate(podcast.releaseDate)}</p>
                  <p>{formatTime(podcast.trackTimeMillis)}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div css={buttonContainerStyle}>
        <button css={buttonStyle} onClick={() => navigate('/')}>
          VOLVER AL LISTADO
        </button>
      </div>
    </div>
  );
};

export default PodcastDetail;
