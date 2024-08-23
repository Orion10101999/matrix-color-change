# Matrix Animation Project

This project is a React-based application that creates a 3x3 matrix of cells. Users can click on cells to change their color to green. When the ninth cell is clicked, the colors of the previously clicked cells change to orange in a specified order with a delay between each change. The application also includes a reset button to revert the matrix to its initial state.

## Project Structure

- `src/components/MatrixComp.jsx`: The main component for the matrix.
- `src/index.css`: Custom CSS for animations.

## Features

- Click on cells to change their color to green.
- Clicking the ninth cell initiates an automatic color change of previously clicked cells to orange.
- A reset button to revert the matrix to its initial state.
- Smooth transitions and animations for color changes and borders.

## Steps to Complete the Project

### 1. Initialize the Project

1. **Create a React App**: 
    ```
    npm create vite@latest my-react-app --template react
```

cd my-react-app
npm install
```

2. **Install Tailwind CSS**:
    Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/create-react-app) to set up Tailwind CSS with Create React App.

### 2. Create the Matrix Component

1. **Create `MatrixComp.jsx`**:
    ```jsx
    import React, { useEffect, useState } from 'react';

    const MatrixComp = () => {
        const [matrix, setMatrix] = useState(Array(9).fill('white'));
        const [clickOrder, setClickOrder] = useState([]);
        const [auto, setAuto] = useState(false);

        const autoColorChange = () => {
            setTimeout(() => {
                const newMatrix = [...matrix];
                clickOrder.forEach((currIndex, i) => {
                    setTimeout(() => {
                        newMatrix[currIndex] = 'orange';
                        console.log('orange', currIndex + 1);
                        setMatrix([...newMatrix]);
                    }, i * 500);
                });
            }, 1000);
        };

        const handleClick = (index) => {
            const newMatrix = [...matrix];

            if (matrix[index] === 'white') {
                newMatrix[index] = 'green';
                console.log('green', index + 1);
                setClickOrder([...clickOrder, index]);
                setMatrix(newMatrix);
            }
            if (index === 8 && matrix[index] === 'white') {
            console.log('Auto');
            setAuto(true);
        }
        };

        useEffect(() => {
            if (auto) {
                autoColorChange();
            }
            setAuto(false);
        }, [auto]);

        const resetHandler = () => {
            setMatrix(Array(9).fill('white'));
            setClickOrder([]);
            setAuto(false);
        };

        return (
            <div className='flex flex-col gap-5 justify-center items-center h-screen'>
                <div className='grid grid-cols-3 gap-1'>
                    {matrix.map((currElem, index) => (
                        <div
                            key={index}
                            className={`h-20 w-20 border cursor-pointer flex justify-center items-center transition-all duration-500 ease-in-out ${
                                currElem.includes('orange') ? 'animate-pulse border-orange-500' :
                                currElem === 'green' ? 'border-green-500' :
                                'border-gray-300'
                            }`}
                            style={{ backgroundColor: currElem }}
                            onClick={() => handleClick(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
                <button
                    onClick={resetHandler}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:scale-105'
                >
                    Reset
                </button>
            </div>
        );
    };

    export default MatrixComp;
    ```

###  In handleClick()
- effect when again click 9th block wait some time .

```jsx
if(index===8) {
            console.log('Auto');
            setAuto(true)   
}     
```
###  In handleClick()
- not effect when again click 9th block
```jsx
if (index === 8 && matrix[index] === 'white') {
            console.log('Auto');
            setAuto(true);
        }
```
### 3. Create Custom CSS for Animations

1. **Create `index.css`**:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Custom animation for the orange color change */
    @keyframes pulse {
        0%, 100% {
            border-width: 2px;
        }
        50% {
            border-width: 6px;
        }
    }

    .animate-pulse {
        animation: pulse 1s 1;
    }
    ```

### 4. Implement the Matrix Logic

1. **State Management**:
    - Use `useState` to manage the matrix colors and click order.
    - Use `useState` to manage the auto color change trigger.

2. **Color Change Logic**:
    - When a cell is clicked, change its color to green and record the click order.
    - When the ninth cell is clicked, trigger the automatic color change for the recorded cells.

3. **Automatic Color Change**:
    - Use `setTimeout` to delay the color change to orange for each cell in the recorded order.

4. **Reset Functionality**:
    - Reset the matrix to its initial state when the reset button is clicked.

### 5. Add Styling and Animations

1. **Tailwind CSS Classes**:
    - Use Tailwind CSS classes for layout and styling.
    - Apply transitions and animations for smooth visual effects.

2. **Custom CSS Animations**:
    - Define keyframes for the pulsing animation.
    - Apply the animation to cells when they change color to orange.

### 6. Final Testing and Deployment

1. **Test the Application**:
    - Ensure the matrix cells change color as expected.
    - Verify the automatic color change and reset functionality.
    - Check the animations and transitions for visual appeal.

2. **Deploy the Application**:
    - Deploy the application using a platform of your choice (e.g., Vercel, Netlify).

## Conclusion

This project demonstrates the use of React state management, event handling, and CSS animations to create an interactive and visually appealing matrix component. By following the steps outlined above, replicate and understand the implementation of this project.


## Author

- **Sandeep Kumar**

- MERN Stack Devloper

### Note :-

