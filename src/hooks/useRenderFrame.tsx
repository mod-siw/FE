import { useTheme } from 'styled-components';
import { FrameTree, FrameSnow, FrameHat, Frame2024, FrameMan, FrameStar } from 'assets';

export const useRenderFrame = () => {
  const theme = useTheme();

  const colorMap: Record<number, string> = {
    1: theme.colors.red01,
    2: theme.colors.orange01,
    3: theme.colors.yellow01,
    4: theme.colors.green01,
    5: theme.colors.mint01,
    6: theme.colors.cyon01,
    7: theme.colors.sky01,
    8: theme.colors.aqua01,
    9: theme.colors.violet01,
    10: theme.colors.purple01,
    11: theme.colors.pink01,
    12: theme.colors.magenta01,
    13: theme.colors.red02,
    14: theme.colors.orange02,
    15: theme.colors.yellow02,
    16: theme.colors.green02,
    17: theme.colors.mint02,
    18: theme.colors.cyon02,
    19: theme.colors.sky02,
    20: theme.colors.aqua02,
    21: theme.colors.violet02,
    22: theme.colors.purple02,
    23: theme.colors.pink02,
    24: theme.colors.magenta02,
  };

  const renderFrame = (frame: string, color: number) => {
    const fillColor = colorMap[color];

    switch (frame) {
      case 'TREE':
        return <FrameTree fill={fillColor} />;
      case 'SNOW':
        return <FrameSnow fill={fillColor} />;
      case 'HAT':
        return <FrameHat fill={fillColor} />;
      case 'YEAR':
        return <Frame2024 fill={fillColor} />;
      case 'MAN':
        return <FrameMan fill={fillColor} />;
      case 'STAR':
        return <FrameStar fill={fillColor} />;
      default:
        return null;
    }
  };

  return { colorMap, renderFrame };
};
