import React from "react";
import { SkeletonBox } from "./style";
import Skeleton from "react-loading-skeleton";

const PreloaderQuestion = () => {
  return (
    <SkeletonBox>
      <Skeleton count={2} height={28} />
    </SkeletonBox>
  );
};

export default PreloaderQuestion;
