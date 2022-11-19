import React from 'react'

function BackButton(props) {
  return (
    <button {...props} className={''}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="w-12 h-12 stroke-d-green">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
{/* <div className='text-d-green text-lg font-bold'>
    Back
</div> */}
    </button>
  )
}

export default BackButton