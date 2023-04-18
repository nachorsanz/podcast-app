import { PodcastDetailType, PodcastType } from "../../../domain/models/podcast";

export const generateMockPodcast = (): PodcastType => {
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

  export const getMockPodcastDetail = (): PodcastDetailType => ({
    country: "United States",
    artworkUrl60: "https://example.com/podcastartwork60.png",
    closedCaptioning: "false",
    collectionId: 123456789,
    collectionName: "Example Podcast",
    contentAdvisoryRating: "Explicit",
    trackViewUrl: "https://example.com/podcast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque nec libero maximus scelerisque. Vestibulum semper nibh vitae ante accumsan commodo. Suspendisse eu odio eros. Sed malesuada odio ac velit tristique, sed blandit quam auctor. Fusce sed ultrices arcu. Fusce id felis in urna facilisis mollis.",
    artistIds: [],
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    episodeUrl: "https://example.com/episode1",
    releaseDate: "2022-04-01T12:34:56Z",
    collectionViewUrl: "https://example.com/podcast",
    trackTimeMillis: 3600000,
    trackId: 987654321,
    trackName: "Example Episode",
    feedUrl: "https://example.com/feed.xml",
    artworkUrl160: "https://example.com/podcastartwork160.png",
    artworkUrl600: "https://example.com/podcastartwork600.png",
  });
  
  