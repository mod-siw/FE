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

export const colorList = [
  { id: 1, color: '#FF2C2C' },
  { id: 2, color: '#FF8E2C' },
  { id: 3, color: '#F9EE19' },
  { id: 4, color: '#29FF22' },
  { id: 5, color: '#00FF8C' },
  { id: 6, color: '#24FFE9' },
  { id: 7, color: '#27BBFF' },
  { id: 8, color: '#3859FF' },
  { id: 9, color: '#2605FD' },
  { id: 10, color: '#5929F7' },
  { id: 11, color: '#FB24FF' },
  { id: 12, color: '#FF2D7A' },
  { id: 13, color: '#FF9292' },
  { id: 14, color: '#FFB379' },
  { id: 15, color: '#FFF875' },
  { id: 16, color: '#96FF92' },
  { id: 17, color: '#8EFFCE' },
  { id: 18, color: '#C9FFFA' },
  { id: 19, color: '#7ED6FF' },
  { id: 20, color: '#788EFF' },
  { id: 21, color: '#8F7EFF' },
  { id: 22, color: '#B098FF' },
  { id: 23, color: '#FEBBFF' },
  { id: 24, color: '#FFA0C3' },
];

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
