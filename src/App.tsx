import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Operations from './routes/Operations';
import Records from './routes/Records';
export default function App() {

  const MemoizedHome = React.memo(Home);
  const MemoizedLogin = React.memo(Authentication);
  const MemoizedMath = React.memo(Operations);
  const MemoizedRecords = React.memo(Records);


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/home" element={<MemoizedHome />}></Route>
        <Route index element={<MemoizedHome />}></Route>
        <Route path="/login" element={<MemoizedLogin />}></Route>
        <Route path="/maths" element={<MemoizedMath />}></Route>
        <Route path="/records" element={<MemoizedRecords />}></Route>

      </Routes>

    </BrowserRouter >
  )
}