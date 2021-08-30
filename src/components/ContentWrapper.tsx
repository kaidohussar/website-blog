import styles from "../styles/modules/components/contentWrapper.module.scss";

const ContentWrapper = ({ children }) => (
  <div className={styles.contentWrapper}>{children}</div>
);

export default ContentWrapper;
