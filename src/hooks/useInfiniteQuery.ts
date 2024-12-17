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
      return GetCategoryList(isDarkMode, category, pageParam);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.data?.next || undefined;
    },
    initialPageParam: '',
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
    queryFn: ({ pageParam = '' }) => {
      // pageParam이 비어 있으면 기본 엔드포인트 호출
      return GetSearchList(isDarkMode, keyword, pageParam);
    },
    getNextPageParam: (lastPage) => {
      // lastPage.data?.next 필드를 사용하여 다음 요청 URL 반환
      return lastPage.data?.next || undefined;
    },
    initialPageParam: '', // 첫 요청 시 기본값 설정
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
