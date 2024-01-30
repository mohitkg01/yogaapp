import React from 'react'
import img1 from '../Assets/Yoga.gif';
import img2 from '../Assets/Yoga (1).gif';
import img3 from '../Assets/Heartbeat.gif';
import '../Styles/Hompage.css';

const Homepage = () => {
  return (
    <div className="homepage" id='home'>
        <div className="upper">
        <div className="hp-left"> 
            <h1>Yoga for mind</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora officiis dolores inventore ea voluptates deserunt, assumenda minima illo voluptatum odit doloribus dolorem ipsam nostrum repudiandae, a consectetur adipisci necessitatibus omnis eaque tenetur illum 
               repellendus molestiae incidunt. Laudantium harum optio ratione temporibus voluptatum commodi ea ad porro numquam, consequuntur dolore?</p>
        </div>
        <div className="hp-right">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VM8PH_LeJg4?si=yjgcLs0Thk4XhhWZ" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
        </div>
        <div className="lower">
            <h1>Is this for you</h1>
            <div className="lowericon">
            <span>
                <img src={img1} alt=""  style={{height:"50px" ,width:"50px"}}/>
                <p>Hard to feel clam and sleppy</p>
                <button>bookimnga a call</button>
            </span>
            <span>
            <img src={img3} alt=""  style={{height:"50px" ,width:"50px"}}/>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>book</button>
            </span>
            <span>
                <img src={img2} alt="" style={{height:"50px" ,width:"50px"}}/>
                Lorem ipsum dolor sit amet consectetur.
                <button>book a call</button>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Homepage