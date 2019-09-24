import React from 'react';
import NumberHolder from '../number-holder';
import styled from 'styled-components';

const InnerGridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
    justify-content: start;
    border: 1px solid black;
`;

const InnerGrid = () => {
    return (
        <InnerGridContainer>
            {Array.from({ length: 9 }).map(() => (
                <NumberHolder />
            ))}
        </InnerGridContainer>
    );
};

export default InnerGrid;
