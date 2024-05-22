import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    // הגדרת משתנה סטייט לאחסון הנתונים מהשרת
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);


    useEffect(() => {
        // בשימוש ב-axios אנו שולחים בקשה GET לנתיב הרלוונטי בשרת
        axios.get('/api/data')
            .then(response => {
                // עם ההצלחה בקבלת הנתונים מהשרת, מעדכנים את המשתנה data בסטייט עם הנתונים שקיבלנו
                setData(response.data);
            })
            .catch(error => {
                // במקרה של שגיאה בבקשה, ניתן לטפל בה כאן
                console.error('Error fetching data:', error);
            });
    }, []); // מערך ריק מבטיח שהאפקט ירוץ רק פעם אחת ברגע שהרכיב מופעל

    return (
        <div>
            {/* בתוך ה-Div נבדוק אם ישנם נתונים בסטייט ואם כן נציג אותם */}
            {data ? (
                <div>
                    <h2>פרטי הנתונים:</h2>
                    <p>{data.someProperty}</p>
                    <p>{data.anotherProperty}</p>
                    {/* ניתן להמשיך להציג את הנתונים לפי הצורך */}
                </div>
            ) : (
                <p>טוען נתונים...</p>
            )}
        </div>
    );
};

export default DataFetcher;
