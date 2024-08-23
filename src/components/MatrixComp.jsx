import React, { useEffect, useState } from 'react'

const MatrixComp = () => {
    const [matrix, setMatrix] = useState(Array(9).fill('white'))
    const [clickOrder,setClickOrder] = useState([])
    const [auto,setAuto] = useState(false)
    
    const autoColorChange = () => {
        setTimeout(()=>{
            const newMatrix = [...matrix]
            clickOrder.forEach((currIndex,i) => {
                setTimeout(()=>{
                    newMatrix[currIndex] = 'orange'
                    console.log('orange',currIndex+1);
                    setMatrix([...newMatrix])
                },i*500)
            })
        },1000)
    }
    const handleClick = (index) => {
        const newMatrix = [...matrix]
        
        if(matrix[index]==='white'){
            newMatrix[index] = 'green'
            console.log('green',index+1);
            setClickOrder([...clickOrder,index])
            setMatrix(newMatrix)
        }
        if (index === 8 && matrix[index] === 'white') {
            console.log('Auto');
            setAuto(true);
        }
    }
    useEffect(()=>{
        if(auto){
        autoColorChange()
        }
        setAuto(false)
    },[auto])
    const resetHandler = () =>{
        setMatrix(Array(9).fill('white'))
        setClickOrder([])
        setAuto(false)
    }
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
            <div className='grid grid-cols-3 gap-1'>
                {matrix.map((currElem, index) => {
                    return <div
                        key={index}
                        className={`h-20 w-20 border cursor-pointer flex justify-center items-center transition-all duration-500 ease-in-out ${
                            currElem.includes('orange') ? 'animate-pulse border-orange-500' :
                            currElem === 'green' ? 'border-green-500' :
                            'border-gray-300'
                        }`}
                        style={{ backgroundColor: currElem}}
                        onClick={ () => handleClick(index)}
                    >{index+1}</div>
                })}
            </div>
            <button
                onClick={resetHandler}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:scale-105'
            >
                Reset
            </button>
        </div>
    )
}

export default MatrixComp


