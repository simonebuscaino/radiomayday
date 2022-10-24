import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loading({
    text = "",
    size = "sm",
}) {
    return (
        <>
            <Spinner animation="border" size={size} />{text ? " " + text : ""}
        </>
    )
}

export default Loading
