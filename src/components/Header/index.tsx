import { HeaderBar, LinkCart, LinkItem, Links } from "./styles";

import logo from "../../assets/images/logo.svg";
import carrrinho from "../../assets/images/carrinho.svg";

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoçoões</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart>
      0 - produtos
      <img src={carrrinho} alt="Cart" />
    </LinkCart>
  </HeaderBar>
);

export default Header;
