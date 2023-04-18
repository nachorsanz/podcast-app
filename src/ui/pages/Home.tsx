import React, { useState, useEffect } from 'react';
import Card from '../card-component/card-component';
import { getTopPodcasts } from '../../api/get-data-from-api/get-data-from-api';
import Header from '../header-component/header-component';
import { useNavigate } from 'react-router-dom';
import { PodcastType } from '../../domain/podcast';
import { paginateArray } from '../../common/utils/utils';
import Pagination from '../pagination-component/pagination-component';
import Filters from '../filters-component/filters-component';

const HomePage = () => {
  const pageSize = 24;
  const [allPodcasts, setAllPodcasts] = useState<PodcastType[]>([]);
  const [cachedResponse, setCachedResponse] = useState<string | null>(
    localStorage.getItem('cachedResponse'),
  );
  const [filter, setFilter] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastType[]>([]);
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
    if (differenceInHours >= 24) {
      localStorage.removeItem('cachedResponse');
      setCachedResponse(null);
      fetchTopPodcasts();
    } else {
      cachedResponse && setAllPodcasts(JSON.parse(cachedResponse).response);
    }
 
  };

  useEffect(() => {
    !cachedResponse && fetchTopPodcasts();
    checkCachedResponse();
  }, [cachedResponse]);

  const navigate = useNavigate();

  const handleNavigate = (id: string, podcast: PodcastType) => {
    navigate(`/podcast/${id}`, { state: { podcast: podcast } });
  };

  useEffect(() => {
    const filtered = allPodcasts.filter((podcast: PodcastType) => {
      const title = podcast['im:name'].label.toLowerCase();
      const author = podcast['im:artist'].label.toLowerCase();
      const filterLowerCase = filter.toLowerCase();
      return (
        title.includes(filterLowerCase) || author.includes(filterLowerCase)
      );
    });
    setFilteredPodcasts(filtered);
  }, [allPodcasts, filter]);

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <>
      <Header>PODCAST APP</Header>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          marginTop: '90px',
        }}
      >
        <Filters
          handleFilter={handleFilter}
          filter={filter}
          total={filteredPodcasts.length}
        />
      </div>
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',

          height: '100vh',
          marginTop: '90px',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {filteredPodcasts.length ? (
              paginatedProducts[currentPage - 1]?.map((podcast: any) => {
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
                    onClick={() =>
                      handleNavigate(podcast.id.attributes['im:id'], podcast)
                    }
                  >
                    <Card
                      width="300px"
                      height="150px"
                      imageUrl={podcast['im:image'][2].label}
                      key={podcast['im:name'].label}
                    >
                      <h3
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '240px',
                          textAlign: 'center',
                        }}
                      >
                        {podcast['im:name'].label.toUpperCase()}
                      </h3>
                      <p>Author: {podcast['im:artist'].label}</p>
                    </Card>
                  </div>
                );
              })
            ) : (
              <>
                <h1>Sorry, no results found</h1>
              </>
            )}
          </div>

          <Pagination
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            currentPage={currentPage}
            paginatedProducts={paginatedProducts}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
