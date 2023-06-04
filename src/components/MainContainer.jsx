import React, { useEffect, useState } from 'react'
import { getBubbleSortAnimations } from '../algortihms/bubbleSort';
import { getMergeSortAnimations } from '../algortihms/mergeSort';
import { getSelectionAnimations } from '../algortihms/selectionSort';

const MainContainer = () => {
    const [speed, setSpeed] = useState(1);
    const [arrSize, setArrSize] = useState(4);
    const [arr, setArr] = useState([]);

    const SECONDARY_COLOR = 'red';
    const PRIMARY_COLOR = 'green';

    const mergeSort = (array) => {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrStick = document.getElementsByClassName('arrStick');
            const isColorChange = (i % 3) !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrStick[barOneIdx].style;
                const barTwoStyle = arrStick[barTwoIdx].style;
                const color = (i % 3) === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed * 50);
            } else {
                const [barOneIdx, newHeight] = animations[i];
                setTimeout(() => {
                    const barOneStyle = arrStick[barOneIdx].style;
                    barOneStyle.height = `${(79 / 100) * newHeight}vh`;
                    barOneStyle.backgroundColor = 'red';
                }, i * speed * 50);
                setTimeout(() => {
                    const barOneStyle = arrStick[barOneIdx].style;
                    barOneStyle.backgroundColor = 'green';
                }, (i * speed * 50) + 100);
            }
        }
    }

    const bubbleSort = (arr) => {
        const animations = getBubbleSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrStick = document.getElementsByClassName('arrStick');
            const [barOneIdx, barTwoIdx] = animations[i].index;
            const barOneStyle = arrStick[barOneIdx].style;
            const barTwoStyle = arrStick[barTwoIdx].style;
            if (animations[i].effect === 'compare') {
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * speed * 50);
                setTimeout(() => {
                    barOneStyle.backgroundColor = '#000a';
                    barTwoStyle.backgroundColor = '#000a';
                }, (i * speed * 50) + 100);
            }
            if (animations[i].effect === 'swap') {
                setTimeout(() => {
                    let tempHeight = barOneStyle.height
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.height = tempHeight;
                }, i * speed * 50);
                setTimeout(() => {
                    barOneStyle.backgroundColor = '#000a';
                    barTwoStyle.backgroundColor = '#000a';
                }, (i * speed * 50) + 100);
            }
            if (animations[i].effect === 'sorted') {
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, (i * speed * 50) + 100);
            }
            if ((animations.length - 1) === i) {
                const barOneStyle = arrStick[0].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, (i * speed * 50) + 100);
            }
        }
    }

    const selectionSort = (arr) => {
        const animations = getSelectionAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrStick = document.getElementsByClassName('arrStick');
            const [barOneIdx, barTwoIdx] = animations[i].index;
            const barOneStyle = arrStick[barOneIdx].style;
            const barTwoStyle = arrStick[barTwoIdx].style;
            if (animations[i].effect === 'compare') {
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * speed * 50);
                setTimeout(() => {
                    barOneStyle.backgroundColor = '#000a';
                    barTwoStyle.backgroundColor = '#000a';
                }, (i * speed * 50) + (speed * 50));
            }
            if (animations[i].effect === 'swap') {
                setTimeout(() => {
                    let tempHeight = barOneStyle.height
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.height = tempHeight;
                }, i * speed * 50);
                setTimeout(() => {
                    barOneStyle.backgroundColor = '#000a';
                    barTwoStyle.backgroundColor = '#000a';
                }, (i * speed * 50) + (speed * 50));
            }
            if (animations[i].effect === 'change') {
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * speed * 50);
                setTimeout(() => {
                    barOneStyle.backgroundColor = '#000a';
                    barTwoStyle.backgroundColor = '#000a';
                }, (i * speed * 50) + (speed * 50));
            }
            if (animations[i].effect === 'sorted') {
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, (i * speed * 50) + (speed * 75));
            }
        }
    }

    const generateRandomArray = () => {
        const randomArray = [];
        for (let i = 0; i < arrSize; i++) {
            const randomElement = Math.floor(Math.random() * 96) + 5;
            randomArray.push(randomElement);
        }
        setArr(randomArray);
    };

    useEffect(() => {
        generateRandomArray();
        const arrStick = document.getElementsByClassName('arrStick')
        for (let i = 0; i < arrStick.length; i++) {
            arrStick[i].style.backgroundColor = '#000a';
        }
    }, [arrSize]);

    return (
        <div>
            <div className='Nav-Container'>
                <div className='Size-Speed'>
                    <div className='MainSliderContainer'>
                        <label>Sorting Speed</label>
                        <div className="slidecontainer">
                            <input type="range" min="1" max="10" onChange={(e) => setSpeed(e.target.value)} value={speed} className="slider" id="myRange" />
                        </div>
                    </div>
                    <div className='MainSliderContainer'>
                        <label>Array Size</label>
                        <div className="slidecontainer">
                            <input type="range" min="5" max="100" onChange={(e) => setArrSize(e.target.value)} value={arrSize} className="slider" id="myRange" />
                        </div>
                    </div>
                </div>
                <div className='Btn-Container'>
                    <button onClick={() => { mergeSort(arr) }}>Merge Sort</button>
                    {/* <button onClick={() => { quickSort(arr) }}>Quick Sort</button> */}
                    <button onClick={() => { bubbleSort(arr) }}>Bubble Sort</button>
                    <button onClick={() => { selectionSort(arr) }}>Selection Sort</button>
                    {/* <button onClick={() => { insertionSort(arr) }}>Insertion Sort</button> */}
                </div>
            </div>
            <div className='Array-Container'>
                <div className='Array-Box'>
                    {
                        arr?.map((index, key) => {
                            let arrwidth = (90 / arr.length - 0.5) + 'vw'
                            let arrheight = (79 / 100) * index + 'vh'
                            return (
                                <div className='arrStick' style={{ height: arrheight, width: arrwidth }} key={key}></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MainContainer