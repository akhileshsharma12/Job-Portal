import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="wrapper-1">
        <div className="search-box">
          <div className="search-box-title">
            <h2> Partner for Talent </h2>
          </div>
          <div className="search-box-fields">
            <div className="specific-field">
              <label htmlFor=""> search for </label>

              <input type="text" placeholder="job title or keyword" />
            </div>
            <div className="specific-field">
              <label htmlFor=""> Where ? </label>

              <input type="text" placeholder="location or postcode" />
            </div>
            <div className="specific-field">
              <label htmlFor=""> range </label>

              <input type="text" placeholder="10 km" />
            </div>
            <div>
              <div></div>
              <br />
              <button> search job </button>
            </div>
          </div>
          <div className="search-box-location">
            <p> Use Current Location </p>
          </div>
        </div>
      </section>

      <section className="wrapper-2">
        <div>
          <p className="wrap2-p-1">
            {" "}
            are you a job seeker? choose the appropriate option based on your
            needs.
          </p>
        </div>

        <div>
          <p className="wrap2-p-2"> submit your resume </p>
          <br />
          <p className="wrap2-p-2"> apply for trending jobs</p>
        </div>

        <div>
          <p className="wrap2-p-3"> refer a friends </p>
          <br />
          <p className="wrap2-p-3"> view all current job openinga </p>
        </div>
      </section>

      <section className="wrapper-4">
        <div className="wrap4-main">
          <div className="wrap4-main-1">
            <h2> reach out to us </h2>
            <h2> do you have a request? feel free <br /> to contact us. </h2>
          </div>
          <div className="wrap4-main-2">
            <button> Contact </button>
          </div>
        </div>

      </section>

      <section className="wrapper-3">
        <div className="wrap3-main">
          <div className="wrap3-main-1">
            <div>
              <h2> we'd love to have you over. </h2>
              <p> find a branch close to you </p>
            </div>
            <div className="wrap3-main-haif">
              <input type="text" placeholder=" postcode / zip " />
              <button> &#10132; </button>
            </div>
          </div>
          <div className="wrap3-main-2">
            <img
              src="https://www.randstad.in/s3fs-media/l-in/public/bynder/4E5275AF-3147-4E3D-95A92CF52E7A0368-1.svg?VersionId=tc2j_Z4LLUIRRpfGii.dZJs501p10Ukp"
              alt="image"
            />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
