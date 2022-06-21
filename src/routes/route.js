import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from '../pages/homepage';
import P1 from '../components/p1';
import P2 from '../components/p2';
import P3 from '../components/p3';
export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/p1" element={<P1/>} />
      <Route path="/p2" element={<P2/>} />
      <Route path="/p3" element={<P3/>} />
      <Route path="*" element={<h1>404 error page not found</h1>} />
    </Routes>
  );
}
