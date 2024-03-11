
// The case 1:
// import React, {useEffect, useState} from "react";

// const useClock=()=> {
//     const [times, setTimes] = useState(new Date());
//     useEffect(()=> {
//         const interval = setInterval(()=> {
//             setTimes(new Date())
//         }, 1000);
//         return ()=> clearInterval(interval)
//     }, [])
//     return[times]
// }
// export {useClock}


//================================================== SPACE-X ==============================================================

// The case 2:

import {useState} from "react";

const useClock =()=> {

    const [time, setTime] = useState('');
    const [amPm, setAmPm] = useState('')
    const updateTime =()=> {
        const currentTime = new Date();
        let hours = 0;
        if (currentTime.getHours() === 0) {
            hours = 12;
        } else if(currentTime.getHours() >= 12 ) {
            hours = currentTime.getHours() - 12;
        } else {
            hours = currentTime.getHours();
        }

        const minutes = currentTime.getMinutes() < 10 ? ("0" + currentTime.getMinutes()) : currentTime.getMinutes();
        const seconds = currentTime.getSeconds() < 10 ? ("0" + currentTime.getSeconds()) : currentTime.getSeconds();
        const amPm = currentTime.getHours() >= 12 ? "PM" : "AM";
        setTime(`${hours} : ${minutes} : ${seconds}`);
        setAmPm(amPm);

    }
    setInterval (()=> {
        updateTime();
    }, 1000)
    return[time, amPm]
}
export {useClock}




