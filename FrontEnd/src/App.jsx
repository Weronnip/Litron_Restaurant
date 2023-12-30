import {Routes, Route} from 'react-router-dom'

// Outlet
import { Layout } from './Components/Layout';

// Page
import { HomePage } from './Page/HomePage';
import { ErrorPage } from './Page/NotfoundPage';

function App() {
    
    return(
         
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
}

export default App