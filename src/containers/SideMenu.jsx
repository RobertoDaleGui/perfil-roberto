import './SideMenu.css'

function SideMenu(props) {
  const list = props.children.map(item => (<li>{item}</li>))
  return (
    <div className='sideMenu'>
      <ul>{list}</ul>
    </div>
  )
}

export default SideMenu