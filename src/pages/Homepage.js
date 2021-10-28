import React,{useEffect} from 'react'
import Categories from '../components/Categories'
import NavigationBar from '../components/NavigationBar'
import {useDispatch} from 'react-redux'
import { setFoodItems } from '../actions'
import Items from '../components/Items'

function Homepage() {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(setFoodItems("All"))
    },[dispatch])

    return (
        <div>
            <NavigationBar/>
            <h2 className="heading">Food Menu</h2>
            <hr className="line"/>
            <Categories/>
            <Items/>
        </div>
    )
}

export default Homepage
