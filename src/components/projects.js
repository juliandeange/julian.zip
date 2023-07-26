import '../styles/App.css'
import {
    Covontario1,
    Covontario2,
    Criptoz,
    CrowdControl
} from '../data/data-projects'
import LinkIcon from '@mui/icons-material/Link';

const Projects = () => {

    return(
        <div style={{ maxWidth: '50%' }}>
            <div className='Header2'>
                Projects
            </div>
            <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                <a className='Link' href='https://covontario.ca' target='_blank' rel="noreferrer">
                    Covontario.ca
                </a>
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {Covontario1}
                <br />
                <br />
                {Covontario2}
            </div>
            <div className='Subheading' style={{ marginTop: 40, marginBottom: 10 }}>
                <a className='Link' href='https://criptoz.com' target='_blank' rel="noreferrer">
                    Criptoz.com
                </a>
                {/* <LinkIcon sx={{ fontSize: 26 }}/> */}
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {Criptoz}
            </div>
            <div className='Subheading' style={{ marginTop: 40, marginBottom: 10 }}>
                <a className='Link' href='https://controlcrowd.ca' target='_blank' rel="noreferrer">
                    Controlcrowd.ca
                </a>
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {CrowdControl}
            </div>
        </div>
    )
}

export default Projects
