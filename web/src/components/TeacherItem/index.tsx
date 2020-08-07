import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";


export interface Teacher {
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher: {name, avatar, bio, cost, id, subject, whatsapp} }) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src={avatar}
          alt="Teacher avatar"
        />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {bio}
      </p>

      <footer>
        <p>
          Cost/hour
          <strong>$ {cost}</strong>
        </p>
        <a href={`https://wa.me/${whatsapp}`}>
          <img src={whatsAppIcon} alt="Whatsapp" />
          Make contact
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
