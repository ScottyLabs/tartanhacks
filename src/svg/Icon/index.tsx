import wrapElement from "../../utils/wrapElement";
import TartanHacksIcon from "../TartanHacksIcon";

const IconMapping = {
  tartanhacks: <TartanHacksIcon />,
};

export type IconName = keyof typeof IconMapping;

interface Props {
  className?: string;
  name: IconName;
}

export default function Icon({ className, name }: Props) {
  return wrapElement(IconMapping[name])({ className });
}
