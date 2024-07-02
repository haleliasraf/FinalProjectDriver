// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import SignIn from "./SignIn";
// // import homePage from "../public/images/homePage.mp4"

// const StyledBackground = styled.div`
//   position: relative;
//   height: 100vh; /* Full viewport height */
//   width: 100vw; /* Full viewport width */
//   overflow: hidden;
// `;

// const BackgroundVideo = styled.video`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transform: translate(-50%, -50%);
//   z-index: -1; /* לשים את הוידאו ברקע */
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 1; /* לשים את התוכן מעל הוידאו */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 50px;
// `;

// const ContactBox = styled.p`
//   display: flex;
//   background: #f9f9f9;
//   border-radius: 30px;
//   height: 5vh;
//   width: 9vw;
//   padding: 5px;
//   align-items: center;
//   justify-content: center;
// `;

// const HomePage = () => {
//   const connectedUser = useSelector(state => state.user.connectedUser);
//   const navigate = useNavigate();
//   const [openSignIn, setOpenSignIn] = useState(false);

//   useEffect(() => {
//     const timerSignIn = setTimeout(() => {
//       if (connectedUser == null) {
//         setOpenSignIn(true);
//       }
//     }, 3000);

//     return () => {
//       clearTimeout(timerSignIn);
//     }
//   }, [connectedUser]);

//   return (
//     <>
//       <StyledBackground>
//         <BackgroundVideo autoPlay loop muted>
//           <source src="../public/mp4/homePage.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </BackgroundVideo>
//         <ContentWrapper>
//           {connectedUser != null && <h2>שלום {connectedUser.firstName + " " + connectedUser.lastName}</h2>}
//           <p>נהג אצלך בקליק</p>
//           <ContactBox>
//             08-9947654
//             <PermPhoneMsgIcon style={{ marginRight: '3px' }} />
//           </ContactBox>
//         </ContentWrapper>
//       </StyledBackground>

//       {openSignIn &&
//         <SignIn
//           open={openSignIn}
//           setOpen={setOpenSignIn}
//           setOpenSingUp={() => { }}
//         />
//       }
//     </>
//   );
// }

// export default HomePage;

import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SignIn from "./SignIn";


const StyledBackground = styled.div`
  background-image: url(../public/mp4/Draiver.mp4);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const HomePage = () => {
  const connectedUser = useSelector(state => state.user.connectedUser);
  const navigate = useNavigate()
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    // setOpenSignIn(true);
    const timerSignIn = setTimeout(() => {
      if (connectedUser == null) {
        setOpenSignIn(true);
        // navigate('/signIn');
      }
    }, 3000);

    return () => {
      clearTimeout(timerSignIn);
    }

  }, [connectedUser]);
  const Greeting = styled.h2`
  background:rgb(255 222 89 / 66%);
  border-radius: 25px;
  height: 6vh;
  width:30vh;
  margin-top: 390px; /* Set margin-top to 350px */
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-right: 550px;
`;
  const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width:100%;
  height:100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1; /* לשים את הוידאו ברקע */
`;
  // כאן המקום לכתוב קוד JS
  return (
    <>
      <StyledBackground>
        <body
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '0px',
            backgroundImage: 'url("../public/mp4/Draiver.mp4")',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',  // Ensure full viewport width
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            overflow: 'hidden',
            justifyContent: 'center',

          }}
        >
           <BackgroundVideo autoPlay loop muted>
          <source src="../mp4/Draiver.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo> 
          {/* <div> */}
          <div style={{
            marginTop: '50px',
            display: 'flex',
            flexdirection: 'column',
            alignitems:'center'
          }}>
     
    
            <Greeting
            >
              08-9947654
              <PermPhoneMsgIcon style={{ marginRight: '3px', justifycontent: 'center' }}></PermPhoneMsgIcon>
            </Greeting>
          </div>

          {/* </div> */}

        </body>
      </StyledBackground>

      {openSignIn &&
        <SignIn
          open={openSignIn}
          setOpen={setOpenSignIn}
          setOpenSingUp={() => { }}
        >
        </SignIn>
      }
    </>
  );
}

export default HomePage;