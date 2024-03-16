/* eslint-disable */
export interface BackgroundTileProps {
	className?: string;
	letter: 'T' | 'H';
	variant: 'solid' | 'outlined';
}

interface TileProps {
	className?: string;
}

function SolidTTile({ className }: TileProps): JSX.Element {
	return (
		<svg
			viewBox="0 0 519 506"
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M.595 327.55v178.289H518.16C260.81 501.037 53.101 382.978.595 327.55Z"
				fill="#6E9AFD"
			/>
			<path
				d="M518.161.93v125.335C412.09 87.063 319.42 117.851 262.225 177.78c70.04 76.9 83.99 199.421-1.733 284.966-86.24-86.402-70.71-209.06 1.733-284.966-57.471-63.101-152.708-95.485-261.63-51.515V.931H518.16Z"
				fill="#4200FF"
			/>
		</svg>
	);
}

export function OutlinedTTile({ className }: TileProps): JSX.Element {
	return (
		<svg
			viewBox="0 0 525 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3.595 330.518v178.29H521.16C263.81 504.006 56.101 385.946 3.595 330.518Z"
				stroke="#4200FF"
				strokeWidth={5.926}
				fill="#6E9AFD"
			/>
			<path
				d="M521.161 129.233V3.9H3.595v125.333C245.258 31.68 419.556 309.976 263.492 465.714 109.165 311.098 280.739 40.378 521.161 129.233Z"
				stroke="#4200FF"
				strokeWidth={5.926}
				fill="#4200FF"
			/>
		</svg>
	);
}

export function OutlinedHTile({ className }: TileProps): JSX.Element {
	return (
		<svg
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M297.846 3.93H2.986V508.84h73.445c0-300.094 150.359-464.55 221.415-504.908ZM213.394 508.839h294.861l-.001-504.908H434.81c0 300.094-150.359 464.549-221.416 504.908Z"
				stroke="#4200FF"
				fill="#4200FF"
				strokeWidth={5.926}
			/>
			<path
				d="M252.553 198.82c80.302 0 140.573 58.649 140.573 58.649s-56.301 56.482-140.573 56.482-136.062-56.482-136.062-56.482 55.76-58.649 136.062-58.649Z"
				stroke="#4200FF"
				fill="#4200FF"
				strokeWidth={5.926}
			/>
		</svg>
	);
}
/* eslint-enable */
