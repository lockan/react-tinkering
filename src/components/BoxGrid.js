function BoxGrid(props) { 
    let boxes = []
    for (let i = 0; i < props.count; i++ ) { 
        boxes.push(makeBox(i));
    }
    return <div className="App-gridbox-container">{boxes}</div>
}

function makeBox(contents) { 
    return (
        <div className="App-gridbox">{contents}</div>
    )
}

export { BoxGrid };