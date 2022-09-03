import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./index.module.scss";

interface DotMatrixProps {
  width: number;
  height: number;
  gap?: string;
  className?: string;
}

export default function DotMatrix({
  width,
  height,
  gap = "1.5em",
  className,
}: DotMatrixProps) {
  const matrix = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const circle = (
        <FontAwesomeIcon
          icon={faCircle}
          className={clsx(styles.circle, styles[`circle--${j}`])}
        />
      );
      row.push(circle);
    }
    matrix.push(row);
  }

  return (
    <div
      className={clsx(styles.dotMatrixContainer, className)}
      style={{
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gap,
      }}
    >
      {matrix}
    </div>
  );
}
