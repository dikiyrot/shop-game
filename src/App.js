import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route index element={<HomePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;