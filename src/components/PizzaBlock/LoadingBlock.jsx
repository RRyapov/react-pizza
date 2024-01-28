import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <div>
      <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="139" cy="121" r="119" />
        <rect x="1" y="251" rx="6" ry="6" width="280" height="26" />
        <rect x="0" y="296" rx="6" ry="6" width="280" height="84" />
        <rect x="1" y="413" rx="6" ry="6" width="91" height="31" />
        <rect x="137" y="395" rx="20" ry="20" width="140" height="52" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
