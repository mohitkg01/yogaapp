import React from 'react'
import img1 from '../Assets/yoga.png';
import img2 from '../Assets/yoga (1).png';
import img3 from '../Assets/heartbeat.png';
import '../Styles/Hompage.css';

const Homepage = () => {
  return (
    <div className="homepage" id='homepage'>
        <div className="upper">
        <div className="hp-left"> 
            <h1>Yoga for mind</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora officiis dolores inventore ea voluptates deserunt, assumenda minima illo voluptatum odit doloribus dolorem ipsam nostrum repudiandae, a consectetur adipisci necessitatibus omnis eaque tenetur illum 
               repellendus molestiae incidunt. Laudantium harum optio ratione temporibus voluptatum commodi ea ad porro numquam, consequuntur dolore?</p>
        </div>
        <div className="hp-right">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VM8PH_LeJg4?si=yjgcLs0Thk4XhhWZ" alt="Youtube" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
        </div>
        <div className="lower">
            <h1>Is this for you</h1>
            <div className="lowericon">
            <span>
                <img src={img1} alt=""  style={{height:"50px" ,width:"50px"}}/>
                <p>Hard to feel clam and slepp because of stress</p>
                <button>Book a trial@99</button>
            </span>
            <span>
                <img src={img3} alt=""  style={{height:"50px" ,width:"50px"}}/>
                <p>If you have paipations and breathing trouble</p>
                {/* <Link to='productid'>Subscription</Link> */}
                <button>Subscription</button>
            </span>
            <span>
                <img src={img2} alt="" style={{height:"50px" ,width:"50px"}}/>
                <p>You have been advised by Doctors to avoid physical activity</p>
                <button>Book a call</button>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Homepage