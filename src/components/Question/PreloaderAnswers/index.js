import React from "react";
import Skeleton from "react-loading-skeleton";
import { StyledPreloaderAnswers } from "./style";

const PreloaderAnswers = () => {
  return (
    <StyledPreloaderAnswers>
      <Skeleton count={4} width={400} height={25} />
    </StyledPreloaderAnswers>
  );
};

export default PreloaderAnswers;
