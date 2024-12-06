import { createContext, useContext, useState, ReactNode } from 'react';

type ItemContextType = {
  itemId: number;
  setItemId: (id: number) => void;
  isItemClicked: boolean;
  setIsItemClicked: (clicked: boolean) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [itemId, setItemId] = useState(0);
  const [isItemClicked, setIsItemClicked] = useState(false);

  return (
    <ItemContext.Provider value={{ itemId, setItemId, isItemClicked, setIsItemClicked }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItemContext must be used within an ItemProvider');
  }
  return context;
};
