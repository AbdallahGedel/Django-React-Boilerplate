import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainLayout from './Components/Layouts/MainLayout';
import TestMessage from './Components/TestMessage/TestMessage';


const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
        <Route index element={<TestMessage />} />
    </Route>
))


function App() {
    return (
        <RouterProvider
            router={routes}
        />

    );
}

export default App;