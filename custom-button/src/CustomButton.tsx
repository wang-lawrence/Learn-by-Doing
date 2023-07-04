import './CustomButton.css';

interface props {
  text: string,
  color: string;
}

// const <CustomButton:React.FC></CustomButton:React.FC>


export default function ButtonContainer() {
  return (
    <div className="App">
      <CustomButton text={'I'} color={'red'} />
      <CustomButton text={'know'} color={'green'} />
      <CustomButton text={'React!'} color={'blue'} />
    </div>
  );
}

const CustomButton:React.FC<props> = ({ text, color }) => {

  return <button className={color}>{text}</button>
}
