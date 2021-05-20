import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const Logo = () => {

    const color = useColorModeValue('var(--sp-colors-light-secondary)', 'var(--sp-colors-dark-secondary)');
    const bg = useColorModeValue('var(--sp-colors-light-bgLighter)', 'var(--sp-colors-dark-bgLighter)');

    return (
        <svg width="48" height="48" viewBox="0 0 1148 1148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M574 0L1071.1 287V861L574 1148L76.9014 861V287L574 0Z" fill={bg} />
            <path d="M545.267 599.322V687.949L212.737 495.924V584.551L545.267 776.576V1072L136 835.661V747.034L468.529 939.059V850.432L136 658.407V362.983L545.267 599.322Z" fill={color} />
            <path d="M603.733 599.322V687.949L936.262 495.924V584.551L603.733 776.576V1072L706.05 1012.92V835.661L1013 658.407V362.983L603.733 599.322Z" fill={color} />
            <path d="M165.233 312.339L267.55 253.254L472.183 371.424L574.5 430.508L676.817 371.424L881.45 253.254L983.767 312.339L574.5 548.678L165.233 312.339Z" fill={color} />
            <path d="M369.867 194.169L574.5 312.339L779.133 194.169L574.5 76L369.867 194.169Z" fill={color} />
        </svg>
    );
};

export default Logo;
