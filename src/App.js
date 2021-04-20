import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default function App() {
  const [dimensions, setDimensions] = React.useState(null);
  const [init, setInit] = React.useState(true);
  const callBackRef = React.useCallback(domNode => {
    if (domNode) {
      setDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  const onScroll2 = () => {
    console.log('zzzz');
  }

  const onScroll = () => {
    if (dimensions && init) {

      if (Math.abs(window.innerHeight - dimensions.top) < window.scrollY) {
        console.log(window.innerHeight - dimensions.top, '!!')
        setInit(false)
        window.removeEventListener('scroll', onScroll);
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll2)

    return () => window.removeEventListener('scroll', onScroll2);
  })


  return (
    <div
      // onScroll={onscroll}
      style={{
        backgroundColor: '#cacaca',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300vh'
      }}>
      <h1 className={'title' + (!init ? ' show' : '')} ref={callBackRef}>Measure me</h1>
    </div>
  );
}

// function MeasureExample() {
//   const [rect, ref] = useClientRect();
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '300vh'
//     }}>
//       <h1 ref={ref}>Hello, world</h1>
//       {
//         rect !== null &&
//         <h2>The above header is {Math.round(rect.height)}px tall</h2>
//       }
//     </div >
//   );
// }

// function useClientRect() {
//   const [rect, setRect] = React.useState(null);
//   const ref = React.useCallback(node => {
//     if (node !== null) {
//       console.log(node.getBoundingClientRect())
//       setRect(node.getBoundingClientRect());
//     }
//   }, []);
//   return [rect, ref];
// }

// function App() {
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '300vh'
//     }}>
//       <MeasureExample />

//     </div>
//   );
// }

// export default App;
