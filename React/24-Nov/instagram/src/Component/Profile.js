import React, { Component } from "react";
import Post from "./Posts";
import { ProfileInfo, cardPost } from "../Data/DataPost";
import "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import "./_Profile.scss";
const Profile = () => {
  const renderStory = (profile, index) => {
    return (
      <div id="ProfileContainer" key={index}>
        <div className="Part1">
          <div className="Part1_1">
            <img src={profile.PFImg} alt="" width="200px" />
          </div>
          <div className="Part1_2">
            <div className="Part1_2_1">
              <h2>{profile.Name}</h2>
              <button>Edit Profile</button>
              <AiOutlineSetting size={25} className="Setting" />
            </div>
            <div className="Part1_2_2">
              <p>
                <b>{profile.Post}</b> Post
              </p>
              <p>
                <b>{profile.Followers}</b> Followers
              </p>
              <p>
                <b>{profile.Following}</b> Following
              </p>
            </div>
            <div className="Part1_2_3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                <br />
              </p>
            </div>
          </div>
        </div>
        <div class="Part2">
          <div className="Part2_1">
            <button>POSTS</button>
            <button>IGTV</button>
            <button>SAVED</button>
            <button>TAGGED</button>
          </div>
          <div className="Part2_2">
            <Post />
          </div>
        </div>
      </div>
    );
  };

  return (
    // Start Card
    <div className="ProfileContainer">{ProfileInfo.map(renderStory)}</div>
    //End Card
  );
};

export default Profile;
