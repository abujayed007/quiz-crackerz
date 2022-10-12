import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statics = () => {
    const quizes = useLoaderData()
    const {data} = quizes
    return (
        <div className=' mt-5 container'>
             <ResponsiveContainer width="95%" height={400}>
            <LineChart width={1000} height={400} data={data}>
            <XAxis dataKey='name' />
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statics;