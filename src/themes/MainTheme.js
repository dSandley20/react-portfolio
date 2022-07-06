import { createTheme }  from '@mui/material/styles';

const mainTheme = createTheme({
    palette : {
        type: 'light',
        primary : {
            main : "#ff0000"
        },
        accent: {
            main: "#00aab3"
        },
        highlight: {
            main: "#FFFFFFF"
        }
    }
})

export default mainTheme
   

