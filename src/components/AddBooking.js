import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { insertBooking } from "../redux/BookingSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const AddBooking = () => {
    const [lesee,setLesee] = useState('');
    const [leseeEmail,setLeseeEmail] = useState('');
    const [owner,setOwner] = useState('');
    const [ownerPhone,setOwnerPhone] = useState('');
    const [carNumber,setCarNumber] = useState('');
    const [carType,setCarType] = useState('') ;
    const dispatch = useDispatch();
    const history = useHistory();
    const date = new Date();
    const addBooking = (e)=>{
        e.preventDefault();

        const data={
            lesee:lesee,
            lesee_email:leseeEmail,
            owner:owner,
            owner_phone:ownerPhone,
            date:date,
            carnumber:carNumber,
            cartype:carType
        }
        dispatch(insertBooking(data));

        history.push("/booking/all");
    }
    return ( 
        <>
            <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-bg-1.jpg)" }}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><Link to="/booking/all">All Booking</Link></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Add</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="col-md-12">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                       <form method="post" onSubmit={addBooking}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Lesee Name"
                                        value={lesee}
                                        onChange={(e)=> setLesee(e.target.value)} />
                                        <label for="name"> Lesee Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Lesee Email"
                                        value={leseeEmail}
                                        onChange={(e)=> setLeseeEmail(e.target.value)} />
                                        <label for=""> Lesee Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="ownername" 
                                        placeholder="Owner Name"
                                        value={owner}
                                        onChange={(e) => setOwner(e.target.value)} />
                                        <label for=""> Owner Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="phone" 
                                        placeholder="Owner Phone"
                                        value={ownerPhone}
                                        onChange={(e) => setOwnerPhone(e.target.value)} />
                                        <label for=""> Owner Phone</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="carnumber" 
                                        placeholder="Car Number"
                                        value={carNumber}
                                        onChange={(e)=> setCarNumber(e.target.value)} />
                                        <label for=""> Car Number </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="cartype" 
                                        placeholder="Car Type"
                                        value={carType}
                                        onChange={(e) => setCarType(e.target.value)} />
                                        <label for=""> Car Type  </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
          
        </>
     );
}
 
export default AddBooking;