import PropTypes from "prop-types";

export default function Project(props) {}

Project.propTypes = {
  project: PropTypes.objectOf({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};
