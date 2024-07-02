import React, { useState } from "react";
import { getShipById } from "../utils/shipUtil";
import { useSelector } from "react-redux";
import axios from 'axios';

import { TextField, Button, Box, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
 
const OrderSummary=(props)=>{

        return (
               <>


<Container
      className="travel"
      sx={{
        marginTop: '0px',
        backgroundSize: 'cover', // Optional: Ensures the image covers the container
      }} component="main" maxWidth="200px">
      <Box
        sx={{
          height: '84vh',
          overflow: 'hidden',
          width: '95vw',
          // marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // ממרכז את התוכן באופן אופקי
          padding: '5px',
          borderRadius: '4px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        ></Box>
        <Box
          component="form"
          sx={{
            borderRadius: '10px', // פינות מעוגלות
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '500px',
            '& .MuiTextField-root': { width: '90%' },
            backgroundColor: '#faf9f1',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginLeft: 'auto',
            marginRight: 'auto',

          }}
          //  noValidate
          // onSubmit={handleSubmit}
          autoComplete="on"
        >
          {/* <div> */}
          <HailRoundedIcon sx={{ fontSize: '60px', mergin: 0 }}></HailRoundedIcon>

          <h2 style={{ margin: '0px' }} >סיכום הזמנה</h2>

          {/* <ButtonGroup
            //  variant="contained" 
            aria-label="Basic button group"
            sx={{
              backgroundColor: '#bdad73', border: '2px solid rgb(250 253 255 / 50%)',
              color: ' #000000',
            }}>
            <Button disabled={areaId && areaId !== 3} style={{}} onClick={() => onChangeArea(3)}>צפון</Button>
            <Button disabled={areaId && areaId !== 1} onClick={() => onChangeArea(1)}>דרום</Button>
            <Button disabled={areaId && areaId !== 2} onClick={() => onChangeArea(2)}>מרכז</Button>
          </ButtonGroup> */}

          <ToggleButtonGroup {...control} aria-label="Medium sizes"
          sx={{marginTop:'7px'}}
          >
            {areaChildren}
          </ToggleButtonGroup>

          <TextField
            sx={{ textAlign: 'right' }}
            id="outlined-multiline-flexible"
            name='adressExit'
            value={props.adressGounn}
            label=" יעד"
            multiline
            maxRows={4}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            sx={{ textAlign: 'right'}}
            id="outlined-multiline-flexible"
            name='adressGounn'
            value={props.adressExit}
            label=" מוצא"
            multiline
            maxRows={4}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            sx={{ textAlign: 'right' }}
            id="outlined-multiline-flexible"
            name='phone'
            value={props.phone}
            label=" טלפון"
            multiline
            maxRows={4}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            sx={{ textAlign: 'right' }}
            id="outlined-multiline-flexible"
            name='number'
            value={props.numpassenger}
            label=" מספר נוסעים"
            multiline
            maxRows={4}
            fullWidth
            type="number"
            margin="normal"
            required
          />
          
          <TextField
            sx={{ textAlign: 'right' }}
            id="outlined-multiline-flexible"
            name='number'
            value={props.payment==1?"אשראי": "מזומן"}
            label=" מספר נוסעים"
            multiline
            maxRows={4}
            fullWidth
            type="number"
            margin="normal"
            required
          />
          {/* <Button
            color="primary"
            startIcon={<SendIcon />}
            type="button"
            size="large"
            sx={{ marginTop: '20px', backgroundColor: '#bdad73', color: "black" }}
            onClick={handleClickTravel}
          >
            קבלת סטטוס
          </Button> */}

        </Box>
      </Box>
    </Container>




{/*                
              <h1>סיכום הזמנה</h1><br/>
               <h4> יעד</h4>
               <p >{props.adressGounn}</p>
               <h4> מוצא</h4>
               <p >{props.adressExit}</p>
               <h4> מספר טלפון</h4>
               <p >{props.phone}</p>
               <h4> מספר נוסעים</h4>
               <p >{(props.numpassenger)}</p>
               <h4> תשלום</h4>
               <p >{ props.payment ===1? "מזומן":"אשראי"}</p>
                */}
              </>
   
        )
        }
    export default OrderSummary;
