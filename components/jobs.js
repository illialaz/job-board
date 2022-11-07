import Job from 'components/job'

const Jobs = ({ jobs, isDashboard }) => {
  if (!jobs) return null

  return (
    <>
      {jobs.map((job, index) => (
        <Job key={job.title + index} job={job} isDashboard={isDashboard} />
      ))}
    </>
  )
}

export default Jobs
