const Job = ({ title, contractType, country, city, className }) => {
  return (
    <div className={`job-container ${className}`}>
      <h2>{title}</h2>
      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
};
export default Job;
