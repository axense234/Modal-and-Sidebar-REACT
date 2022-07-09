export const Option = (props) => {
  const { name, icon } = props;
  return (
    <a className='option-container' href={`./${name}`}>
      <i>{icon}</i>
      <p>{name}</p>
    </a>
  );
};
