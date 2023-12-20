import { ColorValue } from 'react-native';
import ArrowLeftLineSvg from './arrow-left-line.svg';
import FolderAddSvg from './folder-add-fill.svg';
import PauseFillSvg from './pause-fill.svg';
import PlayFillSvg from './play-fill.svg';
import Settings4FillSvg from './settings4-fill.svg';

const iconSource = {
  'arrow-left': ArrowLeftLineSvg,
  'folder-plus': FolderAddSvg,
  'play': PlayFillSvg,
  'pause': PauseFillSvg,
  'setting': Settings4FillSvg,
}

type IconProps = {
  source: keyof typeof iconSource;
  size?: number;
  color?: string | ColorValue
}

export function Icon({
  source,
  size = 28,
  color = 'black'
}: IconProps) {

  const IconComponent = iconSource[source]
  return (
    <IconComponent width={size} height={size} color={color} />
  )
}
