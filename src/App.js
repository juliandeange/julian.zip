import './styles/App.css';
import Main from './components/main'
import Education from './components/education'
import Skills from './components/skills'
import Employment from './components/employment'
import Projects from './components/projects'
import { EmploymentContext, ProjectContext } from './context/DataContext'; 
import { employmentData } from './data/data-employment'
import { projectData } from './data/data-projects';

const App = () => {

    return (
        <div>
            <EmploymentContext.Provider value={employmentData}>
                <ProjectContext.Provider value={projectData}>
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
                        <Projects />
                    </div>
                </div>
                </ProjectContext.Provider>
            </EmploymentContext.Provider>
        </div>
    )
}

export default App
