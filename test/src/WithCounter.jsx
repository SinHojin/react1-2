import { useEffect, useState } from "react";

export default function Counter(props){
    const [count, setCount] = useState(100)

    useEffect(() =>{
        document.title = `총 ${count} 번 클릭했습니다`
    })

    const [isOnline, setIsOnline] = useState(null)
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.use.id, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatus(props.use.id, handleStatusChange)
        }
    })

    function handleStatusChange(status){
        setIsOnline(status.isOnline)
    }

    return (
        <>
        <p>총 {count}</p>
        <button onClick={() => setCount(count+1)}>
            클릭
        </button>
        </>
    )
}