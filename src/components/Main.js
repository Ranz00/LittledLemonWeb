import React, { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header'
import Booking from './Booking'

const Main = () => {
    const seedRandom = (seed) => {
        var m = 2 * 35 -31
        var a = 185852
        var s = seed % m
        return () => {
            return (s = s * a % m) /m
        }
    }

    const fetchAPI = (date) => {
        let result = []

        let random = seedRandom(date.getDate())

        for(let i =17; i<=23; i++ ) {
            if(random() < 0.5) {
                result.push(i + ':00')
            }
            if(random() > 0.5) {
                result.push(i + ':30')
            }
        }
        return result
    }

    const updateTimes = (state, date) => {
        return { avaliableTimes: fetchAPI(new Date()) }
    }

    const submitAPI = (formData) => {
        return true
    }

    const initialState = { avaliableTimes: fetchAPI(new Date())}

    const [state, dispatch] = useReducer(updateTimes, initialState)

    const navigate = useNavigate()

    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            navigate('/confirmed')
        }
    }
  return (
    <main>
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/booking' element={<Booking avaliableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
            <Route path='/' element={<Header />} />
        </Routes>
    </main>
  )
}

export default Main