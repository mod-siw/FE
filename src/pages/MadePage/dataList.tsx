// colorAndFrameData.ts
import {
  SymbolHat1,
  SymbolSnow1,
  SymbolTree1,
  SymbolYear1,
  SymbolMan1,
  SymbolStar1,
  SymbolHat2,
  SymbolSnow2,
  SymbolTree2,
  SymbolYear2,
  SymbolMan2,
  SymbolStar2,
} from 'assets';

export const thumbFrames = [
  {
    name: 'SNOW',
    selected: <SymbolSnow1 width={75} />,
    unselected: <SymbolSnow2 width={75} />,
  },
  {
    name: 'TREE',
    selected: <SymbolTree1 width={75} />,
    unselected: <SymbolTree2 width={75} />,
  },
  {
    name: 'HAT',
    selected: <SymbolHat1 width={75} />,
    unselected: <SymbolHat2 width={75} />,
  },
  {
    name: 'YEAR',
    selected: <SymbolYear1 width={75} />,
    unselected: <SymbolYear2 width={75} />,
  },
  {
    name: 'MAN',
    selected: <SymbolMan1 width={75} />,
    unselected: <SymbolMan2 width={75} />,
  },
  {
    name: 'STAR',
    selected: <SymbolStar1 width={75} />,
    unselected: <SymbolStar2 width={75} />,
  },
];

export const madeBoxFrames = [
  {
    name: 'SNOW',
    component: (color: string) => <SymbolSnow1 color={color} width={361} />,
  },
  {
    name: 'TREE',
    component: (color: string) => <SymbolTree1 color={color} width={361} />,
  },
  { name: 'HAT', component: (color: string) => <SymbolHat1 color={color} width={361} /> },
  {
    name: 'YEAR',
    component: (color: string) => <SymbolYear1 color={color} width={361} />,
  },
  { name: 'MAN', component: (color: string) => <SymbolMan1 color={color} width={361} /> },
  {
    name: 'STAR',
    component: (color: string) => <SymbolStar1 color={color} width={361} />,
  },
];
