import React,{useState} from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import './style.css'

function RangeFilter() {


    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

  return (
    <>
    <p className='font-normal text-sm'>PRICE</p>
    <div className="Range-bar">
		<MultiRangeSlider
			min={0}
			max={100}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
            barInnerColor='black'
            thumbLeftColor='white'
            thumbRightColor='white'
			onInput={(e) => {
				handleInput(e);
			}}
		/>
        <div className='flex justify-between'>
            <div className='my-2 border-2 rounded-2xl px-2'><span className='pr-2 font-light'>Min</span>{minValue}</div>
            <div className='my-2 font-light'>to</div>
            <div className='my-2 border-2 rounded-2xl px-2'><span className='pr-2 font-light'>Max</span>{maxValue}</div>
		</div>
	</div>
    </>
  )
}

export default RangeFilter;