import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JobsService from "../services/jobs.service";
import parse from 'html-react-parser';

function JobDetail() {
  let { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = () => {
      JobsService.getJobDetail(id).then(
        response => {
          setError("");
          setJob(response.data.data);
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
      <div className="flex flex-row w-full grow  px-6 pt-2 pb-8 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
        {error.length ? error : ""}
        {
          job && 
          job !== null && (
            <>
              <div className="flex flex-col w-full lg:w-1/2 grow flex-row px-6 pt-2 pb-8">
                <span className="text-sm text-gray">{job.type}/{job.location}</span>
                <h2 className="text-lg font-bold mb-3">{job.title}</h2>
                <div className="pt-3 border-t-2 border-gray">{parse(job.description)}</div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 grow flex-row px-6 pt-2 pb-8">
                <div className="border p-2 mb-3">
                  <img src={job.company_logo} />
                  <a href={job.company_url}>{job.company_url}</a>
                </div>
                <div className="border p-2">
                  <h2>How to Apply</h2>
                  {parse(job.how_to_apply)}
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default JobDetail;
