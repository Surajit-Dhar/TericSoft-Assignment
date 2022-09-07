import React, {useState} from 'react'
import "./Menu.css";
import Menu from "./menu";

const Dashboard = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Featured Of Sports Activity's</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <img src="https://cdn-icons-png.flaticon.com/128/3601/3601647.png" height="90px" width="90px" className="btn-warning" 
                    onClick={() => filterItem('cycleing')}/>
                    
                    <img src="https://cdn-icons-png.flaticon.com/128/1187/1187549.png" height="90px" width="90px" className="btn-warning" onClick={() => filterItem('aquatics')}/>
                    <img className="btn btn-warning" src="https://cdn-icons-png.flaticon.com/128/2112/2112244.png" height="90px" width="90px"
                    onClick={() => filterItem('golf')}/>
                    <img className="btn btn-warning" src="https://cdn-icons-png.flaticon.com/128/2219/2219057.png" height="90px" width="90px" onClick={() => filterItem('equestrian')}/>
                    <img className="btn btn-warning" src="https://cdn-icons-png.flaticon.com/128/4576/4576074.png" height="90px" width="90px" onClick={() => filterItem('gymnastics')}/>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { id, name, image, description,time } = elem;

                                    return (
                                    
                                        <div className="item1">
                                            <div className="Item-inside">
                                                {/* for images */}
                                                <div className="img-list">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* description items description */}
                                                <div className="image-overlap">
                                                    
                                                        <h3>{name}</h3>
                                                        <p style={{marginLeft:"14px"}}>{description }</p>
                                                        <p>{time}</p>
                                                   </div>
                                                    
                                            </div>
                                        </div>
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
