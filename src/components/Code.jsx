import { Box, styled } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import Editor from './Editor'

import {DataContext} from '../Context/DataProvider';

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`


const Code = () => {

  const {html, sethtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
        <Editor 
        heading = "HTML"
        icon = "/" 
        color = "#FF3C41"
        value = {html}
        onChange = {sethtml}/>
        
        <Editor
        heading = "CSS"
        icon = "*"
        color ="#0EBEFF"
        value = {css}
        onChange = {setCss}/>
        <Editor
        heading = "JS"
        icon = "()"
        color = "#FCD000"
        value = {js}
        onChange = {setJs}/>
    </Container>
  )
}

export default Code