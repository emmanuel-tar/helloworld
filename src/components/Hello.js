import React from 'react'
const Hello=()=>{
    /*<div>
        <h1>
            Hello Emmanuel
        </h1>
    </div>
    */

    return React.createElement('div',{id:'hello',className:'DummyClass'},
    React.createElement('h1',null,'Hello Brother')
)
}

export default Hello