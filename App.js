import { FaHtml5 } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { DiGit } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';

function App() {
  return (
    <IconContext.Provider value={{ size: '100px' }}>
      <div className="app">
        {/* web dev tools */}
        <h2>Basic Web Dev Tech Kit</h2>
        <div className="webDevIcons">
          <FaHtml5 style={{ color: 'orange' }} />
          <DiCss3 style={{ color: 'blue' }}/>
          <FaJs style={{ color: 'yellow' }}/>
        </div>
        {/* intermediate tools */}
        <h2>Intermediate Tool Kit</h2>
        <div className="interIcons">
          <FaReact style={{ color: 'skyblue' }} />
          <DiGit style={{ color: 'orangered' }}/>
          <DiGithubBadge />
          <FaNodeJs style={{ color: 'green'}}/>
        </div>
        {/* my end goal */}
        <h2>My End Goal Tool Kit</h2>
        <div className="fullStackIcons">
          <FaPython style={{ color: 'blue' }} />
          <SiMysql style={{ color: 'steelblue', size:'80px' }} />
          <DiMongodb style={{ color: 'green' }} />
          <IoLogoFirebase style={{ color: 'yellow' }}/>
        </div>
    </div>
    </IconContext.Provider>
  );
}

export default App;
