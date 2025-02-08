import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Timer from '../pages/Timer';

export function App() {
  return (
    <div className="relative font-sfpro bg-gradient-to-b from-50% to-100% from-[#0B3B48] to-[#062128] text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/left_swirl.svg')] bg-no-repeat bg-left-top"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/right_swirl.svg')] bg-no-repeat bg-right-top invisible md:visible"></div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
    </div>
  );
}

export default App;
