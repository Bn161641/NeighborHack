import { useState } from "react";
import "./Listing.css";
import Button from "@mui/material/Button";

export default function Listing(props){

  const [showListing, setShowListing] = useState(props.eventList);

  console.log(props);
  if(props.nav.showListing){
    setShowListing(props.eventList);
  } else if (props.nav.events){
    setShowListing(props.eventList.filter((feed) => feed.type == "event"));
  } else if (props.nav.volunteers){
    setShowListing(props.eventList.filter((feed) => feed.type == "volunteer"));
  } else if (props.nav.reports){
    setShowListing(props.eventList.filter((feed) => feed.type == "report"));
  } 

  return (
  <div className="discoverListing" >
    <div className="discoverListingHeader">
      <h1>{props.city}: {showListing.length} results found</h1>
    </div>
    
  </div>
  );
};