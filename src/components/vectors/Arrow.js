import React from "react";

const Arrow = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="14"
      viewBox="0 0 26 14"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3362 13.2888C12.4233 13.3761 12.5267 13.4454 12.6406 13.4926C12.7545 13.5399 12.8766 13.5642 12.9999 13.5642C13.1232 13.5642 13.2453 13.5399 13.3592 13.4926C13.4731 13.4454 13.5766 13.3761 13.6637 13.2888L24.9137 2.03878C25.0897 1.86275 25.1886 1.62399 25.1886 1.37503C25.1886 1.12608 25.0897 0.887321 24.9137 0.711284C24.7376 0.535246 24.4989 0.43635 24.2499 0.43635C24.001 0.43635 23.7622 0.535246 23.5862 0.711284L12.9999 11.2994L2.41368 0.711284C2.23765 0.535246 1.99889 0.43635 1.74993 0.43635C1.50098 0.43635 1.26222 0.535246 1.08618 0.711284C0.910146 0.887321 0.811249 1.12608 0.811249 1.37503C0.811249 1.62399 0.910146 1.86275 1.08618 2.03878L12.3362 13.2888Z"
        fill="black"
      />
    </svg>
  );
};

export default Arrow;
