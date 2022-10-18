import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./index.module.scss";

export type TextVariant =
  | "hero"
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
  children?: ReactNode;
  className?: String;
}) => {
  return <div className={clsx(className, styles[variant])}>{children}</div>;
};

export default Text;
