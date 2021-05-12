import { FormControl } from '@chakra-ui/form-control';
import { Switch } from '@chakra-ui/switch';
import { ImSun } from 'react-icons/im';
import React from 'react';
import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';

const ColorModeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <FormControl display='flex' flexDir='row'>
                <Switch
                    name='Color Mode Toggle'
                    mr={3}
                    onChange={toggleColorMode}
                    isChecked={colorMode === 'light' ? true : false}
                    className={colorMode === 'light' ? 'checked' : ''} />
                <ImSun fontSize='20px' />
            </FormControl>
        </Box>
    );
};

export default ColorModeToggle;
