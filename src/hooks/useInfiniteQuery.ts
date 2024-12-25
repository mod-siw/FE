import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetCategoryList } from 'api/post';
import { GetSearchList } from 'api/search';
import { useTheme } from 'contexts/ThemeContext';

export const useCategoryInfiniteQuery = (category: string) => {
  const { isDarkMode } = useTheme();

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getCategoryList', category],
    queryFn: ({ pageParam = 1 }) => GetCategoryList(isDarkMode, category, pageParam),
    getNextPageParam: (lastPage, pages) => {
      const { total_pages } = lastPage.data ?? {};
      const currentPage = pages.length;
      return currentPage < total_pages ? currentPage + 1 : null;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 3,
    initialPageParam: 1,
  });

  const items = useMemo(() => {
    if (data?.pages) {
      return data.pages.flatMap((page) => {
        return page.data?.results || [];
      });
    }
    return [];
  }, [data]);

  const userPostCount = useMemo(() => {
    if (data?.pages?.length) {
      return data.pages[0]?.data?.user_post_count || 0;
    }
    return 0;
  }, [data]);

  return {
    items,
    userPostCount,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};

export const useSearchInfiniteQuery = (keyword: string) => {
  const { isDarkMode } = useTheme();

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getSearchList', keyword],
    queryFn: ({ pageParam = 1 }) => GetSearchList(isDarkMode, keyword, pageParam),
    getNextPageParam: (lastPage, pages) => {
      const { total_pages } = lastPage.data ?? {};
      const currentPage = pages.length;
      return currentPage < total_pages ? currentPage + 1 : null;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 3,
    initialPageParam: 1,
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
