import React from "react";
import "./qualification.css";
import Data from "./Data";
import Card from "./Card";

const Qualification = () =>{
    return(
        <section className="qualification container section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container grid">
                <div className="timeline grid">
                    {Data.map((val,id) => {
                        if(val.category === "education"){
                            return(
                                <Card 
                                    key={id} 
                                    icon={val.icon} 
                                    title={val.title} 
                                    year={val.year} 
                                    desc={val.desc} 
                                />
                            );
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val,index) => {
                        if(val.category === "experience"){
                            return(
                                <Card 
                                    key={index} 
                                    icon={val.icon} 
                                    title={val.title} 
                                    year={val.year} 
                                    desc={val.desc} 
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Qualification