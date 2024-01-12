import React from "react";
import "./CategoryBox.scss";
import Card from "../Card/Card";
import { Button } from "react-bootstrap";
const CategoryBox = ({ flagcolor, text, api }) => {
  return (
    <>
      <div className="categoryboxmain">
        <div className="flexwrap">
          <div className="div d-flex">
            {flagcolor ? (
              <>
                <div
                  className="smallflag"
                  style={{ background: flagcolor }}
                ></div>
              </>
            ) : (
              ""
            )}
            <span>{text}</span>
          </div>
          <div className="div">
            <div className="smallbox">0</div>
          </div>
        </div>
        <div className="cardarea">
          {api.map((item, key) => {
            return (
              <Card
                _id={item._id}
                name={item.name}
                clientpic={item.clientpic}
                username={item.username}
                userpic={item.userpic}
                friendcount={item.friendcount}
                chatcount={item.chatcount}
                attachmentcount={item.attachmentcount}
                datetitle={item.datetitle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
