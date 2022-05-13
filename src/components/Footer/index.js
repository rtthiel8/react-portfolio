import React from "react";
import GitHubMark from '../../assets/GitHubMark.png';
import linkedIn from '../../assets/linkedIn.png'

function Footer() {

    return (

        <footer id="footer">
            <h3>
                Thanks for visiting.
            </h3>

            <div className="container">
                <div className="row">
                        <a href="https://github.com/rtthiel8">
                            <img
                                src={GitHubMark}
                                alt="GitHub"
                                style={{ height: "30px", width: "30px" }}
                            />
                        </a>
        
                        <a href="https://www.linkedin.com/in/thielryan/">
                            <img
                                src={linkedIn}
                                alt="LinkedIn"
                                style={{ height: "30px", width: "30px" }}
                            />
                        </a>
                </div>
            </div>

        </footer>

    )

}

export default Footer;