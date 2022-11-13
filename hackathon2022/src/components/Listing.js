import { useState, Component } from "react";
import "./Listing.css";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';

export default function Listing(props) {
  var dataUsing;

  // if (props.nav === "showAll") {
  //   dataUsing = feedData;
  // } else if (props.nav === "events") {
  //   dataUsing = feedData.filter((feed) => feed.type == "event");
  // } else if (props.nav === "volunteers") {
  //   dataUsing = feedData.filter((feed) => feed.type == "volunteer");
  // } else if (props.nav === "reports") {
  //   dataUsing = feedData.filter((feed) => feed.type == "report");
  // }

  // const [showListing, setShowListing] = useState(dataUsing);

  return (
    <div className="discoverListing">
      <div className="discoverListingHeader">
        <h1>
          {props.city}: {props.showListing.length} results found
        </h1>
        <Button variant="outlined">
          Sort By Date{" "}
          <div className="sortIcon">
            <SortIcon />
          </div>
        </Button>
      </div>

      <div className="ListOfCards">
        {props.showListing.map((feed) => {
          if (feed.type === "event" || feed.type === "volunteer") {
            return (
              <div className="CardContainer">
                <div className="Card">
                  <img src={feed.image} />
                  <div className="CardBody">
                    <p className="date">{feed.date.when}</p>
                    <p className="title">{feed.title}</p>
                    <div className="attendeeAndLocatoin">
                      <p className="attendee">
                        {feed.attendee} people interested
                      </p>
                      <p className="location">- &nbsp;{feed.address[1]}</p>
                    </div>
                    <Button variant="text">Show on map</Button>
                  </div>
                  <div className="interestedContainer">
                    <Button className="interestedButton" variant="outlined">
                      interested
                    </Button>
                  </div>
                </div>
              </div>
            );
          } else if (feed.type === "report") {
            return (
              <div className="CardContainer">
                <div className="Card">
                  <img src={feed.image} />
                  <div className="CardBody">
                    <p className="date">{feed.date.when}</p>
                    <p className="title">{feed.title}</p>
                    <div className="attendeeAndLocatoin">
                      <p className="attendee">{feed.attendee} people upvoted</p>
                      <p className="location">- &nbsp;{feed.address[1]}</p>
                    </div>
                    <Button variant="text">Show on map</Button>
                  </div>
                  <div className="interestedContainer thumbContainer">
                    <IconButton>
                      <ThumbUpIcon />
                    </IconButton>
                    <IconButton>
                      <ThumbDownIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
