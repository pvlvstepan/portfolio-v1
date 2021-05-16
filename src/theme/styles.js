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
            'section': {
                _notFirst: { mt: { base: '0', xxl: '60px' } },
                pt: { xs: '60px', xxl: '85px' },
                _last: { pb: { xs: '60px', xxl: '85px' } },
            },
            '.chakra-switch.checked .chakra-switch__track': {
                bg: 'accent'
            },
        }
    )

};

export default styles;