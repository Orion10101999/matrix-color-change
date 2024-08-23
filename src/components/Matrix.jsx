import React, { useEffect, useState } from 'react'

const Matrix = () => {
    const [matrix,setMatrix] = useState(Array(9).fill('white'))
    const [clickOrder , setClickOrder] = useState([])
    const [auto , setAuto] = useState(false)

    const autoColorChange = () =>{
        setTimeout(()=>{
            let newMatrix = [...matrix]
            clickOrder.forEach((matrixIndex , i) =>{
                setTimeout(()=>{
                    newMatrix[matrixIndex] = 'orange'
                    setMatrix([...newMatrix])
                },i*500)
            })
        },1000)
    }

    const handleClick = (index) => {
        const newMatrix = [...matrix]
        if(matrix[index]==='white'){
            newMatrix[index] = 'green'
            setClickOrder([...clickOrder,index])
            setMatrix(newMatrix)
        }
        if(index===8) setAuto(true)
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
    <div className='flex flex-col gap-5 justify-center items-center'>
        <div className='grid grid-cols-3 gap-1'>
            {
                matrix.map((item,index)=>{
                    return(
                        <div key={index}
    
                        className='h-20 w-20 cursor-pointer bg-white flex justify-center items-center'
    
                        style={{backgroundColor : item}}
                        onClick={()=>handleClick(index)}
                        >    
                        {index+1}    
                        </div>
                    )
                })
            }
        </div>
        
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-
            2 px-4 rounded' onClick={resetHandler}>Reset</button>
        
    </div>
  )
}

export default Matrix