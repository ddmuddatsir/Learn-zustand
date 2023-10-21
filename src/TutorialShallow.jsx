// import {useStore} from './store'
// import {useMemo} from 'react'
// import {shallow} from 'zustand/shallow'

// //before shallow
// export default function TutorialShallow({state}){
//     const tasks = useStore(
//         (store) => store.tasks.filter((task) => task.state === state),
//         (prev, next) => {
//             const longest = prev.lengest ? prev.lengest : next.lengest;
//             for (let i=0; i< longest; i++){
//                 if(!prev[i] || !next[i]) return false;
//                 if(prev[i] !== !next[i]) return false;
//             }
//             return true;
//         }
//     );
// }

// //after shallow
// export default function TutorialShallow({state}){
//     const tasks = useStore(
//         (store) => store.tasks.filter((task) => task.state === state),
//         shallow
//     );
// }