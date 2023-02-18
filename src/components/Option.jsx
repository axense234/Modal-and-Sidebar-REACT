const Option = ({ name, icon }) => {
  return (
    <a className='option-container' href={`./${name}`}>
      <i>{icon}</i>
      <p>{name}</p>
    </a>
  );
};

export default Option;
