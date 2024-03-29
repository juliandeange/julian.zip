import '../styles/App.css'
import { 
    WorkData1,
    WorkData2,
    WorkData3,
    WorkData4,
    WorkData5
} from '../data/data-employment'
import {
    Covontario1,
    Covontario2,
    Criptoz,
    CrowdControl
} from '../data/data-projects'

const Employment = () => {

    return(
        <div style={{ maxWidth: '50%' }}>
            <div className='Header2'>
                Work
            </div>
            <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                Software Engineer | MDA
            </div>
            <div className='SubheadingDate'>
                Jan 2018 - Present
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {WorkData1}
                <br />
                <br />
                {WorkData2}
                <br />
                <br />
                {WorkData3}
                <br />
                <br />
                {WorkData4}
                <br />
                <br />
                {WorkData5}
            </div>
        </div>
    )

}

export default Employment
