import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './MyCalander.css';
import Tooltip from '@mui/material/Tooltip';


const MyCalendar = () => {
    const data = [
        { date: '2022-04-01', count: 3 },
        { date: '2022-04-02', count: 0 },
        { date: '2022-04-03', count: 17 },
        // more data here
    ];

    return (
        <div className='calendar'>
            <h1>Calendar Heatmap</h1>
            <CalendarHeatmap
                startDate={new Date('2022-04-01')}
                endDate={new Date('2023-04-01')}
                values={data}
                showWeekdayLabels={true}
                titleForValue={(value) => {
                    return (
                        <Tooltip title={`Box`} arrow>
                            <div className="tooltip">c</div>
                        </Tooltip>
                    );
                }}
            >
            </CalendarHeatmap>
        </div>
    );
};

export default MyCalendar;
