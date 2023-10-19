import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material';
import {MaintenanceRequest} from "./components/pages/Requests";
import {NoContent} from "./components/pages/NoContent";
import {Update} from "./components/pages/UpdateRequest";
import {Add} from "./components/pages/AddRequest";
function App() {

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaintenanceRequest />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoContent />} />
        </Routes>
      </BrowserRouter>
     
    </Container>
  );
}

export default App;