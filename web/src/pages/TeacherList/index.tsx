import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
        <Select name="subject" label="Matéria" options={[
            { value: 'Biology', label: 'Biology'},
            { value: 'Chemistry', label: 'Chemistry'},
            { value: 'Physics', label: 'Physics'},
            { value: 'Math', label: 'Math'},
            { value: 'Programming', label: 'Programming'},
            { value: 'English', label: 'English'},
            { value: 'History', label: 'History'},
            { value: 'Geography', label: 'Geography'},
            { value: 'Philosophy', label: 'Philosophy'},
            { value: 'Sociology', label: 'Sociology'},
            { value: 'Arts', label: 'Arts'},
            { value: 'Music', label: 'Music'},
          ]}/>
          
          <Select name="week_day  " label="Week day" options={[
            { value: '0', label: 'Sunday'},
            { value: '1', label: 'Monday'},
            { value: '2', label: 'Tuesday'},
            { value: '3', label: 'Wednesday'},
            { value: '4', label: 'Thursday'},
            { value: '5', label: 'Friday'},
            { value: '6', label: 'Saturday'},
          ]}/>

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
         <TeacherItem />
         <TeacherItem />
         <TeacherItem />
         <TeacherItem />
         <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
