import styles from "@styles/modules/contentWrapper.module.scss";

const ContentWrapper = ({ children }) => (
  <div className={styles.contentWrapper}>{children}</div>
);

export default ContentWrapper;
