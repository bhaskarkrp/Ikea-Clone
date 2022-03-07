import React, { useEffect, useState } from 'react'
import CategoryNav from "../CategoryNav";
import MoreIdeas from '../MoreIdeas';
import { BounceLoader } from "react-spinners";
export const FetchAll = () => {
  const [data, setData] =  useState([])
  const [cate, setCate] =  useState("all")
  const [loading, setLoading] =  useState(true)

   const All = (category) => { 
    setLoading(true)

        fetch(`https://fake-server-app5622.herokuapp.com/${category}`)
        .then((res) => res.json())
        .then((res) =>  {
            console.log("akash", res)
            setCate(category)
            setData(res)
            setLoading(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://fake-server-app5622.herokuapp.com/${cate}`)
        .then((res) => res.json())
        .then((res) =>  {
            console.log("akash", res)
            setData(res)
            setLoading(false)

        })
    }, [])
    return loading?<div style={{textAlign: "center"}}><BounceLoader size={90} loading/></div> : (
        <>
         <CategoryNav data={data} All = {All}/>
         <MoreIdeas data={data} />
        </>
    )
}

export default FetchAll