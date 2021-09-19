import React, { useState, useEffect } from "react";
import "./Feed.css";
import Card from "./Card.js";

const Feed = () => {
  //data object as state
  const [data, setData] = useState([
    {
      title: "...posts are loading!...",
      date: "please allow up to 30 seconds for posts to load",
    },
  ]);

  // calculate date 1 week ago from today - method should work while crossing months and years
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
  const yyyy = oneWeekAgo.getFullYear();
  const mm = String(oneWeekAgo.getMonth() + 1).padStart(2, "0");
  const dd = String(oneWeekAgo.getDate()).padStart(2, "0");
  const inputDate = yyyy + "-" + mm + "-" + dd;

  // TODO: Move to API event handler
  // TODO: Change useEffect to fetch more when user reaches bottom of page
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=NRBwI2gQUZo7Cj4zV1SmTXuAL8bNYhLqHCCcb380&start_date=" +
        inputDate
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    // console.log("fetching...");
  }, [inputDate]);

  // checks for empty data & puts posts into reverse chronological order
  const dataCheck = [...data].reverse() ?? [
    {
      title: "...posts are loading!...",
      date: "please allow up to 30 seconds for posts to load",
    },
  ];
  //   console.log("dataCheck:");
  //   console.log(dataCheck);

  // maps each post as a Card component
  return dataCheck.map((cardData) => {
    return (
      <div key={cardData.title}>
        <Card cardData={cardData} />
      </div>
    );
  });
};

export default Feed;
