import React, { useEffect, useState } from "react";
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
import { setConnectedUser, setUnConnectedUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import '../index.css';
// import '../../public/images'

const pages = [
  { name: 'שליחויות', url: "/deliveries", icon: <DeliveryDiningIcon /> },
  { name: ' מעקב משלוח', url: "/tracking", icon: <ShareLocationIcon /> },
  { name: 'כאן ועכשיו', url: "/travel", icon: <HailRoundedIcon /> },
  { name: 'נסיעות עתידיות', url: "/UpcomingTravel", icon: <PermContactCalendarOutlinedIcon /> },
  { name: 'קצת עלינו', url: "/aboutUs", icon: <LocalTaxiRoundedIcon /> },
  { name: 'צור קשר', url: "/customerService", icon: <Diversity2RoundedIcon /> }
];

const settingsMnegerConnected = [{ name: 'ההזמנות שלי', url: "/OrderMenagment" }, { name: 'אזור אישי', url: "/EditUser" },
  {name: ' ניהול', url: '/WorkersManagement'} ,{ name: 'התנתקות', url: "/logOut" }];
const settingsConnected = [{ name: 'ההזמנות שלי', url: "/OrderMenagment" }, { name: 'אזור אישי', url: "/EditUser" }, { name: 'התנתקות', url: "/logOut" }];
const settingsUnConnected = [{ name: 'התחברות', url: "/signIn" }, { name: 'הרשמה', url: "/signUp" }];

const Nav = ({ setOpenSignIn, setOpenSignUp }) => {
  // כאן המקום לכתוב קוד JS
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const connectedUser = useSelector(state => state.user.connectedUser);

  const [settings, setSetings] = useState(connectedUser == null ? settingsUnConnected : settingsConnected);
  // const [pages, setPages] = useState(connectedUser == null ? []: pagesUserConnected);

  useEffect(() => {
    if (connectedUser == null) {
      setSetings(settingsUnConnected);
    } else {
      connectedUser.level === 1
      ? setSetings(settingsMnegerConnected)
      : setSetings(settingsConnected);
    }
  }, [connectedUser]);

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
    if (url === "/signUp") {
      setOpenSignUp(true);
      navigate(url);
    }
    else if (url == "/signIn") {
      setOpenSignIn(true);
      navigate(url);
    }
    else if (url == "/logOut") {
      navigate('/');
      dispatch(setUnConnectedUser());
    } else if(connectedUser != null || url == "/aboutUs") {
      navigate(url);
    }
    else{
      setOpenSignIn(true);
      navigate("/");
    }
  }
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ backgroundColor: '#eae2d8 !important', color: ' #1b0d0d' }}>
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
                color: ' #faf9f1',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <img className="logo-image" src="/images/DRIVER.png" alt="Logo Image"></img>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color=' #1b0d0d'
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
                    <Typography textAlign="center"> {page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography

              // variant="h5"
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
                color: ' #1b0d0d',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavigatePage(page.url)}
                  sx={{ my: 2, color: ' #1b0d0d', display: 'block', paddingRight: '30px' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
                    {page.icon}
                    {page.name}
                  </div>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {connectedUser != null && (
            <p style={{
              display: 'flex',
              padding: '6px',
              alignItems: 'center',
              justifycontent:'center',
              fontSize:'15px'
            }}>
             {connectedUser.firstName + " " + connectedUser.lastName}
            </p>
          )}
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
                  </MenuItem>)
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet></Outlet>
  {/* פונטטה של תחתית העמוד */} 
    </>
  );
}

export default Nav;