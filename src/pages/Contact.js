import { useLocation } from 'react-router-dom'

export default function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

    return (
        <div>
            <h2>Hey {name}, Contact us here ...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, obcaecati voluptatum atque tenetur quo porro in omnis incidunt voluptates iusto accusantium! Nemo, quaerat! Id, nihil alias quaerat deserunt sunt reiciendis.</p>
        </div>
    )
}
