import image1 from './img/team-1.jpg';
import image2 from './img/team-2.jpg';
import image3 from './img/team-3.jpg';
import image4 from './img/team-4.jpg';
import image5 from './img/team-2.jpg';
import image6 from './img/team-3.jpg';
import image7 from './img/team-4.jpg';
import image8 from './img/team-1.jpg';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTechnician } from '../redux/TechnicianSlice';
const Team = () => {
    const srcs = [image1,image2,image3,image4,image5,image6,image7,image8];
    const { isLoading,technicians } = useSelector( state => state.technicians);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTechnician());
    },[])
    return ( 
        <>
        
    <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }} >
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Technicians</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Technicians</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>



    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">// Our Technicians //</h6>
                <h1 className="mb-5">Our Expert Technicians</h1>
            </div>
            <div className="row g-4">
            { isLoading && <div> Loading... </div> }
            { technicians && technicians.length>0? technicians.map((technician)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                    <div className="position-relative overflow-hidden">
                        <img className="img-fluid" src={srcs[Math.floor(Math.random()*srcs.length)]} alt='car-image' />
                        <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                            <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="bg-light text-center p-4">
                        <h5 className="fw-bold mb-0"> { technician.username } </h5>
                        <small> { technician.company.name } </small>
                    </div>
                </div>
            </div>
            )): "there is no data yet" }
                
                
            </div>
        </div>
    </div>
    
        </>
     );
}
 
export default Team;