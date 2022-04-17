import { useState } from 'react'
import './MainInfo.css'

const MainInfo = () => {

    const [inputValue, setInputValue] = useState(0)

    const fibonacci = (num) => {

        let a = 1, b = 0, temp

        while (num > 0) {
            temp = a
            a = a + b
            b = temp
            num--
        }

        const emptyDiv = document.querySelector('main>div')
        emptyDiv.innerHTML = `Fibonacci(${inputValue}) = ${b}`
    }

    return (
        <main>
            <input
                type='number'
                name='num'
                onChange={e => setInputValue(e.target.value)}
                min='0'
            />
            <button onClick={() => fibonacci(inputValue)}>Submit</button>
            <div></div>
        </main>
    )
}

export default MainInfo