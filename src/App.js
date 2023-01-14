import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { direction } from './RouterPage/Portionrouter';

function App() {
  return (
    <div className="">
      <RouterProvider router={direction}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
