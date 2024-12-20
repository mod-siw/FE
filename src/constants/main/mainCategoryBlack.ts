export const mainCategoryBlack = [
  {
    category: 'movie',
    title: ['유저들의 2024년 속', '영화 한 편씩 모아봤어요'],
    data: [
      { id: 1, img: '/blackImg/movie01.webp' },
      { id: 2, img: '/blackImg/movie02.webp' },
      { id: 3, img: '/blackImg/movie03.webp' },
      { id: 4, img: '/blackImg/movie04.webp' },
      { id: 5, img: '/blackImg/movie05.webp' },
      { id: 6, img: '/blackImg/movie06.webp' },
      { id: 7, img: '/blackImg/movie07.webp' },
      { id: 8, img: '/blackImg/movie08.jpg' },
      { id: 9, img: '/blackImg/movie09.jpg' },
      { id: 10, img: '/blackImg/movie10.jpg' },
      { id: 11, img: '/blackImg/movie11.jpg' },
      { id: 12, img: '/blackImg/movie12.jpg' },
      { id: 13, img: '/blackImg/movie13.jpg' },
      { id: 14, img: '/blackImg/movie14.jpg' },
    ],
  },
  {
    category: 'music',
    title: ['유저들의 순간 속', '음악 한 곡씩 모아봤어요'],
    data: Array.from({ length: 20 }, (v, i) => ({
      id: i + 1,
      img: `/blackImg/music${String(i + 1).padStart(2, '0')}.webp`,
    })),
  },
  {
    category: 'books',
    title: ['유저들의 2024년 속', '도서 한 권씩 모아봤어요'],
    data: Array.from({ length: 14 }, (v, i) => ({
      id: i + 1,
      img: `/blackImg/books${String(i + 1).padStart(2, '0')}.jpg`,
    })),
  },
  {
    category: 'youtube',
    title: ['유저들의 순간 속', '유튜브 하나씩 모아봤어요'],
    data: Array.from({ length: 8 }, (v, i) => ({
      id: i + 1,
      img: `/blackImg/youtube${String(i + 1).padStart(2, '0')}.jpg`,
    })),
  },
  {
    category: 'ott',
    title: ['유저들의 2024년 속', 'OTT 한 편씩 모아봤어요'],
    data: Array.from({ length: 12 }, (v, i) => ({
      id: i + 1,
      img: `/blackImg/ott${String(i + 1).padStart(2, '0')}.webp`,
    })),
  },
  {
    category: 'performance',
    title: ['유저들의 순간 속', '공연 한 편씩 모아봤어요'],
    data: [
      { id: 1, img: '/blackImg/perf01.jpg' },
      { id: 2, img: '/blackImg/perf02.gif' },
      { id: 3, img: '/blackImg/perf03.gif' },
      { id: 4, img: '/blackImg/perf04.webp' },
      { id: 5, img: '/blackImg/perf05.webp' },
      { id: 6, img: '/blackImg/perf06.jpg' },
      { id: 7, img: '/blackImg/perf07.webp' },
      { id: 8, img: '/blackImg/perf08.jpg' },
    ],
  },
];
