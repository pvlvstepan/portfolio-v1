import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import React from 'react';

const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
    );
};

export default ColorModeToggle;
