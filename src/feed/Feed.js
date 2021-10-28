import React, { useState, useEffect } from "react";
import "./Feed.css";
import Card from "./Card.js";
import fetchDefault from "./fetchDefault";
import fetchDay from "./fetchDay";

const Feed = () => {
  const [data, setData] = useState([
    {
      title: "...posts are loading!...",
      date: "please allow up to 30 seconds for posts to load",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchValue, setSearchValue] = useState("");

  // TODO: Change Feed to fetch more when user reaches bottom of page
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await fetchDefault();
      setData(data);
      setIsLoading(false);
    };
    // console.log("fetching...");
    fetchDefaultData();
  }, []);

  const searchForDay = () => {
    let searchText = document.getElementById("searchBar").value;
    const fetchDayData = async () => {
      const data = [await fetchDay(searchText)]; // put into array to mirror multi-day format
      setData(data);
      setIsLoading(false);
    };
    // console.log("fetching...");
    fetchDayData();
  };

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
