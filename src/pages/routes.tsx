import { BrowserRouter, Route, Routes } from 'react-router';
import CreateSheet from './sheet/create';

type Props = {};

function AppRoutes({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateSheet />} />
        <Route path="/sheet/create" element={<CreateSheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
