import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiComment, BiBookmark } from "react-icons/bi";
import { ImCompass2 } from "react-icons/im";
import { FaRegHeart, FaHeart, FaSearch, FaRegComment } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import "./_Cards.scss";
class CountLike extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  }

  Comment(e) {
    e.preventDefault();
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <div className="Icon">
          <div class="bookmark1">
            <a className="Heart" onClick={this.handleIncrement}>
              <BsHeart size={35} className="Icon_1" />
            </a>
            <a href="#">
              <BiComment size={35} className="Icon_2" onClick={this.Comment} />
            </a>
            <a href="#">
              <RiSendPlaneFill size={35} className="Icon_1" />
            </a>
          </div>
          <a href="#" class="bookmark">
            <BiBookmark size={35} className="Icon_1" />
          </a>
        </div>
        <p className="Likes">{counter} Likes</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <sub>
          <b>19 HOURS AGO</b>
        </sub>
      </div>
    );
  }
}

export default CountLike;
