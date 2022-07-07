import { Grid } from '@mui/material';
import { createTheme, darken, lighten } from '@mui/material/styles';

// colors are based off of the Nord VSCode theme, https://www.nordtheme.com/docs/colors-and-palettes
// nord0-3 , used for background or text
// nord4-6 , used for ui elements or text
// nord7-10 , used for text and code syntax
// nord11-15, used for highlights

const mainTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'socialBtn' },
                    style: {
                        backgroundColor: '#88C0D0',
                        textTransform: 'none',
                        width: '100%',
                        height: '100%',
                        color: '#ECEFF4',
                        ':hover': {
                            backgroundColor: lighten( '#88C0D0',.1)
                        }
                    }
                }
            ]
        
        },
        MuiGrid: {
            variants: [
                {
                    props: { variant: 'socialItem' },
                    style: {height: '100%'}
                }
            ]
        }
    },
    palette : {
        type: 'dark',
        nord0: {
            main: '#2E3440'
        },
        nord1: {
            main: '#3B4252'
        },
        nord2: {
            main: '#434C5E'
        },
        nord3: {
            main: '#4C566A'
        },
        nord4: {
            main: '#D8DEE9'
        },
        nord5: {
            main: '#E5E9F0'
        },
        nord6: {
            main: '#ECEFF4'
        },
        nord7: {
            main: '#8FBCBB'
        },
        nord8: {
            main: '#88C0D0'
        },
        nord9: {
            main: '#81A1C1'
        },
        nord10: {
            main: '#5E81AC'
        },
        nord11: {
            main: '#BF616A'
        },
        nord12: {
            main: '#D08770'
        },
        nord13: {
            main: '#EBCB8B'
        },
        nord14: {
            main: '#A3BE8C'
        },
        nord15: {
            main: '#B48EAD'
        },
        
    }
})

export default mainTheme
   

