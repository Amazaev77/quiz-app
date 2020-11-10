import styled from 'styled-components';

export const StyledPileBox = styled.div`
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: -1;
    width: 100%;
    height: 100%;
`;

export const Pile = styled.div`
    position: absolute;
    box-shadow: 0 0 3px 0 #d2d2d2;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .3s;
`;

export const PileSecond = styled(Pile)`
    transform: rotate(-0.8deg);
`;

export const PileThird = styled(Pile)`
    transform: rotate(0.5deg);
`;