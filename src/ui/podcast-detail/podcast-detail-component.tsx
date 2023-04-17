import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Podcast } from '../../domain/podcast';
import { getPodcastDetail } from '../../api/get-data-from-api/get-data-from-api';
import { findPodcastById } from '../../common/utils/utils';

interface PodcastDetailProps {
  podcast: any[];
}

const PodcastDetail: React.FC<PodcastDetailProps> = ({ podcast }) => {
  return (
    <div className="podcast-detail">
      {podcast &&
        podcast.map((podcast) => (
          <>
            <h1>{podcast.collectionName}</h1>
            <img src={podcast.artworkUrl600} alt={podcast.collectionName} />
            <p>{podcast.artistName}</p>
            <p>{podcast.primaryGenreName}</p>
            <p>{podcast.trackCount}</p>
            <p>{podcast.releaseDate}</p>
            <p>{podcast.country}</p>
            <p>{podcast.collectionPrice}</p>
            <p>{podcast.currency}</p>
            <p>{podcast.feedUrl}</p>
            <p>{podcast.trackName}</p>
            <p>{podcast.trackViewUrl}</p>
            <p>{podcast.trackPrice}</p>
            <p>{podcast.trackRentalPrice}</p>
          </>
        ))}
    </div>
  );
};

export default PodcastDetail;
