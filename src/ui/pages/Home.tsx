import React, { useState, useEffect } from 'react';
import Card from '../common/card-component/card-component';
import { getTopPodcasts } from '../../api/get-data-from-api/get-data-from-api';
import Header from '../header-component/header-component';
import { useNavigate } from 'react-router-dom';
import { Podcast } from '../../domain/podcast';
import { paginateArray } from '../../common/utils/utils';

const Home = () => {
  const pageSize = 24;
  const [allPodcasts, setAllPodcasts] = useState<Podcast[]>([]);
  const [cachedResponse, setCachedResponse] = useState<string | null>(
    localStorage.getItem('cachedResponse'),
  );
  const [filter, setFilter] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);
  const paginatedProducts = paginateArray(filteredPodcasts, pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const fetchTopPodcasts = () => {
    getTopPodcasts().then((response) => {
      response?.feed && setAllPodcasts(response.feed.entry);
      localStorage.setItem(
        'cachedResponse',
        JSON.stringify({
          date: new Date().toISOString(),
          response: response.feed.entry,
        }),
      );
    });
  };

  const checkCachedResponse = () => {
    const now = new Date().toISOString();
    const cachedDate = cachedResponse ? JSON.parse(cachedResponse).date : null;
    const difference = new Date(now).getTime() - new Date(cachedDate).getTime();
    const differenceInHours = Math.floor(difference / 1000 / 60 / 60);
    if (differenceInHours > 1) {
      localStorage.removeItem('cachedResponse');
      setCachedResponse(null);
    }
    cachedResponse && setAllPodcasts(JSON.parse(cachedResponse).response);
  };

  useEffect(() => {
    !cachedResponse && fetchTopPodcasts();
    checkCachedResponse();
  }, [cachedResponse]);

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/podcast/${id}`);
  };

  useEffect(() => {
    const filtered = allPodcasts.filter((podcast: any) => {
      const title = podcast['im:name'].label.toLowerCase();
      const author = podcast['im:artist'].label.toLowerCase();
      const filterLowerCase = filter.toLowerCase();
      return (
        title.includes(filterLowerCase) || author.includes(filterLowerCase)
      );
    });
    setFilteredPodcasts(filtered);
  }, [allPodcasts, filter]);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        height: '100vh',
        marginTop: '180px',
      }}
    >
      <Header>PODCAST APP</Header>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by title or author"
        />
      </div>
      {paginatedProducts[currentPage - 1]?.map((podcast: any) => {
        return (
          <div
            key={podcast['im:name'].label}
            style={{
              width: '280px',
              height: '240px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => handleNavigate(podcast.id.attributes['im:id'])}
          >
            <Card
              width="300px"
              height="150px"
              imageUrl={podcast['im:image'][2].label}
              key={podcast['im:name'].label}
            >
              <h3>{podcast['im:name'].label.toUpperCase()}</h3>
              <p>Author: {podcast['im:artist'].label}</p>
            </Card>
          </div>
        );
      })}

      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button
        onClick={goToNextPage}
        disabled={currentPage === paginatedProducts.length}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Home;
