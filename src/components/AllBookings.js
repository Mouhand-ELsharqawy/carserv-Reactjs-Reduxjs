import { deleteBooking, getBookings } from "../redux/BookingSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const AllBooking = () => {
    const { isLoading, bookings } = useSelector(state => state.bookings);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBookings());
    },[])
    return ( 
        <>
        
          <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Booking </h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link >Home</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">All Bookings</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-dark"><Link to="/booking/add"> <h5 style={{ 
        color:"#661b0b"
     }} >+ Add Booking </h5> </Link> </button>
    { isLoading && <div> Loading... </div> }
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Lesee</th>
            <th scope="col"> Car Type </th>
            <th scope="col" colSpan={3}> Actions </th>
            </tr>
        </thead>
    { bookings && bookings.length > 0 ? bookings.map((booking)=>(
     
        <tbody  key={booking.id}>
            <tr>
            <th scope="row"> { booking.id } </th>
            <td> { booking.lesee } </td>
            <td> { booking.cartype } </td>
            <td> <button type="button"  class="btn btn-info"> 
            <Link to={"/booking/one/"+ booking.id } style={{ 
                color:"#f7fdfb"
             }} > Read </Link></button> </td>
            <td> <button type="button" class="btn btn-success"><Link to={"/booking/update/"+booking.id} style={{ 
                color:"#f7fdfb"
             }} > Update </Link></button> </td>
            <td> <button type="button" class="btn btn-danger" onClick={()=> dispatch(deleteBooking(booking.id))} style={{ 
                color: "#f7fdfb"
             }} >Delete</button> </td>
            </tr>
        </tbody>
       
    )): " Oops, there is no data yet"}
     </table>
        </>
     );
}
 
export default AllBooking;