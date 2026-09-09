import React, { useState } from "react";
import "./PostJob.css";

const PostJob = () => {


  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobType: "",
    salary: "",
    experience: "",
    description: "",
    skills: "",
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(jobData)
      });

      if(response.ok) {
        alert('Job posted successfully');
        setJobData({
             jobTitle: "",
            company: "",
            location: "",
            jobType: "",
            salary: "",
            experience: "",
            description: "",
            skills: "",
        })
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    // console.log(jobData);

    alert("Job posted successfully!");  
  };

  return (
    <div className="post-job-container">

      <div className="post-job-title">
        <h2>Post a Job</h2>
        <p>Find the right talent for your organization</p>
      </div>


      <div className="post-job-main">

        <div className="post-job-info">
          <h2>Find your next great hire</h2>

          <p>
            Tell us about the position you're hiring for and connect with
            talented candidates who match your requirements.
          </p>

          <div className="job-benefits">
            <div>
              <h3>01</h3>
              <p>Reach qualified candidates</p>
            </div>

            <div>
              <h3>02</h3>
              <p>Manage your job applications</p>
            </div>

            <div>
              <h3>03</h3>
              <p>Find the right talent faster</p>
            </div>
          </div>
        </div>



        <div className="post-job-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label>Job Title</label>

                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Frontend Developer"
                  value={jobData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Company Name</label>

                <input
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={jobData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="Hyderabad"
                  value={jobData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Job Type</label>

                <select
                  name="jobType"
                  value={jobData.jobType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select job type</option>

                  <option value="Full Time">Full Time</option>

                  <option value="Part Time">Part Time</option>

                  <option value="Contract">Contract</option>

                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Salary</label>

                <input
                  type="text"
                  name="salary"
                  placeholder="₹5 - ₹8 LPA"
                  value={jobData.salary}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Experience</label>

                <select
                  name="experience"
                  value={jobData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience</option>

                  <option value="Fresher">Fresher</option>

                  <option value="1-2 Years">1 - 2 Years</option>

                  <option value="3-5 Years">3 - 5 Years</option>

                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>
            </div>

      

            <div className="form-field full-width">
              <label>Job Description</label>

              <textarea
                name="description"
                placeholder="Describe the job role, responsibilities and requirements..."
                value={jobData.description}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>


            <div className="form-field full-width">
              <label>Required Skills</label>

              <input
                type="text"
                name="skills"
                placeholder="e.g. React, JavaScript, HTML, CSS"
                value={jobData.skills}
                onChange={handleChange}
                required
              />

              {/* <small>Separate multiple skills using commas</small> */}
            </div>

           

            <div className="post-job-submit">
              <button type="submit">Post Job</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
