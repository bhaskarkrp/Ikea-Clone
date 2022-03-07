import React from 'react'
import style from "./Categories.module.css";

const CategoryNav = ({data, All}) => {
  console.log(data);
  return (
    <div className={style.catNav}>
      <h2>More ideas and inspiration</h2>
        <ul className={style.catUl}>
            <li><button onClick={() => All("all")}>All</button></li>
            <li><button onClick={() => All("bedroom")}>Bedroom</button></li>
            <li><button onClick={() => All("living")}>Living Room</button></li>
            <li><button onClick={() => All("all")}>Kitchen</button></li>
            <li><button onClick={() => All("living")}>Workspace</button></li>
            <li><button onClick={() => All("living")}>outdoor</button></li>
            <li><button onClick={() => All("all")}>Bathroom</button></li>
            <li><button onClick={() => All("bedroom")}>Baby & children room </button></li>
            <li><button onClick={() => All("bedroom")}>Dining</button></li>
            <li><button onClick={() => All("living")}>Hallway</button></li>
            <li><button onClick={() => All("all")}>Accessories</button></li>
        </ul>
    </div>
  )
}

export default CategoryNav