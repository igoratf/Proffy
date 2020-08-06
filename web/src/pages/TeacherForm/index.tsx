import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher o formulário de descrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Biology", label: "Biology" },
              { value: "Chemistry", label: "Chemistry" },
              { value: "Physics", label: "Physics" },
              { value: "Math", label: "Math" },
              { value: "Programming", label: "Programming" },
              { value: "English", label: "English" },
              { value: "History", label: "History" },
              { value: "Geography", label: "Geography" },
              { value: "Philosophy", label: "Philosophy" },
              { value: "Sociology", label: "Sociology" },
              { value: "Arts", label: "Arts" },
              { value: "Music", label: "Music" },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Available schedule
            <button type="button">+ New schedule</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day  "
              label="Week day"
              options={[
                { value: "0", label: "Sunday" },
                { value: "1", label: "Monday" },
                { value: "2", label: "Tuesday" },
                { value: "3", label: "Wednesday" },
                { value: "4", label: "Thursday" },
                { value: "5", label: "Friday" },
                { value: "6", label: "Saturday" },
              ]}
            />

            <Input name="from" type="time" label="From" />
            <Input name="to" type="time" label="To" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
