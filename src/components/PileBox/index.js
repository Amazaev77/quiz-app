import React, { memo } from 'react'
import { StyledPileBox, Pile, PileSecond, PileThird } from "./style";

const PileBox = () => {
  return (
    <StyledPileBox>
      <Pile />
      <PileSecond />
      <PileThird />
    </StyledPileBox>
  );
};

export default memo(PileBox);
