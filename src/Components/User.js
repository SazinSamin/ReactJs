import PropTypes from "prop-types";

const User = (props) => {
  const { name, id, subject, student } = props;
  const { subject1, subject2 } = props.subject;
  const { studentName, studentId } = props.student;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{id}</h1>
      <h1>
        {subject1} {subject2}
      </h1>
      <h1>
        {studentName} {studentId}
      </h1>
    </div>
  );
};

User.prototype = {
  name: PropTypes.string,
  id: PropTypes.number,
  subject: PropTypes.object,
  student: PropTypes.shape({
    studentName: PropTypes.string,
    studentId: PropTypes.number,
  }),
};

User.defaultProps = {
  name: "Your Name please",
  id: 122,
};

export default User;
