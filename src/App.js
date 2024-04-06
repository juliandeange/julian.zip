import './styles/App.css';
import Main from './components/main'
import Education from './components/education'
import Skills from './components/skills'
import Employment from './components/employment'
import Projects from './components/projects'
import { EducationContext, EmploymentContext, ProjectContext } from './context/DataContext'; 
import { employmentData } from './data/data-employment'
import { projectData } from './data/data-projects';
import { educationData } from './data/data-education';
import useCheckMobileScreen from './hooks/useCheckMobile';

const App = () => {

    const isMobile = useCheckMobileScreen()

    return (
        
        <div>
            <EmploymentContext.Provider value={employmentData}>
                <ProjectContext.Provider value={projectData}>
                    <EducationContext.Provider value={educationData}>
                        {!isMobile ?
                            <div className="row">
                                <div className="column1">
                                    <Main />
                                    <div style={{ display: 'flex', marginTop: 50 }}>
                                        <Education />
                                        <Skills />
                                    </div>
                                </div>
                                <div className="column2">
                                    <Employment />
                                    <div style={{ marginTop: 50 }} >
                                        <Projects />
                                    </div>
                                </div>
                            </div>
                            :
                            <div style={{ textAlign: 'center', minWidth: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                                <Main />
                                <Skills />
                                <Education />
                                <Employment />
                            </div> 
                        }
                    </EducationContext.Provider>
                </ProjectContext.Provider>
            </EmploymentContext.Provider>
        </div>
    )
}

export default App
