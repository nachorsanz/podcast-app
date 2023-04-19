import { generateMockPodcast, getMockPodcastDetail } from './mock-factory';

describe('generateMockPodcast', () => {
  it('should return an object with the correct properties', () => {
    const podcast = generateMockPodcast();

    expect(podcast).toHaveProperty('im:name');
    expect(podcast).toHaveProperty('im:image');
    expect(podcast).toHaveProperty('summary');
    expect(podcast).toHaveProperty('im:price');
    expect(podcast).toHaveProperty('im:contentType');
    expect(podcast).toHaveProperty('rights');
    expect(podcast).toHaveProperty('title');
    expect(podcast).toHaveProperty('link');
    expect(podcast).toHaveProperty('id');
    expect(podcast).toHaveProperty('im:artist');
    expect(podcast).toHaveProperty('category');
    expect(podcast).toHaveProperty('im:releaseDate');
  });

  it('should return a podcast object with correct data types', () => {
    const podcast = generateMockPodcast();

    expect(typeof podcast['im:name'].label).toBe('string');
    expect(Array.isArray(podcast['im:image'])).toBe(true);
    expect(typeof podcast.summary.label).toBe('string');
    expect(typeof podcast['im:price'].label).toBe('string');
    expect(typeof podcast['im:contentType'].attributes.term).toBe('string');
    expect(typeof podcast['im:contentType'].attributes.label).toBe('string');
    expect(typeof podcast.rights.label).toBe('string');
    expect(typeof podcast.title.label).toBe('string');
    expect(typeof podcast.link.attributes.rel).toBe('string');
    expect(typeof podcast.link.attributes.type).toBe('string');
    expect(typeof podcast.link.attributes.href).toBe('string');
    expect(typeof podcast.id.label).toBe('string');
    expect(typeof podcast.id.attributes['im:id']).toBe('string');
    expect(typeof podcast['im:artist'].label).toBe('string');
    expect(typeof podcast['im:artist'].attributes.href).toBe('string');
    expect(typeof podcast.category.attributes['im:id']).toBe('string');
    expect(typeof podcast.category.attributes.term).toBe('string');
    expect(typeof podcast.category.attributes.scheme).toBe('string');
    expect(typeof podcast.category.attributes.label).toBe('string');
    expect(typeof podcast['im:releaseDate'].label).toBe('string');
    expect(typeof podcast['im:releaseDate'].attributes.label).toBe('string');
  });
});

describe('getMockPodcastDetail', () => {
  test('returns a mock podcast detail object', () => {
    const result = getMockPodcastDetail();

    expect(result).toHaveProperty('country', 'United States');
    expect(result).toHaveProperty(
      'artworkUrl60',
      'https://example.com/podcastartwork60.png',
    );
    expect(result).toHaveProperty('closedCaptioning', 'false');
    expect(result).toHaveProperty('collectionId', 123456789);
    expect(result).toHaveProperty('collectionName', 'Example Podcast');
    expect(result).toHaveProperty('contentAdvisoryRating', 'Explicit');
    expect(result).toHaveProperty(
      'trackViewUrl',
      'https://example.com/podcast',
    );
    expect(result).toHaveProperty(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque nec libero maximus scelerisque. Vestibulum semper nibh vitae ante accumsan commodo. Suspendisse eu odio eros. Sed malesuada odio ac velit tristique, sed blandit quam auctor. Fusce sed ultrices arcu. Fusce id felis in urna facilisis mollis.',
    );
    expect(result).toHaveProperty('artistIds', []);
    expect(result).toHaveProperty(
      'shortDescription',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
    expect(result).toHaveProperty('episodeUrl', 'https://example.com/episode1');
    expect(result).toHaveProperty('releaseDate', '2022-04-01T12:34:56Z');
    expect(result).toHaveProperty(
      'collectionViewUrl',
      'https://example.com/podcast',
    );
    expect(result).toHaveProperty('trackTimeMillis', 3600000);
    expect(result).toHaveProperty('trackId', 987654321);
    expect(result).toHaveProperty('trackName', 'Example Episode');
    expect(result).toHaveProperty('feedUrl', 'https://example.com/feed.xml');
    expect(result).toHaveProperty(
      'artworkUrl160',
      'https://example.com/podcastartwork160.png',
    );
    expect(result).toHaveProperty(
      'artworkUrl600',
      'https://example.com/podcastartwork600.png',
    );
  });
});
