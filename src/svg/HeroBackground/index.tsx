import clsx from 'clsx';
import styles from './index.module.scss';

interface HeroBackgroundProps {
	className?: string;
}

function HeroMountainFront({ className }: HeroBackgroundProps): JSX.Element {
	return (
		<svg
			viewBox="0 0 849 420"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M0 424V.5s41.965 29.443 67.5 53C74.81 60.245 86.168 61.615 93 67c5.742 4.526 7.562 7.842 10.86 11.297 4.517 3.81 10.401 7.918 17.575 11.174l.065.029c13.377 8.681 18.126 10.387 30.5 18 3.36 2.067 15.5-1.11 27 3 8 2.859 41.129 8 46 8 4.871 0 9.27 3.702 14 5.5 5.052 1.92 6.335 2.434 10.545 4.118l.955.382c5 2 6.5 9.5 13.5 12.062 7.927 7.408 13 10.938 26 16.938 3.669 5.334 11.13 26.648 13.5 30.062 4.163 5.997 26.38 36.49 30.5 42.438l28.5 26 25.5 10s61 8.5 72.5 13 45.5 26 45.5 26 23.928 4.11 34.5 6c13.364 2.39 32.5 14.58 32.5 14.58l43 7.92 87.5 49.5 145 41H0Z"
				fill="url(#hero_mountain_front_a)"
			/>
			<defs>
				<linearGradient
					id="hero_mountain_front_a"
					x1={159.5}
					y1={592}
					x2={510.5}
					y2={212}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.369} stopColor="#DD562B" />
					<stop
						offset={0.993}
						stopColor="#DE572C"
						stopOpacity={0.42}
					/>
				</linearGradient>
			</defs>
		</svg>
	);
}

function HeroMountainBack({ className }: HeroBackgroundProps): JSX.Element {
	return (
		<svg
			viewBox="0 0 970 462"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M970 429.243v32.756H0V.615c7.729 8.53 10.827 14.634 14.079 21.042 2.408 4.745 4.9 9.657 9.421 15.842C34.542 52.61 62.123 73.872 66 76c7.724 4.238 50.611 21.151 62.454 24.919 11.843 3.767 28.32 6.592 47.886 6.592 12.176 0 22.956 8.57 31.1 15.045 4.943 3.93 8.914 7.087 11.637 7.087 2.118 0 5.4 1.508 8.708 3.027 3.277 1.505 6.579 3.021 8.799 3.095.829.027 2.421-.14 4.43-.351 5.475-.575 14.05-1.475 18.74.351 3.952 1.538 6.364 3 8.469 4.275 2.194 1.33 4.055 2.457 6.978 3.259 3.033.832 14.944 10.533 26.145 19.657 7.815 6.365 15.285 12.449 19.154 15.044 3.056 2.05 7.082 4.192 11.244 6.406 8.66 4.607 17.912 9.529 20.256 14.594 3.471 7.5 14.28 20.5 42.084 32.955 12.917 5.787 19.137 13.454 24.43 19.979 4.021 4.956 7.507 9.253 12.986 11.566 5.128 2.165 6.312 3.59 7.191 4.649.837 1.006 1.399 1.683 4.809 2.351 2.263.444 14.663 5.199 30.916 11.431 34.023 13.047 84.933 32.569 95.084 32.569 7.629 0 10.085 2.07 12.498 4.104 2.331 1.965 4.623 3.896 11.502 3.896 9.987 0 12.179.386 19.084 1.603 2.774.489 6.309 1.112 11.416 1.897 8.137 1.252 16.667 7.598 27.427 15.603 6.43 4.784 13.657 10.161 22.073 15.397 9.148 7.512 13.469 8.442 18.558 9.539 3.208.691 6.721 1.448 11.942 3.961 12.65 2.496 26.28 9.588 40.324 16.896 14.655 7.626 29.761 15.486 44.676 18.604 74.473 15.569 150.097 21.389 181 23.244Z"
				fill="url(#hero_mountain_back_a)"
			/>
			<defs>
				<linearGradient
					id="hero_mountain_back_a"
					x1={315.5}
					y1={612.5}
					x2={304}
					y2={-88.5}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#DD562B" />
					<stop offset={1} stopColor="#FDA135" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default function HeroBackground({
	className,
}: HeroBackgroundProps): JSX.Element {
	return (
		<div className={clsx(styles.backgroundContainer, className)}>
			<HeroMountainBack
				className={clsx(styles.mountain, styles.mountainBack)}
			/>
			<HeroMountainFront
				className={clsx(styles.mountain, styles.mountainFront)}
			/>
		</div>
	);
}
