import React, { useState, useEffect } from 'react';
import Card from '../common/card-component/card-component';
import { getTopPodcasts } from '../../api/get-data-from-api/get-data-from-api';
import Header from '../header-component/header-component';

function Home() {
  const [allPodcasts, setAllPodcasts] = useState([]);

  useEffect(()=>{
     getTopPodcasts().then((response)=>{
        response?.feed && setAllPodcasts(response.feed.entry)
    })
   
  },[])

  

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
      <Header>HOLA</Header>
      <h1>PODCAST APP</h1>
      {allPodcasts?.map((podcast:any) => {
        return (
          <Card
            width="300px"
            height="150px"
            imageUrl={podcast['im:image'][2].label}
            key={podcast['im:name'].label}
          >
            <h2>{podcast['im:name'].label.toUpperCase()}</h2>
            <p>Author: {podcast['im:artist'].label}
            </p>
          </Card>
        );
      })}

      {/* <Card
        width="300px"
        height="150px"
        imageUrl="https://placekitten.com/500/500"
      >
        <h2>TITULO DEL PODCAST</h2>
        <p>Author: xxxx</p>
      </Card> */}
    </div>
  );
}

export default Home;
