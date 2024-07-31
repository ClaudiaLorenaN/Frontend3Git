//clase1======================================
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
//       </div>
//       <h1>Main title </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   )
// }

// export default App

//clase2=======================================================
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <header>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#articles">Articles</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <div>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
//         </div>

//         <h1>Main Title</h1>
        
//         <section className="card">
//           <button onClick={() => setCount((count) => count + 1)}>
//             Count is {count}
//           </button>
//         </section>

//         <section id="articles">
//           <h2>Articles</h2>
//           <article>
//             <h3>Article 1</h3>
//             <p>This is the first article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </article>
//           <article>
//             <h3>Article 2</h3>
//             <p>This is the second article. Duis aute irure dolor in reprehenderit in voluptate.</p>
//           </article>
//         </section>
//       </main>

//       <footer>
//         <p>&copy; 2024 My Website. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default App;

//clase3===============================================================
import "./App.css";
import Hello from "./Components/Hello";

function App() {
  return (
    <>
      <h1>Bienvenidos a Vite</h1>
      <Hello nombre="Juan"/>
      <Hello nombre="Matias"/>
      <Hello nombre="Carlos"/>
    </>
  );
}

export default App;
