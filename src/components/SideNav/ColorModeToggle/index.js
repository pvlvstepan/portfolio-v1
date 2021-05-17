import { IoSunny, IoSunnyOutline } from 'react-icons/io5';
import { useColorMode } from '@chakra-ui/color-mode';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Switch } from '@chakra-ui/switch';
import React from 'react';

const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <FormControl display="flex" alignItems="center">
            <Switch id="colorMode" onChange={toggleColorMode} size='lg' isChecked={colorMode === 'light' ? true : false} />
            <FormLabel htmlFor="colorMode" mb="0" ml={3} fontSize='28px'>
                {colorMode === 'light' ? <IoSunny /> : <IoSunnyOutline />}
            </FormLabel>
        </FormControl>
    );
};

export default ColorModeToggle;
