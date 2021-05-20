import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const Logo = () => {

    const color = useColorModeValue('var(--sp-colors-light-secondary)', 'var(--sp-colors-dark-secondary)');

    return (
        <svg width="44" height="50" viewBox="0 0 877 996" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M409.267 523.322V611.949L76.7375 419.924V508.551L409.267 700.576V996L0 759.661V671.034L332.529 863.059V774.432L0 582.407V286.983L409.267 523.322Z" fill={color} />
            <path d="M467.733 523.322V611.949L800.262 419.924V508.551L467.733 700.576V996L570.05 936.915V759.661L877 582.407V286.983L467.733 523.322Z" fill={color} />
            <path d="M29.2333 236.339L131.55 177.254L336.183 295.424L438.5 354.508L540.817 295.424L745.45 177.254L847.767 236.339L438.5 472.678L29.2333 236.339Z" fill={color} />
            <path d="M233.867 118.169L438.5 236.339L643.133 118.169L438.5 0L233.867 118.169Z" fill={color} />
        </svg>
    );
};

export default Logo;
