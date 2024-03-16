import styles from './index.module.scss';

interface Props {
	children: JSX.Element;
	className?: string;
	/**
	 * Show the bounding box of the wrapper in black, and the bounding box of the
	 * inner svg in yellow.
	 */
	debugBbox?: boolean;
	/**
	 * The height as a percentage of the width in decimal 0 is 0% and 1 is 100%.
	 * For example, a square would have this at 1.
	 */
	verticalScale?: number;
}

/**
 * Generic Icon wrapper which can be used to encapsulate arbitrary images in a
 * fixed-size container.
 */
export default function BaseIcon({
	children,
	className,
	debugBbox,
	verticalScale = 1,
}: Props): JSX.Element {
	const verticalSize = `${verticalScale * 100}%`;
	return (
		<div className={className}>
			<div
				className={
					debugBbox ? styles.svgIconDebug : styles.svgIconContainer
				}
				style={{ paddingTop: verticalSize }}
			>
				{children}
			</div>
		</div>
	);
}
