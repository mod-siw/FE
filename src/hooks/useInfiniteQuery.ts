import { useInfiniteQuery } from '@tanstack/react-query';
import { GetCategoryList } from 'api/post';
import { GetSearchList } from 'api/search';
import { useTheme } from 'contexts/ThemeContext';
import { useMemo } from 'react';

export const useCategoryInfiniteQuery = (category: string) => {
  const { isDarkMode } = useTheme();

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getCategoryList', category],
    queryFn: ({ pageParam = '' }) => {
      // 페이지 파라미터가 비어 있으면 기본 API 엔드포인트를 호출
      return GetCategoryList(isDarkMode, category, pageParam);
    },
    getNextPageParam: (lastPage) => {
      // next 필드를 사용하여 다음 페이지의 URL을 반환
      return lastPage.data?.next || undefined;
    },
    initialPageParam: '', // 첫 번째 호출 시 기본값으로 빈 문자열을 사용
  });

  const items = useMemo(() => {
    if (data?.pages) {
      return data.pages.flatMap((page) => {
        // 각 페이지의 results 필드에서 데이터를 추출
        return page.data?.results || [];
      });
    }
    return [];
  }, [data]);

  return {
    items,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};

// export const useCategoryInfiniteQuery = (category: string) => {
//   const { isDarkMode } = useTheme();

//   const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
//     queryKey: ['getCategoryList', category],
//     queryFn: ({ pageParam = 1 }) => {
//       return GetCategoryList(isDarkMode, category, pageParam);
//     },
//     getNextPageParam: (lastPage) =>
//       lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
//     initialPageParam: 1,
//   });

//   const items = useMemo(() => {
//     if (data?.pages) {
//       return data.pages.flatMap((page) => {
//         if (page.data.results) {
//           return page.data.results;
//         }
//         return page.data;
//       });
//     }
//     return [];
//   }, [data]);

//   return {
//     items,
//     isFetchingNextPage,
//     hasNextPage,
//     fetchNextPage,
//   };
// };

export const useSearchInfiniteQuery = (keyword: string) => {
  const { isDarkMode } = useTheme();

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getSearchList', keyword],
    queryFn: ({ pageParam = 1 }) => {
      return GetSearchList(isDarkMode, keyword, pageParam);
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  const items = useMemo(() => {
    if (data?.pages) {
      return data.pages.flatMap((page) => {
        if (page.data.results) {
          return page.data.results;
        }
        return page.data;
      });
    }
    return [];
  }, [data]);

  return {
    items,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};
