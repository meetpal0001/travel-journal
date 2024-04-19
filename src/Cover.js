import "./styles.css"


export default function Cover(props) {

    return (
        <div className={props.txt ? "cover" : "back"} style={{ zIndex: props.index ? props.index : 1 }}>
            {props.txt ? <h1 className="coverHeading">
                {props.txt}
            </h1> : ''}
        </div>
    )
}