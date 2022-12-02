import { useEffect, useState } from "react"
import axios from 'axios'

const API = process.env.REACT_APP_API_URL

export default function useMessages(){ 
    const [messages, setMessages] = useState([])
    const [reload, setReload] = useState(0)
console.log(reload)
    const reFetch = () => setReload(prev => prev + 1)

    useEffect(() => {
        axios
        .get(`${API}/messages`)
        .then((res) => {
            setMessages(res.data)
        })
        .catch((err) => {
            console.log(err)
        })}
        
    , [reload])

    return [messages, reFetch]
}