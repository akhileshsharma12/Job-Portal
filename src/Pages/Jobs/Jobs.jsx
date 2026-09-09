import React, { useEffect, useState } from "react";
import "./Jobs.css";

const Jobs = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getJobs = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setJobs(data);
      console.log("Ok",data)
    } catch (error) {
      console.log(error);
      alert("Something went wrong while getting jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return <h2> Loading jobs .... </h2>;
  }

  return (
    <div className="">
      <section className="wrapper-1 job-secd-wrapper">
        <div className="search-box">
          <div className="search-box-title">
            <h2> Home &gt; Jobs &gt; Frontend Developer </h2>
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

      <section className="job-wrapper">
        <div className="job-wrapper-title">
          <div><h2 className=""> Hello , {user.name}</h2></div>
        </div>
        <div className="job-wrapper-main">
          <div className="job-wrapper-main-1">
            {jobs.length === 0 ? (
              <h2 className="no-jobs"> No jobs available </h2>
            ) : (
              jobs.map((job) => (
                <div className="specific-job" key={job.id}>
                  <div>
                    <h2> {job.jobTitle} </h2>
                    <span> Easy Apply </span>
                  </div>
                  <div>
                    <p> {job.company} </p>
                    <p> {job.location} </p>
                    <p> {job.description} </p>
                  </div>
                  <span> {job.salary} a year </span>
                </div>
              ))
            )}
          </div>
          <div className="job-wrapper-main-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
