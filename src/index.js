import React, { Component } from 'react'
import {render} from 'react-dom'

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = () => {
    return (
        <div>
            <Book title="A Little Life" author="Hanya Yanagihara" pages={505}/>
            <Book title="Two From the Heart" author="James Patterson" pages={220}/>
            <Book title="Five Point Someone" author="Chetan Bhagat" pages={315}/>
        </div>
    )
}

render(
    <Library />,
    document.getElementById('root')
)
