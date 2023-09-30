import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import imgLogo from "../../assets/img/Brasa.svg"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, []);

  return (
    <header>
      <div className="container-header">
        <Link to={"/"}>
          <img className="logo" src={imgLogo} alt="" />
        </Link>
        <FontAwesomeIcon className="menuBurguer" icon={faBars} style={{ color: "#ffffff", }} size="2x" onClick={toggleDropdown}/>

        <div className={`menuAbsoluto ${dropdownVisible ? "active" : "hidden"}`} ref={dropdownRef} >
          <ul className="menuAbsoluto-box" >
            <li>
              <Link to="Pratos/CarneVermelha">Carne Vermelha</Link>
            </li>
            <li>
              <Link to="Pratos/Costela">Costela</Link>
            </li>
            <li>
              <Link to="Pratos/Frango">Frango</Link>
            </li>
            <li>

              
              <Link to="Pratos/Linguica">Linguiça</Link>
            </li>
            <li>
              <Link to="Pratos/Outros">Outros</Link>
            </li>
          </ul>
        </div>

        <nav className="linksNav">
          <ul className="links">
            <li>
              <div className="dropdown" ref={dropdownRef}>
                <a className="btn" onClick={toggleDropdown}>
                  Cardápio
                </a>
                <ul className={`dropdown-menu ${dropdownVisible ? "active" : "hidden"}`}>
                  <li>
                    <Link to="Pratos/CarneVermelha">Carne Vermelha</Link>
                  </li>
                  <li>
                    <Link to="Pratos/Costela">Costela</Link>
                  </li>
                  <li>
                    <Link to="Pratos/Frango">Frango</Link>
                  </li>
                  <li>
                    <Link to="Pratos/Linguica">Linguiça</Link>
                  </li>
                  <li>
                    <Link to="Pratos/Outros">Outros</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
            <li>
              <Link to="/Faq">Faq</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header
