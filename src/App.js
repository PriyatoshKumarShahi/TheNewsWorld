import './App.css';

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
const pageSize = 8;

  const [progress, setProgress] = useState(0)



  
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      
      />
      <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} pageSize={pageSize} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageSize} key="science" country="in" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageSize}key="technology" country="in" category="technology" />} />
          </Routes>
      </Router>
      </div>
    )
  }
export default App;