/* eslint-disable */
import clsx from 'clsx';
import { OutlinedHTile, OutlinedTTile } from '../BackgroundTile';
import styles from './index.module.scss';

export interface TiledBackgroundProps {
	className?: string;
}

const WIDTH = 24;
const HEIGHT = 30;
const ANIMATED_COUNT = 50;
const MAX_DELAY = 30;

const animateIndexes = new Set();
for (let i = 0; i < ANIMATED_COUNT; i++) {
	const r = Math.round(Math.random() * (WIDTH * HEIGHT));
	animateIndexes.add(r);
}

export default function TiledBackground({
	className,
}: TiledBackgroundProps): JSX.Element {
	const tiles = [];

	let useTTile = true;
	for (let row = 0; row < HEIGHT; row++) {
		useTTile = !useTTile;
		for (let col = 0; col < WIDTH; col++) {
			const idx = row * WIDTH + col;

			// Assign random delay and duration to animation
			const delay = Math.round(Math.random() * MAX_DELAY) + 1;
			const animateClass = styles[`animate--${delay}`];

			if (useTTile) {
				tiles.push(
					<OutlinedTTile
						className={clsx(
							'w-14 md:w-16',
							animateIndexes.has(idx)
								? animateClass
								: styles.static,
						)}
						key={`t-r${row}-c${col}`}
					/>,
				);
			} else {
				tiles.push(
					<OutlinedHTile
						className={clsx(
							'w-14 md:w-16',
							animateIndexes.has(idx)
								? animateClass
								: styles.static,
						)}
						key={`h-r${row}-c${col}`}
					/>,
				);
			}
			useTTile = !useTTile;
		}
	}

	return (
		<div className={styles.backgroundContainer}>
			<div className={styles.tileContainer}>{tiles}</div>
			<div className={styles.fadeCover} />
		</div>
	);
}

/* eslint-enable */
