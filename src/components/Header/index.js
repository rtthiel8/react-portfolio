import React from "react";

function Header(props) {

    // const [sectionSelected, setSectionSelected] = useState(false);
 
  

    return (
        <header>
            <h2>
                Ryan Thiel
            </h2>
            {props.children}
        </header>
    )
}

export default Header;