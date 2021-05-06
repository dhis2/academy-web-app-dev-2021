import { useDataQuery } from "@dhis2/app-runtime";
import * as classes from "../App.module.css";

const query = {
  results: {
    resource: "userGroups",
    params: {
      paging: false,
      fields: ["*"],
    },
  },
};

const Home = () => {
  const { data, error, loading } = useDataQuery(query);

  if (loading) return "...";
  if (error) return `ERROR: ${error}`;

  console.log(data);
  return (
    <div className={classes.page}>
      <ol>
        {data.results.userGroups.map((ug) => (
          <li>{ug.displayName}</li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
