import React from "react";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import "./SearchPage.css";

function SeachPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneSharpIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="freeCodeCamp.org"
        verified
        subs="9.55M subscribers"
        noOfVideos="1.6K"
        description="Learn to code for free."
      />

      <hr />

      <VideoRow 
        views= "31K"
        subs= "9.55M"
        description= "Learn High Level System Design by coding a YouTube clone. Starting with a basic flow, you'll gradually add three key services: ..."
        timestamp= "18 hours ago"
        channel= "freeCodeCamp.org"
        title="Learn High-Level System Design by Coding YouTube – Full Course" 
        image="https://i.ytimg.com/vi/FiXOaYnW64w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1h6PK97lrLCmW3LvGEuwzrB14g" 
      />
      <VideoRow 
        views= "40K views"
        subs= "9.55M"
        description= "This comprehensive Python data science course covers the essential through theory, demos, and real-world applicati..."
        timestamp= "1 day ago"
        channel= "freeCodeCamp.org"
        title="Python for Data Science Course – Hands-on Projects with EDA, AB Testing & Business Intelligence" 
        image="https://i.ytimg.com/vi/FTpmwX94_Yo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8sjVRIJ-Eg-AaOIdrzhSwb3Obkw" 
      />
      <VideoRow 
        views= "22K views"
        subs= "9.55M"
        description= "On this week's episode of the podcast, freeCodeCamp founder Quincy Larson interviews Dr. Chuck. He's a software en..."
        timestamp= "4 days ago"
        channel= "freeCodeCamp.org"
        title="How to Outsmart AI as a Developer with Dr. Chuck [Podcast #127]" 
        image="https://i9.ytimg.com/vi/skg2XRUMcGQ/hq720_custom_2.jpg?sqp=CNiQp7MG-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg8IEAofzAP&rs=AOn4CLAJ6xrJUp1_audIJ86oUTA9QrkWfg" 
      />
      <VideoRow 
        views= "27K"
        subs= "9.55M"
        description= "Prepare for the Azure DevOps Engineer Expert Certification and pass! Learn to deliver Microsoft DevOps solutions that..."
        timestamp= "5 days ago"
        channel= "freeCodeCamp.org"
        title="Azure DevOps Engineer Expert Certification (AZ-400) – Full Course to PASS the Exam" 
        image="https://i.ytimg.com/vi/11KT1hPNkY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvoeqK7o28BlWnJgzLbPhhpxJjJA" 
      />
      <VideoRow 
        views= "35K"
        subs= "9.55M"
        description= "Learn how to build a decentralized, fully distributed content-addressable file storage system using Go that can handl..."
        timestamp= "6 days ago"
        channel= "freeCodeCamp.org"
        title="Distributed File Storage In Go – Full Course" 
        image="https://i.ytimg.com/vi/IoY6bE--A54/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALzZJc7bsPfs_akLgZsjG4TZm8JQ" 
      />
      <VideoRow 
        views= "29K"
        subs= "9.55M"
        description= "Learn how to code REST APIs using Next.js 14. You'll learn to create multiple MongoDB models, how to protect API routes..."
        timestamp= "7 days ago"
        channel= "freeCodeCamp.org"
        title="Building REST APIs with Next.js 14 – Course for Beginners" 
        image="https://i.ytimg.com/vi/aEFkWxUNAVc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuBMZDcI5TGThetREy3xTjMw13pg" 
      />
      <VideoRow 
        views= "29K"
        subs= "9.55M"
        description= "In this beginner's course, you will build a fully functional YouTube Clone using Flutter UI kit, Firebase as backend, an..."
        timestamp= "8 days ago"
        channel= "freeCodeCamp.org"
        title="Full Stack Flutter, Firebase and Riverpod – Build a YouTube Clone" 
        image="https://i.ytimg.com/vi/NEYcKvwbW-w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-yddtOP8-ClYWgfYqN8s4yECibg" 
      />
      <VideoRow 
        views= "19K"
        subs= "9.55M"
        description= "On this week's episode of the podcast, freeCodeCamp founder Quincy Larson interviews Suz Hinton. She's a software..."
        timestamp= "11 days ago"
        channel= "freeCodeCamp.org"
        title="From Software Engineer to White Hat Hacker with Suz Hinton [Podcast #126]" 
        image="https://i.ytimg.com/vi/07lfmzGHrSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvjk6Anc585UhJUcNHWCshBRmkhw" 
      />
      <VideoRow 
        views= "48K"
        subs= "9.55M"
        description= "Learn the basics of go by building a full stack web app with React and Go. The project also features TypeScript, Mo..."
        timestamp= "12 days ago"
        channel= "freeCodeCamp.org"
        title="Go and React Full Stack App – Go Tutorial for Node Developers" 
        image="https://i.ytimg.com/vi/lNd7XlXwlho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmWdQYcQLhf7GTrClF0tcIpAFrzA" 
      />
      <VideoRow 
        views= "109K"
        subs= "9.55M"
        description= "In this complete C programming course, Dr. Charles Severance (aka Dr. Chuck) will help you understand computer architecture ..."
        timestamp= "13 days ago"
        channel= "freeCodeCamp.org"
        title="Learn C Programming and OOP with Dr. Chuck [feat. classic book by Kernighan and Ritchie]" 
        image="https://i.ytimg.com/vi/PaPN51Mm5qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOnK9kitKaC7X5FVtHxbOSoF99_A" 
      />

    </div>
  )
}

export default SeachPage