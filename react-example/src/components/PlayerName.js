export default function PlayerName (props) {
    
    const updateName = ((e) => {
        props.updatePlayerName(props.user, e.target.value);
    })
    
    return (
        <input type="text" placeholder="Input Name" onInput={updateName} />
    )
}
