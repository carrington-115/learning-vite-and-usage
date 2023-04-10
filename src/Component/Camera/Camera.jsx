import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsCameraFill } from "react-icons/bs";
import Webcam from "webcam-easy";

function Camera() {
  // let mediaDevices = navigator.mediaDevices;
  let videoElement = document.getElementById("webcam");
  let canvasElement = document.getElementById("canvas");
  const [snap, setSnap] = useState(false);

  // the video file
  // const callOpenCamera = () => {
  //   mediaDevices
  //     .getUserMedia({
  //       video: true,
  //       audio: false,
  //     })
  //     .then(() => {
  //       video.srcObject = stream;
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  const handleWebCamStart = () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);

    webcam
      .start()
      .then(() => {
        console.log("the webcam is on");
      })
      .catch((e) => prompt(e.message));
  };

  const handleSnapPicture = () => {
    let webcam = new Webcam(videoElement, "user", canvasElement);

    webcam.snap();
  };

  useEffect(() => {
    setTimeout(() => {
      setSnap(true);
    }, 250);
    if (snap === true) {
      handleWebCamStart();
    } else {
      prompt("Camera not coming try again");
    }
  }, [snap]);

  return (
    <Container>
      <div className="camera-container">
        <div className="video">
          <video
            id="webcam"
            autoplay
            playsinline
            width="1000"
            height="480"
          ></video>
        </div>

        <canvas id="canvas"></canvas>
      </div>
      <div className="button-container">
        <div className="icon" onClick={handleSnapPicture}>
          <BsCameraFill />
        </div>
      </div>
    </Container>
  );
}

export default Camera;

const Container = styled.div`
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;

  .camera-container {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    position: relative;

    /* video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
    } */
    .video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.2);
      video {
        width: 100%;
        height: 100%;
      }
    }
    canvas {
      position: absolute;
      z-index: 3;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }
  .button-container {
    width: 15%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 0.5cm 0.1cm;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.05s 250ms ease-in;
      &:hover {
        border-color: black;
        background-color: transparent;
        transition: all 0.05s 250ms ease-in;

        svg {
          fill: black;
        }
      }
      svg {
        width: 60%;
        height: 60%;
        fill: white;
      }
    }
  }
`;
