import Link from "next/link";

const TaskItem = (props) => {
    return (
        <Link
            key={props.chiave}
            href={"/progetti/task/" + props.id}
            className="fd-project__task"
        >
            <h2 className="title">{props.title}</h2>
            <div className="key">{props.chiave + "-" + props.id}</div>
            <div className="type">{props.tipologia}</div>
            <div className="stato">{props.stato}</div>
        </Link>
    );
};

export default TaskItem;
