import { useState } from "react";

function NameForm({ onSubmit }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Hindra sidan från att laddas om
        onSubmit(name);
    }

    return (<form onSubmit={handleSubmit}>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Save name</button>
        
    </form>);
}

export default NameForm;