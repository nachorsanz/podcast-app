import React from 'react';
import { css } from '@emotion/react';
import { Podcast } from '../../domain/podcast';

type PodcastInfoProps = {
  podcast: Podcast;
};

const PodcastInfoStyles = css`
  width: 280px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    height: auto;
    margin-bottom: 20px;
    border-bottom: 1px solid #f7f7f7;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f7f7f7;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f7f7f7;
  }

  p {
    font-size: 14px;
    text-align: justify;
  }
`;

const PodcastInfo: React.FC<PodcastInfoProps> = ({ podcast }) => {
  const {
    'im:name': { label: name },
    'im:image': images,
    'im:artist': { label: artist },
    summary,
  } = podcast;
  const imageSrc = images[2]?.label || '';

  return (
    <div css={PodcastInfoStyles}>
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <p>{summary?.label}</p>
    </div>
  );
};

export default PodcastInfo;
