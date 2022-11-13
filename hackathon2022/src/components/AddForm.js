import "./AddForm.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { feedData } from "../pages/feedData";

export default function AddForm(props) {
  const [type, setType] = useState("event");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");


  function addToForm(){
    feedData.push({
      "type": type,
      "title": title,
      "date": {
        "start_date": "Nov 13",
        "when": date,
      },
      "address": [
        location,
        "Richardson, TX",
        [32.962560, -96.735310]
      ],
      "description": description,
      'attendee': 0,
      'image': imageLink
    })
    console.log(feedData);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const feedType = [
    {
      value: "event",
      label: "Event",
    },
    {
      value: "volunteer",
      label: "Volunteer",
    },
    {
      value: "report",
      label: "Report",
    },
  ];

  return (
    <div className="addForm">
      <div className="FormCard">
        <h1>Add Feed</h1>
        <div className="addFormInputFieldContainer">
          <TextField
            className="addFormInputField"
            select
            label="Select"
            value={type}
            onChange={handleTypeChange}
          >
            {feedType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="addFormInputFieldContainer">
          <TextField
            className="addFormInputField"
            label="Date"
            variant="outlined"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div className="addFormInputFieldContainer">
          <TextField
            className="addFormInputField"
            label="Title"
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="addFormInputFieldContainer">
          <TextField
            className="addFormInputField"
            label="Location"
            variant="outlined"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className="addFormInputFieldContainer">
          <TextField
            className="addFormInputField"
            label="Description"
            multiline
            rows={2}
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>


        <div className="addFormInputFieldContainer">
          <TextField
            className="addFormInputField"
            label="Link to an image"
            variant="outlined"
            value={imageLink}
            onChange={handleImageLinkChange}
          />
        </div>

        <Button onClick={addToForm}variant="outlined">Submit</Button>
      </div>
    </div>
  );
}
