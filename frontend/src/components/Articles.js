import React from "react";
import ContentRec from "./ContentRec";
import Autoartc from "./Autoartc";
import axios from "axios";
import { useEffect, useState } from "react";

function Articles(props) {
  const n = props.number;

  const [loading, setLoading] = useState(true);
  const [homeProjects, setHomeProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios
        .get("/api/projects/getall/-1")
        .then((resp) => {
          return resp.data;
        })
        .catch((e) => console.log(e));
      setHomeProjects(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Filter projects with cardType equal to 1
  const filteredProjects = homeProjects.filter((project) => project.cardType === 1);

  if (filteredProjects.length > 0 || !loading) {
    return (
      <div>
        {filteredProjects.map((project, i) => {
          const isImg = project.imgs.length > 0 ? true : false;
          const isClickImg = project.imgs.length >= 2 ? true : false;
          return (
            <Autoartc
              key={i}
              prjId={project._id}
              title={project.title}
              hex1={project.hex1}
              hex2={project.hex2}
              isImg={isImg}
              imgUrl={isImg ? project.imgs[0].path_url : ""}
              parag1={project.parag1}
              isClickImg={isClickImg}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>No projects found or still loading</div>;
  }
}

export default Articles;