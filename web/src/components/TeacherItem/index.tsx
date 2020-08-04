import React from 'react';
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/23489054?s=460&u=0e0e7e963d782b032fa851c83955cd7f937279a8&v=4" alt="Igor Farias" />
            <div>
                <strong>Igor Farias</strong>
                <span>Programming</span>
            </div>
        </header>

        <p>
            Deeply interested in JavaScript ecosystem
            <br/> <br/>
            Full Stack Developer, mostly focused on front-end development and always fascinated about what is new in tech.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsAppIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem
