const Button = (props) => {
    const cursorClass = props.cursor === true ? "" : " no-cursor";
    const opacityClass = props.opacity === false ? "" : " opacity";
    let dimensionClass;
    switch (props.dimension) {
        case "small":
            dimensionClass = " fd-btn--small";
            break;
        case "big":
            dimensionClass = " fd-btn--big";
            break;

        default:
            dimensionClass = "";
            break;
    }
    let btnTypeClasses;
    switch (props.type) {
        case "primary":
            btnTypeClasses = "fd-btn fd-btn--primary";
            break;
        case "secondary":
            btnTypeClasses = "fd-btn fd-btn--secondary";
            break;
        case "tertiary":
            btnTypeClasses = "fd-btn fd-btn--tertiary";
            break;
        case "white":
            btnTypeClasses = "fd-btn fd-btn--white";
            break;
        case "dark":
            btnTypeClasses = "fd-btn fd-btn--dark";
            break;
        case "green":
            btnTypeClasses = "fd-btn fd-btn--green";
            break;
        case "violet":
            btnTypeClasses = "fd-btn fd-btn--violet";
            break;
        case "blue":
            btnTypeClasses = "fd-btn fd-btn--blue";
            break;
        case "red":
            btnTypeClasses = "fd-btn fd-btn--red";
            break;

        default:
            btnTypeClasses = "fd-btn fd-btn--primary";
            break;
    }
    return (
        <a
            className={
                btnTypeClasses + cursorClass + opacityClass + dimensionClass
            }
        >
            {props.icon && <span className="fd-btn__icon">{props.icon}</span>}
            <span className="fd-btn__label">{props.title}</span>
            {props.suffix && (
                <span className="fd-btn__suffix">{props.suffix}</span>
            )}

            {props.children}
        </a>
    );
};

export default Button;
