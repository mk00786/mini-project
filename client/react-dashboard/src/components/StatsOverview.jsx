import React from 'react'

const StatsOverview = () => {
  return (
    <div className='bg-white shadow mt-6 p-6 rounded'>
      <h3 className='text-lg font-semibold mb-4'>Productivity Overview</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
        <div className='bg-blue-50 p-4 rounded'>
            <p className='text-gray-600 text-sm'>Tasks Completed (Last Week)</p>
            <p className='text-xl font-bold'>24</p>
        </div>
        <div className='bg-blue-50 p-4 rounded'>
            <p className='text-sm text-gray-600'>Active Projects</p>
            <p className='text-xl font-bold'>3</p>
        </div>
        <div className='bg-blue-50 p-4 rounded'>
            <p className='text-gray-600 text-sm'>Avg. Completion Rate</p>
            <p className='font-bold text-xl'>85%</p>
        </div>
      </div>
      <p className='text-gray-400 text-right italic text-xs mt-4'>* Stats are dummy for now</p>
    </div>
  )
}

export default StatsOverview
