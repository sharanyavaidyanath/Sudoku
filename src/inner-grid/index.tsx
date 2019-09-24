import React from 'react';
import NumberHolder from '../number-holder';
import styled from 'styled-components';

const InnerGridContainer = styled.div`
    display: grid;
`;

const InnerGrid = () => {
    return (
        <InnerGridContainer>
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
            <NumberHolder />
        </InnerGridContainer>
    );
};

export default InnerGrid;
