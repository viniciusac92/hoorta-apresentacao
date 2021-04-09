const Text = ({ children, weigth, size }) => {
  return (
    <div>
      <Text weigth={weigth} size={size}>
        {children}
      </Text>
    </div>
  );
};
export default Text;
