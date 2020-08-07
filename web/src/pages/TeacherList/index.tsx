import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";
import api from "../../services/api";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    api
      .get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then((res) => setTeachers(res.data))
      .catch((err) => console.log("Error ", err));
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffies">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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

          <Select
            name="week_day  "
            label="Week day"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
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

          <Input
            type="time"
            name="time"
            value={time}
            label="Hora"
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => <TeacherItem teacher={teacher} />)}
      </main>
    </div>
  );
}

export default TeacherList;
