// // import React, { Component, useState } from "react";
// import PF from "../Instagram Project/Image/PFP_11.jpg";
import { cardPost } from "../Data/DataPost";
import "react-icons/fi";
import "react-icons/ri";
import "react-icons/im";
import "react-icons/bs";
import "react-icons/bi";
// import { RiSendPlaneFill } from "react-icons/ri";
// import { BiComment, BiBookmark } from "react-icons/bi";
// import { ImCompass2 } from "react-icons/im";
// import { FaRegHeart, FaHeart, FaSearch, FaRegComment } from "react-icons/fa";
// import { BsHeart } from "react-icons/bs";
import "./_Cards.scss";
import CountLike from "./CountLike";
// import TodoForm from "./Todo list/TodoForm";
import TodoList from "./Todo list/TodoList";
const Cards = () => {
  const renderCard = (card, index) => {
    return (
      <div className="Card" key={index}>
        <div className="CardPost">
          <a href="#" className="PF_card">
            <div className="PF_HP">
              <img src={card.PFImg} alt="" width="60px" />{" "}
            </div>
            <div>
              <p>{card.Name}</p>
              <span>{card.Address}</span>
            </div>
          </a>
          <div className="PT_HP">
            <img src={card.PostImg} alt="" width="100%" />{" "}
          </div>
          <div className="Description">
            <CountLike />
          </div>
          <label className="CommentBox">
            {" "}
            <TodoList />
            {/* <TodoForm /> */}
          </label>
          {/* <div className="Comments">
            <TodoList />
          </div>  */}
        </div>
      </div>
    );
  };

  return (
    // Start Card
    <div className="Container">{cardPost.map(renderCard)}</div>
    //End Card
  );
};

export default Cards;
