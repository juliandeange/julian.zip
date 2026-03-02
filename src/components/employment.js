import '../styles/App.css'
import { useContext } from 'react'
import { EmploymentContext } from '../context/DataContext'
import useCheckMobileScreen from '../hooks/useCheckMobile'

const Employment = () => {

    const employmentData = useContext(EmploymentContext)
    const isMobile = useCheckMobileScreen()

    return(
        <div>
            {!isMobile ?
            <div>
                <div className='Header2'>
                    Employment
                </div>
                {employmentData?.map((data, i) => {
                    return (
                        <div key={i}>
                            <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                                {data.position} | {data.company}
                            </div>
                            <div className='SubheadingDate'>
                                <span>{data.dates}</span>
                                <span style={{ float: 'right' }}>{data.location}</span>
                            </div>
                            <div className='Bodycopy' style={{ marginTop: 20 }}>
                                {data.responsibilites.map((responsibility, j) => (
                                    <div key={j}>
                                        {responsibility}
                                        <br /><br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
            : 
            <div className='mobile-section'>
                <div className='Header2-mobile'>
                    Employment
                </div>
                {employmentData?.map((data, i) => (
                    <div key={i} className='mobile-entry'>
                        <div className='Subheading-mobile'>
                            {data.position}
                        </div>
                        <div className='Subheading-mobile' style={{ opacity: 0.7 }}>
                            {data.company}
                        </div>
                        <div className='SubheadingDate-mobile'>
                            {data.dates} · {data.location}
                        </div>
                        <div className='Bodycopy-mobile' style={{ marginTop: 10 }}>
                            {data.responsibilites.map((responsibility, j) => (
                                <div key={j} style={{ marginBottom: 10 }}>
                                    {responsibility}
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

export default Employment
