const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyleA = {
    color,
    fontSize: '18px',
  };

  return (
    <>
      <p style={contentStyleA}>{children}</p>
    </>
  );
};

export default ColorfulMessage;