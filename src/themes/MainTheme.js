import { createTheme }  from '@mui/material/styles';

//TODO choose theme colors either synthwave or ide colors

const mainTheme = createTheme({
    palette : {
        type: 'light',
       
        accent: {
            main: "#00aab3"
        },
        highlight: {
            main: "#FFFFFFF"
        }
    }
})

export default mainTheme
   

