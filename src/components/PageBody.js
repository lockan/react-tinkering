import {Greeting} from './Greeting'
import {BoxGrid} from './BoxGrid'

function PageBody() { 
    return (
        <div className='App-body'>
            <div><p><Greeting name="Andrew"/></p></div>
            <p/>
            <div>This is the page body. It's actually just a div. There's a body tag at the top level.
            <br/>It is also a component. It displays other components.</div>
            <p/>
            <div>... like this grid of boxes, which is also a component
                <br/><BoxGrid count='100' />
            </div>
            <p>Omg when did CSS get so complicated!? </p>
        </div>
    )
}

export { PageBody };