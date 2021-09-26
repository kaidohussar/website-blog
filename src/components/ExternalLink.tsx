import React from "react";
import styles from "@styles/modules/externalLink.module.scss";

type ExternalLinkProps = {
  href: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, href }) => {
  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
