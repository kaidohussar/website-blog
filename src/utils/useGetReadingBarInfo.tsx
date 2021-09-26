import React, { useCallback, useEffect, useState } from "react";
import { useThrottle } from "@src/hooks/useThrottle";

type UseGetReadingBarInfoReturn = {
  percentage: number;
  isHidden: boolean;
};

export const useGetReadingBarInfo = (
  elementToTrack: HTMLDivElement
): UseGetReadingBarInfoReturn => {
  const frame = document.getElementById("main-frame");
  const [isHidden, setIsHidden] = useState(true);
  const [percentage, setPercentage] = useState(0);

  const [setHiddenThrottled] = useThrottle((isHidden) => {
    setIsHidden(isHidden);
  }, 100);

  const [setPercentageThrottled] = useThrottle((percentage) => {
    setPercentage(percentage > 0 ? percentage : 0);
  }, 100);

  const handleScroll = useCallback(() => {
    if (elementToTrack) {
      const elememPos = elementToTrack.getBoundingClientRect();
      const elementYPos = elememPos.y * -1;
      const offset = elementToTrack.offsetTop;
      const isHidden = elementYPos < 0;

      const contentHeight = frame.scrollHeight;
      const viewPortHeight = window.innerHeight;
      const percentage =
        (elementYPos * 100) / (contentHeight - viewPortHeight - offset);

      setHiddenThrottled(isHidden);

      if (elememPos.bottom - viewPortHeight - 50 < 0) {
        setPercentage(100);
      } else {
        setPercentageThrottled(percentage);
      }

      if (elememPos.top > 0) {
        setIsHidden(true);
      }
    }
  }, [elementToTrack, frame, setHiddenThrottled, setPercentageThrottled]);

  useEffect(() => {
    if (frame) {
      frame.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (frame) {
        frame.removeEventListener("scroll", handleScroll);
      }
    };
  }, [elementToTrack, frame, handleScroll]);

  return {
    percentage,
    isHidden,
  };
};
