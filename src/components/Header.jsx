import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiSend } from 'react-icons/fi'

function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#inicio" aria-label="Instagram, inicio"><span>Instagram</span></a>
      <label className="header__search"><FiSearch /><input type="search" placeholder="Buscar inspiracao" aria-label="Buscar inspiracao" /></label>
      <nav className="header__actions" aria-label="Navegacao principal">
        <button className="icon-button header__active" type="button" aria-label="Inicio"><FiHome /></button>
        <button className="icon-button" type="button" aria-label="Mensagens"><FiSend /></button>
        <button className="icon-button" type="button" aria-label="Criar publicacao"><FiPlusSquare /></button>
        <button className="icon-button" type="button" aria-label="Atividades"><FiHeart /></button>
        <button className="header__profile" type="button" aria-label="Meu perfil">J</button>
      </nav>
    </header>
  )
}

export default Header
