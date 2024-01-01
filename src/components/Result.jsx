import {React, useState} from 'react'
import { Box, styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import { useEffect } from 'react'


const Container = styled(Box)`
    height: 41vh;
`

const Result = () => {

  const [src, setSrc] = useState('');


  const {html, css, js} = useContext(DataContext);

  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `
  useEffect(()=>{
    const timeout = setTimeout(()=> {
      setSrc(srcCode);
    }, 250)

    return () => clearTimeout(timeout);
     //eslint-disable-next-line
  }, [html,css,js]);
  
  return (
    <Container>
        <iframe
          srcDoc= {src}
          title = "Output"
          sandbox='allow-scripts'
          width = '100%'
          height = '100%'
        ></iframe>
    </Container>
  )
}

export default Result