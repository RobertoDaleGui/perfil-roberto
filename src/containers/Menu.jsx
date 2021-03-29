import './Menu.css'
import Photo from '../component/ProfileImg'
import useSound from 'use-sound'
import sfxHover from '../sfx/sfxHover.wav'
import sfxClick from '../sfx/sfxClick.wav'
import sfxBlocked from '../sfx/sfxBlocked.wav'
import sfxError from '../sfx/sfxError.wav'
import { useState } from 'react'
import { Link, Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile';
import Profile2 from './Profile2';

function MenuItem(props) {
  const [hover] = useSound(sfxHover)
  const [click] = useSound(sfxClick)
  const name = window.location.pathname.split('/')[1]
  console.log(name);
  function _click() {
    props.setActive(id)
    click()
  }
  const { id, active } = props
  return (
    <a href={`/${props.id}`}
      className={id === name ? 'active' : ''}
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
      <MenuItem id='profile' active={active} setActive={setActive}>Quem sou eu</MenuItem>
      <MenuItem id='projects' active={active} setActive={setActive}>Amostra Técnica</MenuItem>
      <MenuItem id='3' active={active} setActive={setActive}>Outro título</MenuItem>
      <MenuItem id='4' active={active} setActive={setActive}>Mais um aê</MenuItem>
    </div>
  );
}

export default Menu;
