import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

interface TeacherItemProps {
  teacher: {
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    subject: string;
    whatsapp: string;
  };
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
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
          Make contact
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
