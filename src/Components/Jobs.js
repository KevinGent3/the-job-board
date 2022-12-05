import Job from "./Job";
const Jobs = () => {
  return (
    <div className="jobs-container">
      <Job
        className={"red"}
        title={"Full Time Sales Associate - Sydney Boutique"}
        contractType={"CDI"}
        country={"Australie"}
        city={"Sydney"}
      ></Job>
      <Job
        className={"green"}
        title={"Agent de sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
      ></Job>
      <Job
        className={"yellow"}
        title={"Responsable d'Atelier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      ></Job>
      <Job
        className={"blue"}
        title={"Chef de Projets"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      ></Job>
      <Job
        className={"pink"}
        title={"Développeur React.js"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      ></Job>
      <Job
        className={"red"}
        title={"Sales Associate Stockholm"}
        contractType={"CDI"}
        country={"Suède"}
        city={"Stockholm"}
      ></Job>
      <Job
        className={"green"}
        title={"Vendeur/se -Crans Montana"}
        contractType={"CDI"}
        country={"Suisse"}
        city={"Crans-Montana"}
      ></Job>
      <Job
        className={"yellow"}
        title={"CRM & Data Quality Analyst"}
        contractType={"CDI"}
        country={"USA"}
        city={"New-York"}
      ></Job>
      <Job
        className={"blue"}
        title={"Infirmier"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
      ></Job>
    </div>
  );
};
export default Jobs;
