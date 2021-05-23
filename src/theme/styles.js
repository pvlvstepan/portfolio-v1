import { mode } from '@chakra-ui/theme-tools';

const styles = {

    global: (props) => (
        {
            'body, html': {
                position: 'relative',
                overflowX: 'hidden',
                minW: '320px',
                lineHeight: 2,
                bg: { xs: mode('light.bg', 'dark.bg')(props), lg: mode('light.bgGradient', 'dark.bgGradient')(props) },
                fontSize: '16px',
                color: mode('light.secondary', 'dark.secondary')(props)
            },
            '.no-scroll': {
                overflow: 'hidden',
            },
            'section:not(.chakra-popover__content)': {
                pt: 0,
                _notFirst: { mt: { base: '0', xxl: '60px' }, pt: { xs: '60px', xxl: '85px' }, },
                _last: { pb: { xs: '60px', xxl: '85px' } },
            },
            '.chakra-switch.checked .chakra-switch__track': {
                bg: mode('light.accent', 'dark.accent')(props)
            },
            '::-webkit-scrollbar': {
                width: { xs: '6px', lg: '8px' },
                height: { xs: '6px', lg: '8px' }
            },
            '::-webkit-scrollbar-thumb': {
                bg: 'rgba(0, 0, 0, 0.4)',
                transition: '.25s ease-in-out',
                borderRadius: '10px'
            },
            '::-webkit-scrollbar-thumb:hover': {
                bg: 'rgba(0, 0, 0, 0.6)'
            },
            '::-webkit-scrollbar-track': {
                bg: { xs: mode('light.bg', 'dark.bg')(props), lg: mode('light.bgLighter', 'dark.bgLighter')(props) },
                borderRadius: '0'
            },
            '.chakra-button__icon': {
                fontSize: '22px'
            }
        }
    )

};

export default styles;