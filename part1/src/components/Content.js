import Part from "./Part";
const Content = (props) => {
    return <>
        <Part name={props.parts[0].name} data={props.parts[0].exercises} />
        <Part name={props.parts[1].name} data={props.parts[1].exercises} />
        <Part name={props.parts[2].name} data={props.parts[2].exercises} />
    </>
}

export default Content;