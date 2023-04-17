import React from 'react';
import { Podcast, PodcastDetail as PodcastDetailType } from '../../domain/podcast';
import { formatDate, formatTime } from '../../common/utils/utils';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Card from '../card-component/card-component';

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

interface PodcastDetailProps {
  podcast: PodcastDetailType[];
  mainPodcast: Podcast
}

const PodcastDetail: React.FC<PodcastDetailProps> = ({ podcast, mainPodcast }) => {
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
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div css={headerStyles}>Date</div>
            <div css={headerStyles}>Duration</div>
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
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '30px',
                  }}
                >
                  <p>{formatDate(podcast.releaseDate)}</p>
                  <p>{formatTime(podcast.trackTimeMillis)}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PodcastDetail;
