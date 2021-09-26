import { Text } from "kaidohussar-ui";
import styles from "@styles/modules/displayReadPercentage.module.scss";

type Props = {
  percentage: number;
  isHidden: boolean;
};
const DisplayReadPercentage = ({ percentage, isHidden }: Props) => {
  if (isHidden) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Text type="span" size="md">{`${Math.round(percentage)}%`}</Text>
    </div>
  );
};

export default DisplayReadPercentage;
