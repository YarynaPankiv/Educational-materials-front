import React, { useEffect } from "react";

export default (callback) => {
  const containerRef = React.useRef(null);

  useEffect(() => {
    const listener = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        callback();
      }

      return null;
    };
    document.body.addEventListener("mousedown", listener);
    document.body.addEventListener("touchend", listener);

    return () => {
      document.body.addEventListener("mousedown", listener);
      document.body.addEventListener("touchend", listener);
    };
  }, [callback]);

  return containerRef;
};
