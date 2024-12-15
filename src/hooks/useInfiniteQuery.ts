import { useInfiniteQuery } from '@tanstack/react-query';
import { GetCategoryList } from 'api/post';
import { GetSearchList } from 'api/search';
import { useTheme } from 'contexts/ThemeContext';
import { useMemo } from 'react';

export const useCategoryInfiniteQuery = (category: string) => {
  const { isDarkMode } = useTheme();

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getCategoryList', category],
    queryFn: ({ pageParam = 1 }) => {
      return GetCategoryList(isDarkMode, category, pageParam);
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
