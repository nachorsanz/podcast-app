import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Podcast } from '../../domain/podcast';
import { getPodcastDetail } from '../../api/get-data-from-api/get-data-from-api';

const PodcastDetail: React.FC = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState<Podcast>();

  useEffect(() => {
    id &&
      getPodcastDetail(id).then((response) => {
        console.log(response);

        response?.results && setPodcast(response.results);
        console.log(podcast);
      });
  }, [id]);

  return (
    <div className="podcast-detail">
      {podcast && (
        <>
          <div className="podcast-detail__header">
            <img
              src={podcast['im:image'][2].label}
              alt={podcast['im:name'].label}
            />
            <div className="podcast-detail__header-info">
              <h1 className="podcast-detail__title">
                {podcast['im:name'].label}
              </h1>
              <p className="podcast-detail__artist">
                {podcast['im:artist'].label}
              </p>
              <p className="podcast-detail__category">
                {podcast.category.attributes.label}
              </p>
              <p className="podcast-detail__release-date">
                {podcast['im:releaseDate'].attributes.label}
              </p>
            </div>
          </div>
          <div className="podcast-detail__body">
            <p className="podcast-detail__summary">{podcast.summary.label}</p>
            <div className="podcast-detail__actions">
              <a
                className="podcast-detail__link"
                href={podcast.link.attributes.href}
              >
                Visit Podcast
              </a>
              <p className="podcast-detail__price">
                {podcast['im:price'].label}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PodcastDetail;
