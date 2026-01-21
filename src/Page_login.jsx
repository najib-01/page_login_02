import React, {useState} from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


export default function Page_login() {

const [show, setShow] = useState(false);

    return(
        <>
       
            <div className="all_items_img">
                
                    <img className="img" src="aa1.jpg" alt="img" />
                
                <motion.div
                initial={{x:800}}
                    animate={{x:0}}
                    transition={{duration:0.5}}
                className="all_items">
                    <div className="header">
                <h1 className="title_logo">NAJIBOX</h1>
                    <h3>Login to your account</h3>  
                </div>
                <form>
                <div className="inp"><input type="email" placeholder="Email" required/>
                    <div className="inp_password">
                    <span onClick={() => setShow(!show)}>
                        <FontAwesomeIcon className="icon_eyeslash" icon={show ? faEye : faEyeSlash} />
                    </span>
                    
                    <input type={show ? "text" : "password"} placeholder="Password" required/>
                    </div>
                </div>
                <div className="checkbox_link">
                  <div className="checkbox_label"><input type="checkbox" /><label>Keep me logged in</label></div> 
                    <Link className="link" to="/forgot_password">Forgot Password</Link>
                </div>
                <div className="btn">
                    <button type="submit">Login</button>
                </div></form>
                <div className="hr">
                    <hr />
                    <h3>Or Login With</h3>
                    <hr />
                </div>
                <div className="icons">
                    <a href="#"><FontAwesomeIcon className="icon_google" icon={faGooglePlusG} /></a>
                    <a

                    href="#"><FontAwesomeIcon className="icon_twitter" icon={faTwitter} /></a>
                    <a
                                                                        


                    href="#"><FontAwesomeIcon className="icon_facebook" icon={faFacebookF} /></a>
                </div>    

                
                    
                <div className="link_register">
                    <p>Don't have an account?</p>
                    <Link className="link" to="/register">Register</Link>
                </div>



                </motion.div>
                    </div>

               
                                                                
               
                                                                
                  
                
                  
                
      
        </>
    )
}