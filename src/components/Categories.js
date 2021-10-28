import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import data from '../data'
import { setCategories,setFoodItems } from '../actions'

const allCategories =["All",...new Set( data.map((item) => item.category))]

function Categories() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(setCategories(allCategories))
    },[dispatch])
    
    return <div className="button-container">
        {categories.map((category,index) =>{
            return <button className="category-btn" type="button" onClick={()=>dispatch(setFoodItems(category))} key={index}>{category}</button>
        })}
    </div>
}

export default Categories
