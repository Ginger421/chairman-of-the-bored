const UserGreeting = (props) => {
    return <span><h1>You're Bored again?! So are we, find your next activity! </h1></span>
}

const GenericGreeting = (props) => {
    return <h1>We know you're bored! Signup!</h1>
}

const Greeting = (props) => {
    const LoggedIn = props.LoggedIn
    if (LoggedIn) {
        return (
            <UserGreeting/>
        )
    } else {
        return (
            <GenericGreeting/>
        )
    }
    
}

export default Greeting; 