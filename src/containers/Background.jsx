import './Background.css'
import palm1 from '../img/palm.svg'
import palm2 from '../img/palm2.svg'

function Background(props) {

  return (
    <div>
      {props.children}
      <div className='background'></div>
      <div className='sun'></div>
      <img className='palm2' src={palm2} alt='' />
      <img className='palm' src={palm1} alt='' />
    </div>
  );
}

export default Background;
