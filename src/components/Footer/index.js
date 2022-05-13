import React from "react";
import GitHubMark from '../../assets/GitHubMark.png';

function Footer() {

    return (

        <footer id="footer">
            <h3>
                Thanks for visiting.
            </h3>
            <div>
                <a href="https://github.com/rtthiel8">
                <img
                    src={GitHubMark}
                    alt="GitHub"
                    style={{height: "30px", width: "30px"}}
                />
                </a>
            </div>
        </footer>

    )

}

export default Footer;