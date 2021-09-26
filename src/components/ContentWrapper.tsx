import React, { forwardRef } from "react";
import styles from "@styles/modules/contentWrapper.module.scss";
import clsx from "clsx";

interface ContentWrapperProps {
  size?: "default" | "wide";
}

const ContentWrapper = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ContentWrapperProps>
>(({ children, size }, ref) => (
  <div
    ref={ref}
    className={clsx(styles.contentWrapper, {
      [styles.wide]: size === "wide",
    })}
  >
    {children}
  </div>
));

export default ContentWrapper;
