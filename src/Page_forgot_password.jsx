import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Page_forgot_password() {
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
               
                    <h3>Recover your password</h3>
             </div>       
                
                <form>
                <div className="inp">
                <input type="email" placeholder="Email" required/></div>
                <div className="btn">
                    <button type="submit">Send Me Email</button>
                </div></form>
                <div className="link_register">
                                    <p>Don't have an account?</p>
                                    <Link className="link" to="/register">Register</Link>
                                </div>
            </motion.div>
       </div>
        </>
    )
}