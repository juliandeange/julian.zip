import '../styles/App.css'

import { employmentData } from '../data/data-employment'

const Employment = () => {

    return(
        <div style={{ maxWidth: '60%' }}>
            {employmentData.map((data) => {
                return (
                    <div>
                        <div className='Subheading' style={{ marginTop: 10, marginBottom: 10 }}>
                            {data.position} | {data.company}
                        </div>
                        <div className='SubheadingDate'>
                            {data.dates}
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
