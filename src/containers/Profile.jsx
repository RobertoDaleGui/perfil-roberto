import	'./Profile.css'
import SideMenu from '../containers/SideMenu'
import Box from '../component/Box'

function Profile(params) {
  return <div>
    <SideMenu>
      <a href="/profile/personal">Dados Pessoais</a>
      <a href="/profile/professional">Dados Profissionais</a>
      <a href="/profile/academic">Dados Acadêmicos</a>
      <a href="/profile/tecnic">Dados Técnicos</a>
    </SideMenu>
    <Box>
        <h3>Dados pessoais</h3>
        <p>Nome: Roberto D'Alessandro Guimaraes</p>
        <p>Idade: 28 anos Casado: <boolT>true</boolT></p>
        <p>Fumante: <boolF>false</boolF></p>
        <p>Fumante: <boolF>false</boolF></p>
    </Box>
  </div>
}

export default Profile