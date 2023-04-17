import { Podcast } from "../../domain/podcast";

export const generateMockPodcast = (): Podcast => {
    const randomString = Math.random().toString(36).substring(7);
  
    return {
      'im:name': {
        label: `Podcast ${randomString}`,
      },
      'im:image': [
        {
          label: `https://example.com/image-${randomString}`,
          attributes: {
            height: '100',
          },
        },
        {
          label: `https://example.com/image-${randomString}-2`,
          attributes: {
            height: '200',
          },
        },
      ],
      summary: {
        label: `Summary of Podcast ${randomString}`,
      },
      'im:price': {
        label: `${Math.round(Math.random() * 10)} USD`,
        attributes: {
          amount: `${Math.round(Math.random() * 10)}`,
          currency: 'USD',
        },
      },
      'im:contentType': {
        attributes: {
          term: 'podcast',
          label: 'Podcast',
        },
      },
      rights: {
        label: `All rights reserved for Podcast ${randomString}`,
      },
      title: {
        label: `Title of Podcast ${randomString}`,
      },
      link: {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: `https://example.com/podcast-${randomString}`,
        },
      },
      id: {
        label: `https://example.com/podcast-${randomString}`,
        attributes: {
          'im:id': `${Math.round(Math.random() * 100)}`,
        },
      },
      'im:artist': {
        label: `Artist of Podcast ${randomString}`,
        attributes: {
          href: `https://example.com/artist-${randomString}`,
        },
      },
      category: {
        attributes: {
          'im:id': `${Math.round(Math.random() * 100)}`,
          term: `Category ${randomString}`,
          scheme: 'https://example.com/category',
          label: `Category ${randomString}`,
        },
      },
      'im:releaseDate': {
        label: new Date().toISOString(),
        attributes: {
          label: new Date().toLocaleDateString(),
        },
      },
    };
  };
  