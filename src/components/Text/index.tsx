import clsx from "clsx";
import styles from "./index.module.scss";

export type TextVariant =
  | "h1"
  | "h2"
  | "body"
  | "subtitle"
  | "subtitle1"
  | "button";

const Text = ({
  variant = "body",
  children,
  className,
}: {
  variant?: TextVariant;
  children?: string;
  className?: String;
}) => {
  return <div className={clsx(className, styles[variant])}>{children}</div>;
};

export default Text;
