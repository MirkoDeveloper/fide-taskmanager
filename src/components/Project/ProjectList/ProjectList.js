import Link from "next/link";
import { useState } from "react";

const ProjectList = () => {
    const initialList = [
        {
            title: "Progetto: ABC",
            id: 1,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?",
            other: "",
            type: "sviluppo",
            date: "21 Aprile 2023",
        },
        {
            title: "Project: Alfabeto",
            id: 2,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?",
            other: "",
            type: "design",
            date: "12 Giugno 2023",
        },
        {
            title: "Progetto: Trenitialia",
            id: 3,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?",
            other: "",
            type: "backend",
            date: "30 Luglio 2023",
        },
    ];
    const [projectList, setProjectList] = useState(initialList);
    return (
        <div className="fd-projectlist">
            <div className="fd-projectlist__commands fd-shadow">
                <div className="title">Progetto</div>
                <div className="key">Chiave</div>
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
                        <div className="key">{item.id}</div>
                        <div className="type">{item.type}</div>
                        <div className="date">{item.date}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
