import { OutlinedHTile, OutlinedTTile } from '../BackgroundTile';
import styles from './index.module.scss';

export interface TiledBackgroundProps {
  className?: string;
}

export default function TiledBackground({
  className,
}: TiledBackgroundProps): JSX.Element {
  const width = 22;
  const height = 30;
  const tiles = [];

  let useTTile = true;
  for (let row = 0; row < height; row++) {
    useTTile = !useTTile;
    for (let col = 0; col < width; col++) {
      if (useTTile) {
        tiles.push(
          <OutlinedTTile className="w-14 md:w-16" key={`t-r${row}-c${col}`} />
        );
      } else {
        tiles.push(
          <OutlinedHTile className="w-14 md:w-16" key={`h-r${row}-c${col}`} />
        );
      }
      useTTile = !useTTile;
    }
  }

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.tileContainer}>{tiles}</div>
      <div className={styles.fadeCover}></div>
    </div>
  );
}
