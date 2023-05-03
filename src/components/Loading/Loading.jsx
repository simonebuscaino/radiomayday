import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { ProgressSpinner } from 'primereact/progressspinner';
function Loading({
    text = "",
    size = "sm",
}) {
    return (
        <>
            <ProgressSpinner animation="border" size={size} />{text ? " " + text : ""}
        </>
    )
}

export default Loading
