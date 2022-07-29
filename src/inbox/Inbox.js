import React from "react";
import "./inbox.css";

export default function Inbox() {
  const inboxMassage = [
    {
      title: "Slack",
      sender: "Matt",
      time: "11:22",
      massage:
        "You have a new direct message and a new mention in SheCodes Slack",
    },
    {
      title: "Reset password instructions",
      sender: "Codecademy",
      time: "15:32",
      massage:
        "Click the link below to reset the password for your Codecademy account",
    },
    {
      title: "OpenWeatherMap API usage alert",
      sender: "OpenWeather Team",
      time: "18:12",
      massage:
        "Dear Customer,Your OpenWeatherMap API key eef545a795cae9fca6e032ee8406884a is temporary blocked due to the continual sufficient exceeding of the calls per minute limit by performing 1737 requests within a minute but the limit for the Free account is 60 rpm.",
    },
    {
      title: "What to Watch This Week",
      sender: "Apple TV",
      time: "20:14",
      massage:
        "Catch up with Nikki and Jason before Season 3 premieres July 22.",
    },
    {
      title: "'Black Panther: Wakanda Forever' Cast on New Trailer",
      sender: "IMDb.com",
      time: "17:30",
      massage:
        "'Wakanda Forever' Cast Breaks Down the Trailer, Danai Gurira, Winston Duke, and more 'Black Panther: Wakanda Forever' cast members weigh in on the movie’s emotional first trailer, which was released at San Diego Comic-Con 2022.",
    },
  ];

  const renderInbox = () => {
    return inboxMassage.map((item) => {
      return (
        <div className="message">
          <input type="checkbox" />
          <span className="sender">{item.sender}</span>
          <span className="date">{item.time}</span>
          <span className="title">{item.title}</span>
        </div>
      );
    });
  };

  return (
    <div className="inbox">
      <div className="successAlert">User is successfully logged in</div>
      <header>
        <h1>messages</h1>
      </header>

      <div className="mailbox">
        <div className="nav">
          <a href="#">compose</a>
          <a href="#" className="active">
            inbox
          </a>
        </div>
        <div className="messages">
          <input name="search" placeholder="search" />
          <div className="actions-dropdown">
            <label>
              actions <span>▼</span>
            </label>
            <ul>
              <li>flag</li>
              <li>move</li>
              <li>delete</li>
            </ul>
          </div>

          {renderInbox()}
          {/* <div className="message">
            <input type="checkbox" />
            <span className="sender">lauren</span>
            <span className="date">today</span>
            <span className="title">hello world</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

{
  /* <a href="#">starred</a>
          <a href="#">sent</a>
          <a href="#">drafts (1)</a>
          <a href="#">trash</a> */
}
