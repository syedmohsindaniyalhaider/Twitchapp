import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import NoPage from "../Pages/NoPage/NoPage";

function Routes(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              {/* <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} /> */}
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      );
}

export default Routes