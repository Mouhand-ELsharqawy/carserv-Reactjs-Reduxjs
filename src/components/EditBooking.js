import { Link,useHistory,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getBookingOne, updateBooking } from "../redux/BookingSlice";
const EditBooking = () => {
    const { isLoading, bookings } = useSelector(state => state.bookings)

    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getBookingOne(id));
    },[])


    const [lesee,setLesee] = useState('');
    const [leseeEmail,setLeseeEmail] = useState('');
    const [owner,setOwner] = useState('');
    const [ownerPhone,setOwnerPhone] = useState('');
    const [carNumber,setCarNumber] = useState('');
    const [carType,setCarType] = useState('');
    const date = new Date();

    

    const history = useHistory()

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data= {
            id:id,
            lesee:lesee,
            lesee_email:leseeEmail,
            owner:owner,
            owner_phone:ownerPhone,
            date:date,
            carnumber:carNumber,
            cartype:carType 
        }
        dispatch(updateBooking(data));
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
                                <li className="breadcrumb-item text-white active" aria-current="page">Edit</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        
            { isLoading && <div> Loading... </div> }

            <div className="col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                       <form method="post" onSubmit={ handleSubmit } >
                       { bookings && 
                       
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
                                        <label for="name">Old Lesee Name "{bookings.lesee}" </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Lesee Email"
                                        value={leseeEmail}
                                        onChange={(e)=> setLeseeEmail(e.target.value)} />
                                        <label for="name">Old Lesee Email "{bookings.lesee_email}"</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Owner Name"
                                        value={owner}
                                        onChange={(e)=> setOwner(e.target.value)} />
                                        <label for="name">Old Owner Name "{bookings.owner}" </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Owner Phone"
                                        value={ownerPhone}
                                        onChange={(e)=> setOwnerPhone(e.target.value)} />
                                        <label for="name">Old Owner Phone "{bookings.owner_phone}" </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Car Number"
                                        value={carNumber}
                                        onChange={ (e) => setCarNumber(e.target.value) } />
                                        <label for="name">Old Car Number "{bookings.carnumber}" </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Car Type"
                                        value={carType}
                                        onChange={ (e) => setCarType(e.target.value) } />
                                        <label for="name">Old Car Type " { bookings.cartype } "</label>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>}
                        </form>
                    </div>
                </div>
          
        </>
     );
}
 
export default EditBooking;