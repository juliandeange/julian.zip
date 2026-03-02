import '../styles/App.css'
import github from '../media/github-mark.png'
import { useContext } from 'react'
import { ProjectContext } from '../context/DataContext'
import useCheckMobileScreen from '../hooks/useCheckMobile'

const Projects = () => {

    const projectData = useContext(ProjectContext)
    const isMobile = useCheckMobileScreen()

    return(
        <div>
            {!isMobile ?
            <div>
                <div className='Header2'>
                    Projects
                </div>
                {projectData.map((data, i) => (
                    <div key={i}>
                        <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                            {data.name}
                            <a className='Link' href={data.repo} target='_blank' rel='noreferrer'>
                                <img className='ImageTooltip' src={github} alt='GitHub Logo' style={{ marginLeft: 10 }} />
                            </a>
                            <a className='Link' href={data.link} target='_blank' rel='noreferrer'>
                                <span style={{ fontSize: 16, marginLeft: 6 }}>🔗</span>
                            </a>
                        </div>
                        <div className='Bodycopy' style={{ marginTop: 20 }}>
                            {data.description.map((desc, j) => (
                                <div key={j}>
                                    {desc}
                                    <br /><br />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            : 
            <div className='mobile-section'>
                <div className='Header2-mobile'>
                    Projects
                </div>
                {projectData.map((data, i) => (
                    <div key={i} className='mobile-entry'>
                        <div className='Subheading-mobile'>
                            {data.name}
                            <a className='Link' href={data.repo} target='_blank' rel='noreferrer'>
                                <img className='ImageTooltip' src={github} alt='GitHub Logo' style={{ marginLeft: 10, width: 20, height: 20, marginBottom: -4 }} />
                            </a>
                            <a className='Link' href={data.link} target='_blank' rel='noreferrer'>
                                <span style={{ fontSize: 14, marginLeft: 6 }}>🔗</span>
                            </a>
                        </div>
                        <div className='Bodycopy-mobile' style={{ marginTop: 10 }}>
                            {data.description.map((desc, j) => (
                                <div key={j} style={{ marginBottom: 10 }}>
                                    {desc}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default Projects
