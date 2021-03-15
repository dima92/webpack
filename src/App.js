import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')
            .text('Hello world from JQuery')
            .css({
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr/>
                <div className="box">
                    <h2 className="box-title">Box title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad enim fuga illum
                        labore
                        magni
                        maiores praesentium sapiente sint ullam. Assumenda!</p>
                </div>
            </React.Fragment>
        )
    }
}
