import './App.css';

function App() {
  const userName = "Rahul";
  const dayParts = [
    "Morning",
    "Afternoon",
    "Evening",
    "Night",
  ]
  let dayPartText = '';
  const hours = new Date().getHours();
  console.log(hours);
  if((hours >= 4 && hours < 12)){
    dayPartText = dayParts[0];
  }else if((hours >= 12 && hours < 17)){
    dayPartText = dayParts[1];
  }else if((hours >= 17 && hours < 21)){
    dayPartText = dayParts[2];
  }else if((hours >= 0 && hours < 4) || (hours > 20 && hours <= 24)){
    dayPartText = dayParts[3];
  }
  return (
    <div className={`App ${dayPartText}`}>
      <div className="Content">
        <h2>Hello {userName}</h2>
        <br/>
        <h3>Good {dayPartText}</h3>
      </div>
    </div>
  );
}

export default App;
