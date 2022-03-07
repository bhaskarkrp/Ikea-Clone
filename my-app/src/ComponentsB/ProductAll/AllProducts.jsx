import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "./Css/AllProducts.module.css";
import { Product_grid } from "./Product_grid";
import { Context } from '../Context';

export const AllProducts = () => {

    const [filterApplied, setFilterApplied] = React.useState("");
    const { setOnHoverActiveContext } = React.useContext(Context);

    const filters = [
        {
            sort: "Sort",
            one: "Best Match",
            two: "price: low to high",
            three: "Price: high to low",
            four: "Most Popular"
        },
        {
            sort: "Size",
            one: "Best Match",
            two: "price: low to high",
            three: "Price: high to low",
            four: "Most Popular"
        },
        {
            sort: "Price",
            one: "Best Match",
            two: "price: low to high",
            three: "Price: high to low",
            four: "Most Popular"
        },
        {
            sort: "All Filters",
            one: "Best Match",
            two: "price: low to high",
            three: "Price: high to low",
            four: "Most Popular"
        }];
    return (
        <div className={styles.allProductPage_margin}>


            <div className={styles.despcription}>
                <h1 className={styles.heading}>Desk for home</h1>
                <h2 className={styles.sub_heading}>A place For Your Computer, Stationery, And Coffee Mug Too</h2>

                <p className={styles.para_text}>Whether you are creating a home office or looking for a place to keep your computers,
                    we’ve designed our desks for home to fulfill your every need.
                    You can choose the BEKANT sit or stand desk if you work long hours from home or the traditional LOMMARP
                    if you like to give your space a personalised look.
                    They even come with built-in cable management! Want storage options?
                    There’s the KALLAX shelf-desk combo that’s perfect for saving you room and the solid
                    wood HEMNES that comes with drawers and compartments to store your files and stationery.</p>
            </div>

            <div className={styles.second}>
                {/* <div className={styles.second}> */}
                <div className={styles.third}>
                    {filters.map(item => (
                        <>
                            <select onClick={e => setFilterApplied(e.target.value)}>
                                <option value={item.sort}>{item.sort}</option>
                                <option value={item.one}>{item.one}</option>
                                <option value={item.two}>{item.two}</option>
                                <option value={item.three}>{item.three}</option>
                                <option value={item.four}>{item.four}</option>
                            </select>
                            {item.sort == "All Filters" ? <FilterListIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                        </>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "4.5rem" }}>
                    <button className={styles.button} onClick={() => setOnHoverActiveContext(false)}>Product</button>
                    <button className={styles.button} onClick={() => setOnHoverActiveContext(true)}>Rooms</button>
                </div>
                {/* </div> */}
            </div>

            <Product_grid filterApplied={filterApplied} />

            <div className={styles.despcription}>
                <h2 className={styles.sub_heading}>Work, Study Or Storage - We’ve Got A Desk For It All!</h2>

                <p className={styles.para_text}>Look no further than our collection of desks for home if you want a space to work, study, or indulge in your hobby. You can choose our flexible BEKANT if you put in long hours from home. The electric switch on the underframe lets you adjust its height - set it to sit or standing positions, whichever makes you feel better. We’ve designed it with a contoured tabletop, so your arms have a place to rest. Our blue-green LOMMARP desk is the perfect example of traditional design and adds a personal touch to your bedroom or study area. Like the BEKANT, it also comes with a built-in cable management system to tuck those pesky wires away. There’s a pull out drawer to store your stationery too! Need more storage? Get the KALLAX combo to keep your speakers and consoles. And our solid-wood HEMNES looks elegant and comes with drawers and shelves. The top drawer is fitted with a small compartment for your pens and paper clips while the bottom one has a file frame to store your A4, legal and other documents.</p>
            </div>
        </div>
    )
}