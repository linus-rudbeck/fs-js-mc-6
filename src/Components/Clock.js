import { useState, useEffect } from "react";

function Clock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Starta en timer som körs varje sekund
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        // När klockan tas bort, stäng av timern
        return () => clearInterval(interval)
    }, [])

    return (<div>
        <h2>Time: {time.toLocaleTimeString()}</h2>
    </div>)
}

export default Clock;