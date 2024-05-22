import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom/dist";
import { setConnectedUser } from "../features/userSlice";
import { useDispatch } from "react-redux";


const pages = [{name: 'שליחויות', url: "/deliveries"},{name: ' מעקב משלוח', url: "/tracking"}, {name: 'כאן ועכשיו', url: "/travel"},{name: 'נסיעות עתידיות', url: "/UpcomingTravel"},{name: 'קצת עלינו', url: "/aboutUs"},{name: 'צור קשר', url: "/customerService"},{name: ' אזור אישי ', url: "/OrderMenagment"}];
const settings = [{name: 'התחברות', url: "/signIn"}, {name: 'הרשמה', url: "/signUp"},{name: 'התנתקות', url: "/"}];

const Nav = ({setOpenSignIn, setOpenSignUp}) => {
    // כאן המקום לכתוב קוד JS
    const dispatch = useDispatch()
    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigatePage = (url) => {
    if(url === "/signUp"){
      setOpenSignUp(true);
    }
    else if(url == "/signIn"){
      setOpenSignIn(true);
    }
    else if(url == "/"){
      navigate('/');
      // dispatch(setConnectedUser(null)); 
    }
       
    navigate(url);
  }
    return (
        <>
        <AppBar position="static">
        <Container maxWidth="xl" sx={{backgroundColor: '#eae2d8 !important'}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleNavigatePage("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            DRIVER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => handleNavigatePage(page.url)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography

            variant="h5"
            noWrap
            component="a"
            onClick={() => handleNavigatePage("/")}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor:'pointer'
            }}
          >
            DRIVER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleNavigatePage(page.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={() => handleNavigatePage(setting.url)}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet></Outlet>
    {/* לייבא פה קומפונטטה של תחתית העמוד */}
        {/* <div style={{display:'flex', justifyContent:'space-around', width:'500px', marginLeft:'auto', marginRight:'auto'}}>
          <Link to="/signIn" onClick={()=> setOpenSignUp(true)}>התחברות</Link> 
          <Link to="/signUp" onClick={()=> setOpenSignUp(true)}>הרשמה</Link>
          <Link to="/travel">כאן ועכשיו</Link>
          <Link to="/UpcomingTravel">הזמנה עתידית</Link>
          <Link to="/aboutUs">קצת עלינו </Link>
          <Link to="/deliveries"> משלוחים</Link>
          <Link to="/tracking">מעקב משלוח</Link>
          <Link to="/customerService">צור קשר </Link>
          <Link to="/OrderMenagment">רשימת הזמנות  </Link>
        

        </div>
         <Outlet></Outlet> */}
          {/* לייבא פה קומפונטטה של תחתית העמוד */}
         </>
    );
}

export default Nav;