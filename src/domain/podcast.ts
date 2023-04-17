export type Podcast = {
  'im:name': {
    label: string;
  };
  'im:image': {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  summary: {
    label: string;
  };
  'im:price': {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  'im:contentType': {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
    };
  };
  'im:artist': {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      'im:id': string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  'im:releaseDate': {
    label: string;
    attributes: {
      label: string;
    };
  };
};

export type PodcastDetail = {
  country: string;
  artworkUrl60: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  description: string;
  artistIds: any[];
  shortDescription: string;
  episodeUrl: string;
  releaseDate: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  trackId: number;
  trackName: string;
  feedUrl: string;
  artworkUrl160: string;
  artworkUrl600: string;
};
