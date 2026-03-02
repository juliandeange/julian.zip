import '../styles/App.css'
import useCheckMobileScreen from '../hooks/useCheckMobile'

const skillsList = ['React', 'React Native', 'C#', 'JavaScript', 'TypeScript', 'Java', 'HTML/CSS', 'Figma', 'Azure', 'Firebase', 'Unity']

const Skills = () => {

    const isMobile = useCheckMobileScreen()

    return (
        <div>
            {!isMobile ?
                <div>
                    <div className='Header2'>
                        Skills
                    </div>
                    <div className='Bodycopy'>
                        {skillsList.map((skill, i) => (
                            <div key={i} className='ListItem'>{skill}</div>
                        ))}
                    </div>
                </div>
            :
                <div className='mobile-section'>
                    <div className='Header2-mobile'>
                        Skills
                    </div>
                    <div className='skills-grid'>
                        {skillsList.map((skill, i) => (
                            <div key={i} className='skill-chip'>{skill}</div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )

}

export default Skills
