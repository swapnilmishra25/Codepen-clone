import {AppBar, Toolbar, styled} from '@mui/material'
import logo from '../images/logo.png';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;

`

const Header = () => {
  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt = "logo" style={{width: 40}}/>
        </Toolbar>
    </Container>

    
  )
}

export default Header