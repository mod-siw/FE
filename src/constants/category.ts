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
  travel: { name: '여행지', color: 'mint01' },
  food: { name: '음식', color: 'aqua01' },
  meme: { name: '밈', color: 'magenta01' },
  photo: { name: '사진', color: 'red01' },
  item: { name: '아이템', color: 'orange01' },
  look: { name: '룩', color: 'purple01' },
  app: { name: '어플', color: 'sky01' },
  sports: { name: '스포츠', color: 'pink01' },
};
