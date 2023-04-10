import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { HomePage, DownloadApp, DrFlores, Doc1, Doc2, Doc3, DraGarza, DrGuzman } from './pages'
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
          <ScrollToTop />
        	<Routes>
          		<Route>
            	    <Route path="/" element={<Navigate to="/index" replace />} />
                  <Route path="/index" element={<HomePage />} />
                  <Route path="/download-app" element={<DownloadApp />} />
                  <Route path="/otorrinolaringologo" element={<Doc1 />} />
                  <Route path="/gastroenterología" element={<Doc2 />} />
                  <Route path="/neumologia" element={<Doc3 />} />
                  <Route path="/dr-flores" element={<DrFlores />} />
                  <Route path="/dra-garza" element={<DraGarza />} />
                  <Route path="/dr-guzman" element={<DrGuzman />} />
          		</Route>
        	</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
