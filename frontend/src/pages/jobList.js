import React, { useState, useEffect } from 'react'
import JobsService from "../services/jobs.service"
import { JobItem } from "../components/jobItem/jobItem"

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = () => {
      JobsService.getJobLists().then(
        response => {
          setError("");
          setJobs(response.data.data);
        },
        error => {
          setError((error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString())
        }
      );
    }

    loadData();
  }, [])

  return (
    <div className="flex h-full flex-col">
      <div className="flex w-full grow flex-col gap-2 px-6 pt-2 pb-8">
        {error.length ? error : ""}
        {
          jobs &&
          jobs.length > 0 &&
          jobs.map((job) => (
            <JobItem item={job} />
          ))
        }
      </div>
    </div>
  );
}

export default JobList;
