import React, { Component } from 'react';

class CardHeader extends Component {
  constructor(props) {
    super(props);

    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUNE',
      'JULY',
      'AUG',
      'SEPT',
      'OCT',
      'NOV',
      'DEC',
    ];
    const days = [
      'SUNDAY',
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
    ];

    const now = new Date();
    this.state = {
      date: now.getDate(),
      month: now.getMonth(),
      day: now.getDay(),
      year: now.getFullYear(),
      months: months,
      days: days,
    };
  }

  componentDidMount() {
    // Update Date,Month and Day every hour
    this.interval = setInterval(() => {
      const now = new Date();
      this.setState({
        date: now.getDate(),
        month: now.getMonth(),
        day: now.getDay(),
        year: now.getFullYear(),
      });
    }, 1000 * 3600);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { date, month, day, year, months, days } = this.state;
    return (
      <div className="d-flex justify-content-between mt-xs-5 mt-4 mb-3">
        <div className="d-flex">
          <h1 className="date-details pb-1">{date}</h1>
          <div className="month-year-details d-flex flex-column ps-1 pt-1">
            <div className="mb-0">{months[month]}</div>
            <div className="mb-0">{year}</div>
          </div>
        </div>
        <div>
          <h6 className="day-details pt-3">{days[day]}</h6>
        </div>
      </div>
    );
  }
}

export default CardHeader;
