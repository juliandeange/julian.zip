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

const Projects = () => {

    return(
        <div style={{ maxWidth: '50%' }}>
            <div className='Header2'>
                Projects
            </div>
            <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                Covontario.ca
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {Covontario1}
                <br />
                <br />
                {Covontario2}
            </div>
        </div>
    )

}

export default Projects
