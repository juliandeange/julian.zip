import '../styles/App.css'
import { projectData } from '../data/data-projects'
import github from '../media/github-mark.png'
import LinkIcon from '@mui/icons-material/Link'

const Projects = () => {

    return(
        <div style={{ maxWidth: '60%' }}>
            <div className='Header2'>
                Projects
            </div>
            {projectData.map((data) => {
                return (
                    <div>
                        <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                            {data.name}
                            <a className='Link' href={data.repo} target='_blank' rel='noreferrer'>
                                <img className='ImageTooltip' src={github} alt='GitHub Logo' style={{ marginLeft: 10 }} />
                            </a>
                            <a className='Link' href={data.link} target='_blank' rel="noreferrer">
                                <LinkIcon style={{ width: 26, height: 26, marginTop: 2, marginBottom: -6, marginLeft: 4 }} />
                            </a>
                        </div>
                        <div className='Bodycopy' style={{ marginTop: 20 }}>
                            {data.description.map((desc) => {
                                return (
                                    <div>
                                        {desc}
                                        <br />
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects
