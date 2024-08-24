import React from 'react'

function MarginPadding() {
    return <>
        <div>
            <span>Türkiye</span>
            <span className='ml-20 hover:text-red-600'>Yunanistan</span>
        </div>
        <div className='p-20 border border-solid border-red-600'>
            Box-1
        </div>
    </>
}

export default MarginPadding