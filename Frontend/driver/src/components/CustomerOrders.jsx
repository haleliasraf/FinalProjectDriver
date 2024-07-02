import React, { useEffect, useState } from 'react';
import { getShips } from '../utils/shipUtil';
import { Box, Tab, Tabs } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Diversity2Rounded from '@mui/icons-material/Diversity2Rounded';
import { getUpcomings } from '../utils/upcomingUtil.js'
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Dialog } from '@mui/material';
import EditDialog from './EditDialog.jsx'
import { partition } from 'lodash';
import dayjs from 'dayjs';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import EditOrder from './EditOrder.jsx';
import { saveAs } from 'file-saver';
import { TextField } from '@mui/material';
import { format } from 'date-fns';





function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [editDetails, setEditDetails] = useState(false);
    const [items, setItems] = useState(['3','7','8']);

    // const [items, setItems] = useState(['3','7','8']);

    // const[order, setorder] = useState({...row, phone: user?.phone} );

    useEffect(() => {
        console.log('editDetails', editDetails);
    }, [editDetails])

    const handleClose = () => {
        setEditDetails(false);
    }

    const handleDownload = () => {
      {

        }
        const imageUrl = row.url;
        saveAs(imageUrl, 'downloaded-image.jpg');
    };
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' }, direction: 'rtl', display: 'flex !important' }}>
                <TableCell>

                </TableCell>
                <TableCell width={75}>{format(row.date, 'yyyy-MM-dd')}</TableCell>
                <TableCell width={40}>{row.name?? row.user.firstName}</TableCell>
                <TableCell width={40}>{row.id}</TableCell>
                <TableCell width={75} sx={{textAlign: 'center !important' }}>{row.statusId===3?"ממתין לאיסוף" :row.statusId===9?"נקלטה הזמנה":row.statusId===4?" נאסף":"הסתימה הזמנה"}</TableCell>

                <TableCell width={40}>{
                (row?.statusId == 8 || row?.statusId == 4) ?  null :
                <Button onClick={() => { setEditDetails(true); }} sx={{ color: '#919193' }}>עדכן</Button>}</TableCell>
                <TableCell width={40}> {row.url ? <Button onClick={handleDownload}>הורדת קבלה</Button> :null}</TableCell>

                <TableCell></TableCell>
                <IconButton
                sx={{width:'6px',height:'6px',margin:'auto'}}
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>

                {editDetails &&
                    <EditOrder
                        open={editDetails}
                        handleClose={handleClose}
                        driver={row}
                        setOpen={setOpen}
                    ></EditOrder>
                }

            </TableRow>
            <TableRow sx={{ textAlign: 'right !important' }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 0 }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: 'right !important' }}>
                                פרטי הזמנה
                            </Typography>
                            <Table size="small" aria-label="draiver-details">
                                <TableBody>

                                    <TableRow>
                                        <TableCell sx={{ textAlign: 'right !important' }}> שם לקוח</TableCell>
                                        <TableCell sx={{ textAlign: 'right !important' }}>{row.name ?? row.user.firstName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ textAlign: 'right !important' }}> מספר טלפון</TableCell>
                                        <TableCell sx={{ textAlign: 'right !important' }}>{row.user?.phone  ?? row.phone}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ textAlign: 'right !important' }}>כתובת לקוח</TableCell>
                                        <TableCell sx={{ textAlign: 'right !important' }}>{row.shipAdress ?? row.adressExit}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ textAlign: 'right !important' }}>כתובת יעד</TableCell>
                                        <TableCell sx={{ textAlign: 'right !important' }}>{row.adressGounn ?? row.shipSdress}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    
        row: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            orderNumber: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            user: PropTypes.shape({
                firstName: PropTypes.string,
                phone: PropTypes.string,
            }),
            shipAdress: PropTypes.string,
            adressExit: PropTypes.string,
            adressGounn: PropTypes.string,
            shipSdress: PropTypes.string,
            statusId: PropTypes.string,
            url: PropTypes.string,
    }).isRequired,

};


