import '../styles/App.css'
import { Grid } from '@mui/material'
import github from '../media/github-mark.png'

const Main = () => {

    return(
        <div>
            <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                    <div className='Header1'>
                        Julian
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className='Header1'>
                        De Angelis
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className='Header2'>
                        Software Engineer
                    </div>   
                </Grid>
                <Grid item xs={12}>
                    <div className='Bodycopy'>
                        <span style={{ marginRight: 17 }}>
                            julian.deangelis@gmail.com
                        </span>
                        <a className='Link' href='https://github.com/juliandeange' target='_blank' rel="noreferrer">
                            <img className='Image' src={github} alt='GitHub Logo'/> 
                            juliandeange
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}

export default Main
