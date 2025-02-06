import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Timer from '../pages/Timer';

export function App() {
  return (
    <div className="relative bg-gradient-to-b from-[#0B3B48] from-50% to-[#062128] to-100% font-sfpro text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-[url('/left_swirl.svg')] bg-left-top bg-no-repeat"></div>
      <div className="invisible absolute right-0 top-0 h-full w-full bg-[url('/right_swirl.svg')] bg-right-top bg-no-repeat md:visible"></div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
