import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col mt-20 items-center">{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
