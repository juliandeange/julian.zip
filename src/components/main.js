import '../styles/App.css'
import github from '../media/github-mark.png'

const Main = () => {

    return(
        <div style={{ maxWidth: '50%' }}>

            <div className='Header1'>
                Julian
            </div>
            <div className='Header1'>
                De Angelis
            </div>
            <div className='Header2' style={{ marginTop: 20 }}>
                Software Engineer
            </div>
            <div className='Bodycopy' style={{ marginTop: 10 }}>
                <span style={{ marginRight: 17 }}>
                    julian.deangelis@gmail.com
                </span>
                <a className='Link' href='https://github.com/juliandeange' target='_blank' rel="noreferrer">
                    <img className='Image' src={github} alt='GitHub Logo'/> 
                    juliandeange
                </a>
            </div>
        </div>
    )

}

export default Main
