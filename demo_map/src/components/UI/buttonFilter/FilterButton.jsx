import React from "react";
import classes from "./FilterButton.module.css"
const FilterButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default FilterButton;