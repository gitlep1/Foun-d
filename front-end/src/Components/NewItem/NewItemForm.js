import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './NewItemForm.scss'

const API = process.env.REACT_APP_API_URL;

export default function NewItemForm({user}) {
    const navigate = useNavigate()

    const [item, setItem] = useState({
        userId: user,
        itemName: "",
        itemImg: "",
        category: "",
        description: "",
        isFound: false,
        request: false,
        giveaway: false,
        pinLocation: "",
        neighborhood: "",
        borough: "",
        zipcode: ""
    })
  
    const handleTextChange = (event) => {
      setItem({ ...item, [event.target.id]: event.target.value })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      axios
        .post(`${API}/items`, item)
        .then((res) => {
            setItem(res.data)
            navigate('/')
        })
        .catch((err) => {
          console.warn(err)
        })
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <img alt='Need full link for preview' src={`https://image.shutterstock.com/image-vector/sample-label-green-band-sign-260nw-1512261407.jpg`}/>
            <div>
                <Link to={'/'}>
                    <button>Back</button>
                </Link>
                <input type='submit'/>
            </div>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                id='itemName'
                value={item.itemName}
                type='text'
                onChange={handleTextChange}
                required
                className='input-style'
                />
            </div>
            <div>
                <label htmlFor='image'>Image:</label>
                <input
                id='itemImg'
                type='text'
                name='image'
                placeholder='http://'
                value={item.itemImg}
                onChange={handleTextChange}
                className='input-style'
                />
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <input
                id='description'
                value={item.description}
                type='text'
                placeholder='It helps to be as specific as possible 😇'
                onChange={handleTextChange}
                className='input-style'
                />
            </div>
            <div>
                <label htmlFor='category'>Category:</label>
                <select 
                    name="category" 
                    id="category"
                    onChange={handleTextChange}
                    className='input-style'
                    value={item.category}>
                    <option value="Tropical">Tropical</option>
                    <option value="Bromeliad">Bromeliad</option>
                    <option value="Fern">Fern</option>
                    <option value="Cactus & Succulent">Cactus & Succulent</option>
                    <option value="Aglaonema">Aglaonema</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </form>
    </div>
    );
  }