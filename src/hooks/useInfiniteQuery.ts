import { useInfiniteQuery } from '@tanstack/react-query';
import { GetCategoryList } from 'api/post';
import { GetSearchList } from 'api/search';
import { useMemo } from 'react';

export const useCategoryInfiniteQuery = (category: string) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getCategoryList', category],
    queryFn: ({ pageParam = 1 }) => {
      return GetCategoryList(category, pageParam);
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_page ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  // const items = useMemo(() => {
  //   const allItems = data?.pages ? data.pages.flatMap((page) => page.data) : [];
  //   return allItems;
  // }, [data]);

  const items = useMemo(() => {
    if (data?.pages) {
      const allItems = data.pages.flatMap((page) => {
        console.log('page.data', page.data);
        return page.data;
      });
      return allItems;
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
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getSearchList', keyword],
    queryFn: ({ pageParam = 1 }) => {
      return GetSearchList(keyword, pageParam);
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_page ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  const items = useMemo(() => {
    if (data?.pages) {
      const allItems = data.pages.flatMap((page) => {
        console.log('page.data', page.data);
        return page.data;
      });
      return allItems;
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
