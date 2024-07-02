import React from "react";
import "./css/AboutUs.css";
import SafetyIcon from '@mui/icons-material/SafetyCheck';
import AccessibilityIcon from '@mui/icons-material/AccessibilityNew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import EcoIcon from '@mui/icons-material/Eco';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';

const AboutUs = () => {
    return (
        <div className="AbuotUs"
        style={{display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // width:'100%',
            // height:'85vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
         
         }}>
            <div
            className="about-container">
            <LocalTaxiRoundedIcon sx={{ fontSize: '60px', mergin: 0 }}></LocalTaxiRoundedIcon>

            <h1 className="title"  style={{ margin: '0px' }} >קצת עלינו</h1>
            <div className="content">
                <h1 className="main-heading">בחרו במוניות שלנו לחוויית נסיעות מעולה :)</h1>
                <p className="description">
                    בעולם המהיר של היום, מציאת שירות מוניות אמין ויעיל היא חיונית. חברתנו מציעה שירות מוניות יוצא דופן העולה על הציפיות. עם רכבים מטופחים, נהגים מקצועיים ומחויבות לשביעות רצון הלקוחות, אנחנו הבחירה הטובה ביותר עבור כל צרכי התחבורה שלך.
                </p>
                <div className="section">
                    <SafetyIcon className="icon" />
                    <h2 className="sub-heading"  style={{ margin: '0px' }}>בטיחות ואמינות:</h2>
                    <p className="description">
                        המוניות שלנו עוברות בדיקות ותחזוקה שוטפות כדי להבטיח את בטיחותך. הנהגים שלנו מנוסים ומורשים, נותנים עדיפות לטכניקות נהיגה הגנתיות לנסיעה חלקה ובטוחה. אתה יכול לסמוך עלינו שנעמוד בזמנים ונביא אותך ליעד שלך בזמן.
                    </p>
                </div>
                <div className="section">
                    <AccessibilityIcon className="icon" />
                    <h2 className="sub-heading" style={{ margin: '0px' }}>נוחות ונגישות:</h2>
                    <p className="description">
                        אנו מספקים שירותי מוניות 24/7, ומבטיחים שתוכל לנסוע בכל עת שתצטרך. האפליקציה הסלולרית הידידותית למשתמש שלנו מאפשרת הזמנה קלה, ואנו מציעים מגוון רכבים כדי להתאים לדרישות הספציפיות שלך.
                    </p>
                </div>
                <div className="section">
                    <SupportAgentIcon className="icon" />
                    <h2 className="sub-heading" style={{ margin: '0px' }}>שירות לקוחות יוצא דופן:</h2>
                    <p className="description">
                        צוות שירות הלקוחות המסור שלנו זמין מסביב לשעון כדי לסייע לך. מההזמנה ועד ההגעה ליעד, אנו שואפים לספק חוויה אישית ונוחה.
                    </p>
                </div>
                <div className="section">
                    <AttachMoneyIcon className="icon" />
                    <h2 className="sub-heading" style={{ margin: '0px' }}>תמחור תחרותי:</h2>
                    <p className="description">
                        אנו מציעים תמחור שקוף ללא חיובים נסתרים. המחירים שלנו תחרותיים ומותאמים לצרכי הנסיעה שלך, מה שמבטיח שתקבל תמורה לכספך.
                    </p>
                </div>
                <div className="section">
                    <AttachMoneyIcon  sx={{ margin: '0px' }} className="icon" />
                    <h2 className="sub-heading" style={{ margin: '0px' }}>מחויבות לקיימות:</h2>
                    <p className="description">
                        אנו נותנים עדיפות לקיימות על ידי שמירה על צי רכב ידידותי לסביבה הממזער את פליטת הפחמן. על ידי בחירת המוניות שלנו, אתה תורם לעתיד ירוק יותר.
                    </p>
                </div>
                <div className="section">
                    <DoneAllIcon className="icon"  sx={{ margin: '0px' }}/>
                    <h2 className="sub-heading" style={{ margin: '0px' }}>לסיכום:</h2>
                    <p className="description">
                        בכל הנוגע לשירותי מוניות, המחויבות שלנו לבטיחות, אמינות, נוחות, שירות לקוחות יוצא דופן, תמחור תחרותי וקיימות הופכים אותנו לבחירה המתבקשת. חווה את ההבדל עם שירות המוניות המעולה שלנו.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
