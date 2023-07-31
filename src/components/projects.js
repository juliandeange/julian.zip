import '../styles/App.css'
import {
    Covontario1,
    Covontario2,
    Criptoz,
    CrowdControl
} from '../data/data-projects'
import github from '../media/github-mark.png'
import LinkIcon from '@mui/icons-material/Link'

const Projects = () => {

    return(
        <div style={{ maxWidth: '50%' }}>
            <div className='Header2'>
                Projects
            </div>
            <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                Covontario.ca
                <a className='Link' href='https://github.com/juliandeange/Covontario' target='_blank' rel="noreferrer">
                    <img className='ImageTooltip' src={github} alt='GitHub Logo' style={{ marginLeft: 10 }} /> 
                </a>
                <a className='Link' href='https://covontario.ca' target='_blank' rel="noreferrer">
                    <LinkIcon style={{ width: 26, height: 26, marginTop: 2, marginBottom: -6, marginLeft: 4 }} />
                </a>
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {Covontario1}
                <br />
                <br />
                {Covontario2}
            </div>
            <div className='Subheading' style={{ marginTop: 40, marginBottom: 10 }}>
                Criptoz.com
                <a className='Link' href='https://github.com/juliandeange/cryptos' target='_blank' rel="noreferrer">
                    <img className='ImageTooltip' src={github} alt='GitHub Logo' style={{ marginLeft: 10 }} /> 
                </a>
                <a className='Link' href='https://criptoz.com' target='_blank' rel="noreferrer">
                    <LinkIcon style={{ width: 26, height: 26, marginTop: 2, marginBottom: -6, marginLeft: 4 }} />
                </a>
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {Criptoz}
            </div>
            <div className='Subheading' style={{ marginTop: 40, marginBottom: 10 }}>
                Controlcrowd.ca
                <a className='Link' href='https://github.com/juliandeange/CrowdControl' target='_blank' rel="noreferrer">
                    <img className='ImageTooltip' src={github} alt='GitHub Logo' style={{ marginLeft: 10 }} /> 
                </a>
                <a className='Link' href='https://controlcrowd.ca' target='_blank' rel="noreferrer">
                    <LinkIcon style={{ width: 26, height: 26, marginTop: 2, marginBottom: -6, marginLeft: 4 }} />
                </a>
            </div>
            <div className='Bodycopy' style={{ marginTop:20 }}>
                {CrowdControl}
            </div>
        </div>
    )
}

export default Projects
