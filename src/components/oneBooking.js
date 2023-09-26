import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getBookingOne } from '../redux/BookingSlice';
const OneBooking = () => {
    const { id } = useParams();
    
    const { isLoading,bookings } = useSelector(state => state.bookings);
    const dispatch = useDispatch();
    useEffect(()=>{    
        dispatch(getBookingOne(id));
    },[dispatch])
    return ( 
        <>
        <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link >Home</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">One Booking Detailes </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    { isLoading && <div> Loading... </div> }
    <table class="table table-borderless table-light">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Lesee</th>
            <th scope="col">Lesee Email</th>
            <th scope="col">Car Owner</th>
            <th scope="col">Car Owner Phone</th>
            <th scope="col">Car numbers</th>
            <th scope="col">Car Type</th>
            <th scope="col">Date Rent</th>
            </tr>
        </thead>
    { bookings &&
    
    <tbody>
            <tr key={bookings.id}>
            <th scope="row">{ id }</th>
            <td> { bookings.lesee } </td>
            <td> { bookings.lesee_email } </td>
            <td> { bookings.owner } </td>
            <td> { bookings.owner_phone } </td>
            <td> { bookings.carnumber } </td>
            <td> { bookings.cartype } </td>
            <td> { bookings.date } </td>
            </tr>
        </tbody>
  
    }
      </table>
        
        </>
     );
}
 
export default OneBooking;