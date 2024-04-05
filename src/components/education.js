import { useContext } from 'react'
import '../styles/App.css'
import { EducationContext } from '../context/DataContext'

const Education = () => {

    const educationData = useContext(EducationContext)

    return(
        <div style={{ width: '60%'}}>
            <div className='Header2'>
                Education
            </div>
            {educationData.map((data) => {
                return (
                    <div className='Bodycopy' style={{ marginTop: 14, marginBottom: 20 }}>
                        {data.institution} <br />
                        {data.program} <br />
                        {data.dates}
                    </div>
                )
            })}
        </div>
    )

}

export default Education
