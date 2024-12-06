import { DefaultTheme } from 'styled-components';

export const pathToCategory: Record<
  string,
  { name: string; color: keyof DefaultTheme['colors'] }
> = {
  movie: { name: '영화', color: 'mint01' },
  music: { name: '음악', color: 'sky01' },
  books: { name: '책', color: 'magenta01' },
  youtube: { name: '유튜브', color: 'red01' },
  ott: { name: 'OTT', color: 'orange01' },
  performance: { name: '공연', color: 'yellow01' },
};
