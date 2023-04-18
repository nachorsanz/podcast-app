import { generateMockPodcast } from '../../api/mock/mock-factory';
import { paginateArray, formatTime, formatDate } from './utils';

describe('paginateArray function', () => {
  test('should return an empty array when the input array is empty', () => {
    const result = paginateArray([], 10);
    expect(result).toEqual([]);
  });

  test('should return an array with the same elements when pageSize is greater than the length of the input array', () => {
    const input = [
      generateMockPodcast(),
      generateMockPodcast(),
      generateMockPodcast(),
    ];
    const result = paginateArray(input, 10);
    expect(result).toEqual([input]);
  });

  test('should return an array of arrays with the specified number of elements', () => {
    const input = [
      generateMockPodcast(),
      generateMockPodcast(),
      generateMockPodcast(),
      generateMockPodcast(),
      generateMockPodcast(),
    ];
    const result = paginateArray(input, 2);
    expect(result).toEqual([
      [input[0], input[1]],
      [input[2], input[3]],
      [input[4]],
    ]);
  });
});

describe('formatTime function', () => {
  test('should return "00:00" when the input is 0', () => {
    const result = formatTime(0);
    expect(result).toBe('00:00');
  });

  test('should return the formatted time when the input is greater than 0', () => {
    const result = formatTime(642500);
    expect(result).toBe('11:43');
  });
});

describe('formatDate function', () => {
  test('should format the date correctly', () => {
    const result = formatDate('2023-04-17T17:00:00.000Z');
    expect(result).toBe('17/04/2023');
  });
});
