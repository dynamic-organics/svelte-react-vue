export default function UserCount (props) {
    // As original markup does not include a root DOM element, required use of React.Fragment
    return (
        <>
            <h3>Current Count for {props.user || "Unknown"}:</h3>
            <div>{props.currentCount || 0}</div>
        </>
    )
}
