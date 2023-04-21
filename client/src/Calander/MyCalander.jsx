import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './MyCalander.css';
import {Tooltip as ReactTooltip} from 'react-tooltip';


const MyCalendar = () => {
  const data = [
    { date: '2023-04-01', count: 3 },
    { date: '2023-05-02', count: 0 },
    { date: '2023-06-03', count: 17 },
    { date: '2023-07-01', count: 3 },
    { date: '2023-08-02', count: 0 },
    { date: '2023-09-03', count: 17 },
    { date: '2023-10-01', count: 3 },
    { date: '2023-11-02', count: 0 },
    { date: '2023-12-03', count: 17 },
    { date: '2023-04-01', count: 3 },
    { date: '2023-04-02', count: 0 },
    { date: '2023-04-03', count: 17 },
    // more data here
  ];


  return (
    <div className='calendar'>
      <CalendarHeatmap
        startDate={new Date('2023-01-01')}
        endDate={new Date('2023-12-01')}
        values={data}
        // showWeekdayLabels={true}
        // tooltipDataAttrs={value => {
        //     return {
        //       'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
        //         value.count
        //       }`,
        //     };
        //   }}
          onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
    </div>
  );
};

export default MyCalendar;
