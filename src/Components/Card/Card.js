import React, { useEffect, useState } from "react";
import "./Card.scss";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
const TruncatedText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const truncatedText = text.substring(0, maxLength) + "...";

  return <p>{truncatedText}</p>;
};
const Card = ({
  name,
  clientpic,
  userpic,
  username,
  friendcount,
  chatcount,
  attachmentcount,
  datetitle,
  _id,
}) => {
  const longText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus repellendus illo, cupiditate debitis aspernatur fugiat omnis excepturi ut nam.";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  };
  

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadResponse, setUploadResponse] = useState(0);

  const handleFileChange = (e) => {
    e.preventDefault()
    const files = e.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append(`images`, file);
      
  
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadResponse(response.data.data);
     
      // If the upload is successful, update the state with the response
      setShow(false);
      console.log("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };
 
  
 
  
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="d-flex">
            <img src={clientpic} alt="" />
            <p>{name}</p>
          </div>
          <div className="d-flex">
            <img src={userpic} alt="" />
            <p>{username}</p>
          </div>
        </div>
        <div className="middle">
          <div className="d-flex-only">
            <img src="./assets/images/icons/description_icon.png" alt="" />
            <TruncatedText text={longText} maxLength={31} />
          </div>
          <img
            className="rightmiddle"
            src="./assets/images/icons/middleicon.png"
            alt=""
          />
        </div>
        <div className="bottom">
          <div className="d-flex">
            <img src="./assets/images/friend_1.png" alt="" />
            <img src="./assets/images/friend_2.png" alt="" />
            <div className="friendcount">{friendcount}+</div>
            <div className="chatcount d-flex">
              <img src="./assets/images/icons/chat.png" alt="" />
              {chatcount}
            </div>
            <div className="chatcount d-flex" onClick={() => handleShow(_id)}>
              <img src="./assets/images/icons/attachment.png" alt="" />
              {uploadResponse?uploadResponse:selectedFiles.length}
            </div>
            <div className="chatcount d-flex">
              <img src="./assets/images/icons/date.png" alt="" />
              {datetitle}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleUpload}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading {_id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" multiple onChange={handleFileChange} />

          <div className="mt-4">
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Upload
          </Button>

        </Modal.Footer>
          </form>
      </Modal>
    </>
  );
};

export default Card;
