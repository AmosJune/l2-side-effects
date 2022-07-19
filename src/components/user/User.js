import React, { useEffect, useMemo, useState } from "react";

const RANDOM_USER_API = "https://randomuser.me/api"

function User(){

    const [name, setName] = useState("name")
    const [email, setEmail] = useState("email")
    const [count, setCount] = useState(0)

    function updateCount(currentCount){
        setCount(currentCount + 1)
    }

function randomize(){
    fetch(RANDOM_USER_API)
        .then((resp) => resp.json())
        .then((jsonData) => {
            const results = jsonData.results
            const user = results[0]
            const userName = `${user.name.title}: ${user.name.first} ${user.name.last}`
            const userEmail = `${user.email}`
            setName(userName)
            setEmail(userEmail)
        })
}

    useEffect(
        randomize, [count]
    )

    return(
        <div>
            <center>
                <h2>{name}</h2>
                <h5>{email}</h5>
                <button onClick={() => updateCount(count)}>RANDOMIZE</button>
            </center>
        </div>
    )

}

export default User