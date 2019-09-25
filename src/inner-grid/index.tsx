import React from 'react';
import Cell from '../cell';
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
            {Array.from({ length: 9 }).map((_, index) => (
                <Cell key={index} preset={8} />
            ))}
        </InnerGridContainer>
    );
};

export default InnerGrid;
