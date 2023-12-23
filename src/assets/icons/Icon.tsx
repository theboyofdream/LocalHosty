import { ColorValue } from 'react-native';
import { useTheme } from 'theme';
import ArrowLeftLineSvg from './arrow-left-line.svg';
import FolderAddSvg from './folder-add-fill.svg';
import PauseFillSvg from './pause-fill.svg';
import PlayFillSvg from './play-fill.svg';
import Settings4FillSvg from './settings4-fill.svg';
import ShareForwardFillSvg from './share-forward-fill.svg';

const iconSource = {
  'arrow-left': ArrowLeftLineSvg,
  'folder-plus': FolderAddSvg,
  'play': PlayFillSvg,
  'pause': PauseFillSvg,
  'setting': Settings4FillSvg,
  'share': ShareForwardFillSvg
}

export type IconSource = keyof typeof iconSource;
type IconProps = {
  source: IconSource;
  size?: number;
  color?: string | ColorValue
}

export function Icon({ source, ...props }: IconProps) {
  const
    { fontSize, colors } = useTheme(),
    IconComponent = iconSource[source],
    size = props.size ?? fontSize.lg,
    color = props.color ?? colors.text

  return (
    <IconComponent
      width={size}
      height={size}
      color={color}
    />
  )
}
