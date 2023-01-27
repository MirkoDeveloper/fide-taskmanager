// -> NEXT COMPONENTS
import { useRouter } from "next/router";
import Link from "next/link";

// -> COMPONENTS
import Project from "../Project/Project";
import ProjectList from "../Project/ProjectList/ProjectList";
import TaskItem from "../Task/TaskItem/TaskItem";
import Card from "../UI/Card/Card";
import MainBar from "../MainBar/MainBar";
import Commands from "../Commands/Commands";
import Login from "../Login/Login";

// -> ?
import { INTERNALS } from "next/dist/server/web/spec-extension/request";

// -> ASSETS
import logo from "../../assets/images/fides-logo.png";
import Button from "../UI/Button/Button";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Content = (props) => {
    const router = useRouter();
    const { id } = router.query;

    const dynamicProject = props.dynamicProject === 1 ? 1 : 0;
    const initialList = [
        {
            title: "Progetto: ABC",
            id: 1,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?",
            other: "",
            type: "sviluppo",
            date: "21 Aprile 2023",
            task: [
                {
                    key: "ABC123",
                    id: 1,
                    title: "Implementazione XYZ nel ABC",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "XYZ321",
                    id: 2,
                    title: "Implementazione ALTRO nel LIBRO",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "BCA999",
                    id: 3,
                    title: "Implementazione LGT nel core asset",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "TCT333",
                    id: 4,
                    title: "Lavorazione del core framework",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
                {
                    key: "LN22",
                    id: 5,
                    title: "Risoluzione bug nei pagamaneti",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
                {
                    key: "NNL4728",
                    id: 6,
                    title: "Implementazione del CSS",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
            ],
        },
        {
            title: "Project: Alfabeto",
            id: 2,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?",
            other: "",
            type: "design",
            date: "12 Giugno 2023",
            task: [
                {
                    key: "ABC123",
                    id: 1,
                    title: "Implementazione XYZ nel ABC",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "XYZ321",
                    id: 2,
                    title: "Implementazione ALTRO nel LIBRO",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "BCA999",
                    id: 3,
                    title: "Implementazione LGT nel core asset",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "TCT333",
                    id: 4,
                    title: "Lavorazione del core framework",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
                {
                    key: "LN22",
                    id: 5,
                    title: "Risoluzione bug nei pagamaneti",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
                {
                    key: "NNL4728",
                    id: 6,
                    title: "Implementazione del CSS",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
            ],
        },
        {
            title: "Progetto: Trenitialia",
            id: 3,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?",
            other: "",
            type: "backend",
            date: "30 Luglio 2023",
            task: [
                {
                    key: "ABC123",
                    id: 1,
                    title: "Implementazione XYZ nel ABC",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "XYZ321",
                    id: 2,
                    title: "Implementazione ALTRO nel LIBRO",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "BCA999",
                    id: 3,
                    title: "Implementazione LGT nel core asset",
                    stato: "In Lavorazione",
                    tipologia: "Task",
                },
                {
                    key: "TCT333",
                    id: 4,
                    title: "Lavorazione del core framework",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
                {
                    key: "LN22",
                    id: 5,
                    title: "Risoluzione bug nei pagamaneti",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
                {
                    key: "NNL4728",
                    id: 6,
                    title: "Implementazione del CSS",
                    stato: "Chiuso",
                    tipologia: "Task",
                },
            ],
        },
    ];

    switch (true) {
        case router.pathname === "/":
            return (
                <div className="fd-content">
                    <MainBar />
                    <Commands />
                    <Breadcrumbs />
                    <div className="fd-content__items">
                        <div className="fd-content__first">
                            <div className="fd-headings">
                                <div className="fd-headings__title">
                                    Working{" "}
                                    <span className="fd-numbers">(03)</span>
                                </div>
                            </div>
                            <Project></Project>
                            <Card>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </Card>
                            <Card>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga numquam, doloribus
                                placeat id, aliquid, eaque
                            </Card>
                        </div>
                        <div className="fd-content__second">
                            <div className="fd-headings">
                                <div className="fd-headings__title">
                                    In Progress{" "}
                                    <span className="fd-numbers">(05)</span>
                                </div>
                            </div>
                            <Card>Lorem ipsum dolor sit amet consectetur</Card>
                            <Card>
                                Lorem ipsum dolor sit amet consecteturLorem
                                ipsum dolor sit amet consectetur
                            </Card>
                            <Card>
                                Lorem ipsum dolor sit amet consecteturLorem
                                ipsum dolor sit amet consectetur
                            </Card>
                        </div>
                        <div className="fd-content__third">
                            <div className="fd-headings">
                                <div className="fd-headings__title">
                                    Completed{" "}
                                    <span className="fd-numbers">(03)</span>
                                </div>
                            </div>
                            <Card>Lorem ipsum</Card>
                            <Card>
                                Lorem ipsum dolor sit amet consecteturLorem
                                ipsum dolor sit
                            </Card>
                            <Card>Lorem ipsum d</Card>
                        </div>
                        <div className="fd-content__fourth">
                            <div className="fd-headings">
                                <div className="fd-headings__title">
                                    Others{" "}
                                    <span className="fd-numbers">(01)</span>
                                </div>
                            </div>
                            <Card>Lorem ipsum</Card>
                            <Card>
                                Lorem ipsum dolor sit amet consecteturLorem
                                ipsum dolor sit
                            </Card>
                            <Card>Lorem ipsum d</Card>
                        </div>
                    </div>
                </div>
            );
            break;
        case router.pathname === "/progetti":
            return (
                <div className="fd-content">
                    <MainBar />
                    {/* <Commands /> */}
                    <Breadcrumbs />
                    <ProjectList />
                </div>
            );
            break;
        case router.pathname === "/login":
            return <Login />;
            break;
        case dynamicProject === 1:
            const singleProject = initialList.find((obj) => obj.id == id);

            // COUNT TOTAL TASK
            const taskCounter = singleProject.task.length;
            // COUNT IN LAVORAZIONE TASK
            const wipTaskCounter = singleProject.task.filter(
                (task) => task.stato == "In Lavorazione"
            ).length;
            // COUNT TASK APERTI
            const openedTaskCounter = singleProject.task.filter(
                (task) => task.stato == "Aperto"
            ).length;
            // COUNT TASK CHIUSI
            const closedTaskCounter = singleProject.task.filter(
                (task) => task.stato == "Chiuso"
            ).length;

            return (
                <div className="fd-content">
                    <MainBar />
                    <Commands />
                    <Breadcrumbs />
                    <h1>{singleProject.title}</h1>
                    <div className="fd-content__items col-1">
                        <div className="fd-content__first full d-flex gap">
                            <Button
                                title="task"
                                type="green"
                                dimension="small"
                                opacity={true}
                                cursor={false}
                                suffix={taskCounter}
                            />
                            <Button
                                title="In Lavorazione"
                                type="violet"
                                dimension="small"
                                opacity={true}
                                cursor={false}
                                suffix={wipTaskCounter}
                            />
                            <Button
                                title="Chiusi"
                                type="red"
                                dimension="small"
                                opacity={true}
                                cursor={false}
                                suffix={closedTaskCounter}
                            />
                        </div>
                    </div>
                    <div className="fd-project">
                        <div className="fd-project__commands fd-shadow">
                            <div className="title">Task</div>
                            <div className="key">Chiave</div>
                            <div className="type">Tipo di Task</div>
                            <div className="date">Stato</div>
                        </div>
                        <div className="fd-project__tasks">
                            {singleProject.task.map((item, index, i) => (
                                <>
                                    <TaskItem
                                        title={item.title}
                                        chiave={item.key}
                                        tipologia={item.tipologia}
                                        stato={item.stato}
                                        id={item.id}
                                    />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            return (
                <>
                    <Breadcrumbs />
                    {dynamicProject}
                    <h1>default</h1>
                    <h2>{id}</h2>
                </>
            );
            break;
    }
};

export default Content;
