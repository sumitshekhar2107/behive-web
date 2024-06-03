import React from "react";
export {};

const DownloadApp: React.FC = () => {
  return (
    <>
      <div className="overview-title">
        <h2>Download our app now</h2>
      </div>
      <div className="download-app-container">
        <div className="image-column">
          <img
            src="https://i.postimg.cc/9MZ27x64/Group-1000007102.png"
            alt="App Preview"
            className="app-image"
          />
        </div>
        <div className="text-column">
          <p>
            Boost your productivity with the BHIVE Workspace app. Elevate your
            <br></br>
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="button-container">
            <img
              src="https://i.postimg.cc/GmV6xFJv/image-1939.png"
              alt="App Store"
              className="button-image"
            />
            <img
              src="https://i.postimg.cc/1zF2C8J2/image-1938.png"
              alt="Google Play"
              className="button-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
