import { useEffect, useState } from "react"
export default function useUsers(){
	
    const [users, useUsers] = useState([])
    const [reload, setReload] = useState(0)

    const reFetch = () => setReload(prev => prev + 1)

    useEffect(() => {   // fetchData() 
    }, [reload])

    return [users, reFetch]
}