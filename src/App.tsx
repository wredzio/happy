import React from 'react';
import './App.css';
import Countdown from 'react-countdown-now';
import posed from 'react-pose';
import { Button } from 'react-bootstrap';

const TimerInfo = ({ days, hours, minutes, seconds }: { days: number, hours: number, minutes: number, seconds: number }) => {
  return (
    <span>
      {days} dni &middot; {hours} godzin &middot; {minutes} minut <span>&middot; {seconds} sekund </span>
    </span>
  );
};

interface AppProps {
  dots: Array<Array<{}>>;
}

interface AppState {
  hidden: { row: number, isHidden: boolean, index: number };
  toAge?: Age;
  move: boolean;
}

enum Age {
  to50 = 50,
  to100 = 100
}

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Box2 = posed.div({
  left: { x: 10, y: 10 },
  right: { x: window.innerWidth - 20, y: 10 },
  top: { y: 10, x: window.innerWidth - 20 },
  bottom: { y: window.innerHeight - 20, x: window.innerWidth - 20 }
});

class App extends React.Component<AppProps, AppState>  {

  state = { hidden: { row: 2, index: 3, isHidden: true }, toAge: undefined, move: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ hidden: { row: Math.floor(Math.random() * 5), index: Math.floor(Math.random() * 9), isHidden: true } });
    }, 200);

    setInterval(() => {
      this.setState({ move: !this.state.move });
    }, 1000);
  }

  isHidden(hidden: { row: number, isHidden: boolean, index: number }, row: number, index: number) {
    return hidden.index === index && hidden.row === row && this.isHidden;
  }

  render() {
    const { dots } = this.props;
    const { hidden, toAge, move } = this.state;

    return (
      <>
        <div className="animate-container">
          <Box2 className="box-2 animate" style={{ backgroundColor: `${'purple'}` }} pose={move ? 'right' : 'left'} />
          <Box2 className="box-2 animate" style={{ left: `${-93}vw`, backgroundColor: `${'yellow'}` }} pose={move ? 'top' : 'bottom'} />
          <Box2 className="box-2 animate" style={{ top: '94vh', backgroundColor: `${'pink'}` }} pose={move ? 'left' : 'right'} />
          <Box2 className="box-2 animate" style={{ left: `${0}vw`, backgroundColor: `${'orange'}` }} pose={move ? 'bottom' : 'top'} />

          {dots[0].map((d, i) =>
            <Box key={i} className="box animate" style={{ left: `${(i + 0.5) * 10}vw`, top: '8vh', backgroundColor: `${d}` }} pose={!this.isHidden(hidden, 0, i) ? 'visible' : 'hidden'} />
          )}

          {dots[1].reverse().map((d, i) =>
            <Box key={i} className="box animate" style={{ left: `${(i + 1) * 10}vw`, top: '18vh', backgroundColor: `${d}` }} pose={!this.isHidden(hidden, 1, i) ? 'visible' : 'hidden'} />
          )}

          {dots[0].map((d, i) =>
            <Box key={i} className="box animate" style={{ left: `${(i + 0.5) * 10}vw`, top: '28vh', backgroundColor: `${d}` }} pose={!this.isHidden(hidden, 2, i) ? 'visible' : 'hidden'} />
          )}

          {dots[1].reverse().map((d, i) =>
            <Box key={i} className="box animate" style={{ left: `${(i + 1) * 10}vw`, top: '65vh', backgroundColor: `${d}` }} pose={!this.isHidden(hidden, 3, i) ? 'visible' : 'hidden'} />
          )}

          {dots[0].map((d, i) =>
            <Box key={i} className="box animate" style={{ left: `${(i + 0.5) * 10}vw`, top: '75vh', backgroundColor: `${d}` }} pose={!this.isHidden(hidden, 4, i) ? 'visible' : 'hidden'} />
          )}

          {dots[1].reverse().map((d, i) =>
            <Box key={i} className="box animate" style={{ left: `${(i + 1) * 10}vw`, top: '85vh', backgroundColor: `${d}` }} pose={!this.isHidden(hidden, 5, i) ? 'visible' : 'hidden'} />
          )}

        </div>
        <div className="App">

          <div className="timer-buttons">
            <div><h3>Wiiiiiii udało wam się zakończyć 25 lat</h3></div>
            <div>Ciekawe ile zostało wam do </div>
            <Button className="timer-button" onClick={() => this.setState({ toAge: Age.to50 })} variant="outline-danger">Piędziesiątki</Button>
            <Button className="timer-button" onClick={() => this.setState({ toAge: Age.to100 })} variant="outline-danger">Setki</Button>
          </div>
          <div className="timer">
            {toAge && toAge === Age.to100 && <Countdown date={new Date(2094, 6, 1, 1, 0)} renderer={TimerInfo} />}
            {toAge && toAge === Age.to50 && <Countdown date={new Date(2044, 6, 1, 1, 0)} renderer={TimerInfo} />}
          </div>
          <div>
            {toAge && <span>Nie tak źle ;d</span>}
          </div>
        </div>
      </>
    );
  }
}

export default App;