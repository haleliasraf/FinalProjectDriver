import { useNavigate } from "react-router-dom/dist"
import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import { Box } from "@mui/material";



const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});
const WorkersManagement = () => {
  const navigate = useNavigate();

  const handleInquryClick = () => {

    navigate('/Inquiries')
  }

  const handleDriversWorkersClick = () => {

    navigate('/DriversWorkers')
  }

  const handlecustomerOrdersClick = () => {

    navigate('/customerOrders')
  }

  ButtonRoot.propTypes = {
    children: PropTypes.node,
  };
  const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
  });

  const blue = {
    50: '#eee1d9',
    100: '#a4874ca6',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#8d7a2e',
    700: '#0059B3',
    800: '#a4874ca6',
    900: '#090805',
   
  };

  const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }) => `
   overflow: visible;
   cursor: pointer;
   
  padding: 12px 24px; // Adjust the padding as needed
   --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[200]};
   --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
   --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};
 
   & polygon {
     fill: transparent;
     transition: all 800ms ease;
     pointer-events: none;
   }
 
   & .bg {
     stroke: var(--main-color);
     stroke-width: 2;
     filter: drop-shadow(2 23px 64px rgba(0, 0, 0, 0.1));
     fill: transparent;
     width: 200px;
   }
 
   & .borderEffect {
     stroke: var(--main-color);
     stroke-width: 4;
     stroke-dasharray: 200 900;
     stroke-dashoffset: 300;
     fill: transparent;
   }
 
   &:hover,
   &.${buttonClasses.focusVisible} {
     .borderEffect {
       stroke-dashoffset: -600;
     }
 
     .bg {
       fill: var(--hover-color);
     }
   }
 
   &:focus,
   &.${buttonClasses.focusVisible} {
     outline: 8px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
     outline-offset: 5px;
   }
 
   &.${buttonClasses.active} {
     & .bg {
       fill: var(--active-color);
       transition: fill 150ms ease-out;
     }
   }
 
   & foreignObject {
     pointer-events: none;
 
     & .content {
      font-size: 1.125rem; // Adjust the font size as needed
       font-family: 'IBM Plex Sans', sans-serif;
       font-weight: 600;
       line-height: 1.5;
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       color: var(--main-color);
     }
 
     & svg {
       margin: 0 4px;
     }
   }`,
  );

  return (
  <>
      {/* className="workerManegmant" */}

  <div 

  className="workerManegmant"
  
  style={{display:'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width:'100%',
   height:'90vh',
   backgroundRepeat: 'no-repeat',
   backgroundSize: "cover",

}}>

  {/* <h1>שולחן עבודה</h1> */}

  <Box sx={{backgroundColor:'#ffffffa3', width:'45%', top:'35%', position:'absolute',WebkitBorderRadius:'30px'}}>
      <SvgButton onClick={handlecustomerOrdersClick}>ניהול הזמנות</SvgButton>
      <SvgButton onClick={handleDriversWorkersClick}>ניהול עובדים</SvgButton>
      <SvgButton onClick={handleInquryClick}>ניהול פניות לקוח</SvgButton>
  </Box>
    </div>
    </>
      )

}
export default WorkersManagement