import '../styles/App.css'
import useCheckMobileScreen from '../hooks/useCheckMobile'

const Skills = () => {

    const isMobile = useCheckMobileScreen()

    return (
        <div>
            {!isMobile ?
                <div style={{ marginLeft: 40 }}>
                    <div className='Header2'>
                        Skills
                    </div>
                    <div className='Bodycopy'>
                        <div className='ListItem'>React</div>
                        <div className='ListItem'>C#</div>
                        <div className='ListItem'>JavaScript</div>
                        <div className='ListItem'>Java</div>
                        <div className='ListItem'>HTML/CSS</div>
                        <div className='ListItem'>Figma</div>
                    </div>
                </div>
            :
                <div>
                    <div className='Header2' style={{ textAlign: 'center' }}>
                        Skills
                    </div>
                    <div className='Bodycopy' style={{ textAlign: 'center' }}>
                        <div className='ListItem-mobile'>React</div>
                        <div className='ListItem-mobile'>C#</div>
                        <div className='ListItem-mobile'>JavaScript</div>
                        <div className='ListItem-mobile'>Java</div>
                        <div className='ListItem-mobile'>HTML/CSS</div>
                        <div className='ListItem-mobile'>Figma</div>
                    </div>
                </div> 
            }
        </div>
    )

}

export default Skills
