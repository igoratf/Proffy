import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;
