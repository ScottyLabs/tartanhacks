import BaseIcon from '../BaseIcon';
import styles from '../styles/index.module.scss';
import { SvgIconProps } from '../SvgIcon';

export default function TartanHacksIcon({
	className,
	debugBbox,
}: SvgIconProps): JSX.Element {
	return (
		<BaseIcon className={className} debugBbox={debugBbox}>
			<svg
				viewBox="0 0 60 52"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.centeredIcon}
			>
				<path
					d="m4.17 21.181 10.242 2.18 3.272-15.368L4.15 5.111c-3.952 6.55-1.946 12.757.02 16.07Z"
					fill="#07054C"
				/>
				<mask
					id="tartanhacks_a"
					style={{
						maskType: 'alpha',
					}}
					maskUnits="userSpaceOnUse"
					x={28}
					y={0}
					width={13}
					height={13}
				>
					<path
						transform="scale(1 -1) rotate(47.978 29.85 30.73)"
						fill="#000"
						d="M0 0h11.057v5.679H0z"
					/>
				</mask>
				<g mask="url(#tartanhacks_a)">
					<ellipse
						rx={5.439}
						ry={5.587}
						transform="scale(1 -1) rotate(47.978 20.688 34.094)"
						fill="#07054C"
					/>
				</g>
				<mask
					id="tartanhacks_b"
					style={{
						maskType: 'alpha',
					}}
					maskUnits="userSpaceOnUse"
					x={49}
					y={20}
					width={11}
					height={14}
				>
					<path
						transform="scale(-1 1) rotate(-60 -3.705 67.143)"
						fill="#000"
						d="M0 0h11.057v5.679H0z"
					/>
				</mask>
				<g mask="url(#tartanhacks_b)">
					<ellipse
						rx={5.439}
						ry={5.587}
						transform="scale(-1 1) rotate(-60 -1.537 59.508)"
						fill="#07054C"
					/>
				</g>
				<path
					d="M54.794 37.935c0-5.523-4.476-10-9.999-10H31.311V46.2h23.483v-8.265ZM18.356 8.125l15.266 3.25-2.384 11.196-15.266-3.251 2.384-11.195Z"
					fill="#07054C"
				/>
				<path
					d="m15.828 20 15.266 3.25-.759 3.563-15.266-3.25.759-3.563Z"
					fill="#DB4D20"
				/>
				<path
					d="m15.042 50.498 15.502-2.302V27.747l-15.502-3.035v25.786ZM31.311 46.815v1.375l23.483 3.076v-4.451H31.311Z"
					fill="#07054C"
				/>
			</svg>
		</BaseIcon>
	);
}
