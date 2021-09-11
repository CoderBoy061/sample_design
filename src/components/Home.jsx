import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import fakeImage from "../assests/home1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init({
  duration: 2000,
});

const Home = () => {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios
      .get(" https://medtest.utkarshh.in/api/vol/community-list/")
      .then((res) => {
        console.log(res.data.data);
        setFile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // please note some images are missing on the api , so that i set another image
  const renderData = () => {
    if (file===0) {
      return <CircularProgress />;
    } else {
      return file.map((data) => (
        <div className="data_cards" key={data.id} data-aos="fade-up">
          <div className="file_images">
            <img
              src={data.image ? data.image : fakeImage}
              alt="Image"
              className="image"
            />
            <p className="writer">{data.writer_name}</p>
          </div>

          <div className="title_content">
            <h2 className="title">{data.title}</h2>
            <p className="content">{data.content}</p>
          </div>
        </div>
      ));
    }
  };
  return <div className="home">{renderData()}</div>;
};

export default Home;
