import './Menu.css'
import Photo from '../component/ProfileImg'
import useSound from 'use-sound'
import sfxHover from '../sfx/sfxHover.wav'
import sfxClick from '../sfx/sfxClick.wav'
import sfxBlocked from '../sfx/sfxBlocked.wav'
import sfxError from '../sfx/sfxError.wav'
import { useState } from 'react'
import { Redirect } from 'react-router-dom';

function MenuItem(props) {
  const [hover] = useSound(sfxHover)
  const [click] = useSound(sfxClick)
  function _click () {
    props.setActive(id)
    click()
  }
  const { id, active } = props
  return (
    <a href='#contac55t'
      className = { id === active? 'active': '' }
      onMouseEnter={hover}
      onMouseUp={_click}
    >
      {props.children}
    </a>
  )
}

function Menu() {
  const [active, setActive] = useState()
  return (
    <div className='topnav'>
      <Photo />
      <MenuItem id='1' active={active} setActive={setActive}>Quem sou eu</MenuItem>
      <MenuItem id='2' active={active} setActive={setActive}>Título</MenuItem>
      <MenuItem id='3' active={active} setActive={setActive}>Outro título</MenuItem>
      <MenuItem id='4' active={active} setActive={setActive}>Mais um aê</MenuItem>
    </div>
  );
}

export default Menu;
