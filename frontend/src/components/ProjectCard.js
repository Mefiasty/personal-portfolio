import { Col } from "react-bootstrap";
import "../css/projectcard.css";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
