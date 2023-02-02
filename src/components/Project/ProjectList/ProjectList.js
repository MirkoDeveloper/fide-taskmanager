import Link from "next/link";
import { useState } from "react";

const ProjectList = (props) => {
    const [projectList, setProjectList] = useState(props.list);
    return (
        <div className="fd-projectlist">
            <div className="fd-projectlist__commands fd-shadow">
                <div className="title">Progetto</div>
                <div className="key">Chiave</div>
                <div className="projectLead">Capo Progetto</div>
                <div className="type">Tipo di Progetto</div>
                <div className="date">Scadenza</div>
            </div>
            <div className="fd-projectlist__list fd-shadow">
                {projectList.map((item) => (
                    <Link
                        href={"/progetti/" + item.id}
                        className="fd-projectlist__item"
                        key={item.id}
                    >
                        <h2 className="title">{item.title}</h2>
                        <div className="key">{item.acronym}</div>
                        <div className="project-lead">{item.projectLead}</div>
                        <div className="type">{item.type}</div>
                        <div className="date">{item.date}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
