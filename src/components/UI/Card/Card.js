const Card = (props) => {
    return (
        <div className="fd-card fd-shadow" key={props.title ? props.title : ""}>
            {props.children}
        </div>
    );
};

export default Card;
