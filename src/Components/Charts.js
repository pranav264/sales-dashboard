import React from 'react'
import { Chart } from 'primereact/chart';
import { barChartData, pieChartData } from '../data';

const Charts = () => {
  return (
    <div id='charts' className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10'>
        <div className='bg-white p-5 rounded-lg'>
            <Chart type='bar' data={barChartData} />
        </div>
        <div className='bg-white p-5 rounded-lg'>
            <Chart type='pie' data={pieChartData} />
        </div>
    </div>
  )
}

export default Charts
