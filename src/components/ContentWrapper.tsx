import React from "react";
import styles from "@styles/modules/contentWrapper.module.scss";
import clsx from "clsx";

interface ContentWrapperProps {
  size?: "default" | "wide";
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, size }) => (
  <div
    className={clsx(styles.contentWrapper, {
      [styles.wide]: size === "wide",
    })}
  >
    {children}
  </div>
);

export default ContentWrapper;
