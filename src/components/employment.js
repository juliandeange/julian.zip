import '../styles/App.css'

import { employmentData } from '../data/data-employment'

const Employment = () => {

    return(
        <div style={{ maxWidth: '60%' }}>
            <div className='Header2'>
                Employment
            </div>
            {employmentData.map((data) => {
                return (
                    <div>
                        <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                            {data.position} | {data.company}
                        </div>
                        <div className='SubheadingDate'>
                            <span>
                                {data.dates}
                            </span>
                            <span style={{ float: 'right' }}>
                                {data.location}
                            </span>
                        </div>
                        <div className='Bodycopy' style={{ marginTop:20 }}>
                            {data.responsibilites.map((responsibility) => {
                                return (
                                    <div>
                                        {responsibility}
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

export default Employment