const CustomerOrders = ({row}) => {
    const [ships, setShips] = useState([]);
    const [order, setorder] = useState([]);
    const [startDate, setStartDate] = useState('');


    const [value, setValue] = React.useState(0);


    useEffect(() => {
        getUpcomings().then((res) => setorder(res.data))
            .catch(error => console.error('Error:', error));
        getShips().then((res) => setShips(res.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const currentDate = dayjs().startOf('day');
    const [todayShips, pastShips] = partition(ships, ship => ship.statusId === 3);

    
    const currentorder = dayjs().startOf('day');

    // const [pastorders, todayorder] = partition(order, order => {
    //     const orderDate = dayjs(order.date).startOf('day');
    //     return orderDate.isBefore(currentorder);
    // });

    // מיין את ההזמנות לפי תאריך
// const [pastorders, futureordersAll] = partition(order, order => {
//     const orderDate = dayjs(order.date).startOf('day');
//     return orderDate.isBefore(currentorder); // הזמנות שעברו
// });
const [futureordersAll, pastorders] = partition(order, order => order.statusId === 9);


// כעת נפריד את ההזמנות העתידיות מההזמנות של היום
const [todayorderorders, futherorders] = partition(futureordersAll, order => {
    const orderDate = dayjs(order.date).startOf('day');
    return orderDate.isSame(currentorder); // הזמנות של היום
});

    // const [futherorders, todayorders] = partition(todayorder, order => {
    //     const orderDate = dayjs(order.date).startOf(!'day');
    //     return orderDate.isBefore(currentorder);
    // });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <h1> הזמנות לקוח</h1>
        <Box sx={{ width: '80%', typography: 'body1', margin: 'auto' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', direction: 'rtl', display: 'flex !important' }}>
                    <TabList onChange={handleChange} aria-label="icon label tabs example">
                        <Tab icon={<DeliveryDiningIcon />} label="משלוחים" value="1" />
                        <Tab icon={<DoneAllIcon />} label="משלוחים שבוצעו" value="2" />
                        <Tab icon={<HailRoundedIcon />} label=" הזמנות להיום " value="3" />
                        <Tab icon={<PermContactCalendarOutlinedIcon />} label="הזמנות עתידות " value="4" />
                        <Tab icon={<WhereToVoteIcon />} label="הזמנות שבוצעו" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1">

                    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
                        <Table aria-label="collapsible table">
                            <TableHead sx={{
                                backgroundColor: '#eae2d8 !important'
                                , color: 'white'
                                , direction: 'rtl', display: 'flex !important'
                            }}>
                                <TableRow sx={{ direction: 'rtl', display: 'flex !important' }}>
                                    <TableCell />

                                    <TableCell width={75}>תאריך</TableCell>
                                    <TableCell width={40}> שם הלקוח</TableCell>
                                    <TableCell width={40}> מספר הזמנה</TableCell>
                                    <TableCell width={40}> סטטוס הזמנה</TableCell>
                                    <TableCell width={40}></TableCell>
                                    <TableCell width={40}></TableCell>
                                    <TableCell width={40}></TableCell>
                                    <TableCell width={40}></TableCell>

                                    <TableCell width={150}>   <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '5px' }}>
                                        <TextField
                                            label=" חיפוש לפי תאריך"
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />


                                    </Box>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {todayShips.map((ship) => (
                                    <Row key={ship.id} row={ship}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="2"><TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
                    <Table aria-label="collapsible table">
                        <TableHead sx={{
                            backgroundColor: '#eae2d8 !important'
                            , color: 'white'
                            , direction: 'rtl', display: 'flex !important'
                        }}>
                            <TableRow sx={{ direction: 'rtl', display: 'flex !important' }}>
                                <TableCell />
                                <TableCell  width={75}>תאריך</TableCell>
                                <TableCell  width={40}> שם הלקוח</TableCell>
                                <TableCell  width={40}> מספר הזמנה</TableCell>
                                <TableCell></TableCell>


                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pastShips.map((ship) => (
                                <Row key={ship.id} row={ship} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></TabPanel>
                <TabPanel value="3">
                    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
                        <Table aria-label="collapsible table">
                            <TableHead sx={{
                                backgroundColor: '#eae2d8 !important'
                                , color: 'white',
                                direction: 'rtl', display: 'flex !important'
                            }}>
                                <TableRow sx={{ direction: 'rtl', display: 'flex !important' }}>
                                    <TableCell />

                                    <TableCell></TableCell>
                                    <TableCell  width={75}>תאריך</TableCell>
                                    <TableCell  width={40}> שם הלקוח</TableCell>
                                    <TableCell  width={40}> מספר הזמנה</TableCell>
                                </TableRow >
                            </TableHead>
                            <TableBody>
                                {todayorderorders.map((order) => (
                                    <Row key={order.id} row={order} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="4"><TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
                    <Table aria-label="collapsible table">
                        <TableHead sx={{
                            backgroundColor: '#eae2d8 !important'
                            , color: 'white',
                            direction: 'rtl', display: 'flex !important'
                        }}>
                            <TableRow sx={{ direction: 'rtl', display: 'flex !important' }}>
                                <TableCell />
                                <TableCell></TableCell>
                                <TableCell  width={75}>תאריך</TableCell>
                                <TableCell  width={40}> שם הלקוח</TableCell>
                                <TableCell  width={40}> מספר הזמנה</TableCell>


                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {futherorders.map((order) => (
                                <Row key={order.id} row={order} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></TabPanel>
                <TabPanel value="5"> <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
                    <Table aria-label="collapsible table">
                        <TableHead sx={{
                            backgroundColor: '#eae2d8 !important'
                            , color: 'white',
                            direction: 'rtl', display: 'flex !important'
                        }}>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell width={75}>תאריך</TableCell>
                                <TableCell  width={40}> שם הלקוח</TableCell>
                                <TableCell  width={40}> מספר הזמנה</TableCell>
                                <TableCell />
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pastorders.map((pastorders) => (
                                <Row key={pastorders.id} row={pastorders} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></TabPanel>
                {/* <TabPanel value="6"> <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto' }}>
                    <Table aria-label="collapsible table">
                        <TableHead sx={{
                            backgroundColor: '#eae2d8 !important'
                            , color: 'white',
                        }}>
                            <TableRow>
                                <TableCell />
                                <TableCell></TableCell>
                                <TableCell>תאריך</TableCell>
                                <TableCell> שם הלקוח</TableCell>
                                <TableCell> מספר הזמנה</TableCell>


                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.map((order) => (
                                <Row key={order.id} row={order} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></TabPanel> */}
            </TabContext>
        </Box>
    </>);
}

export default CustomerOrders;