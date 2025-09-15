import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import MyHello from './MyHello.jsx';
import EventBasic from './EventBasic.jsx';
import StateBasic from './StateBasic.jsx';
import books from './books.js';
import ForList from './ForList.jsx';
import ForNext from './ForNext.jsx';
import StyledPanel from './StyledPanel.jsx';
import ForFilter from './ForFilter.jsx';
import SelectComp from './SelectComp.jsx';
import SelectStyle from './SelectStyle.jsx';
import ListTemplate from './ListTemplate.jsx';
import StateParent from './StateParent.jsx';
import EventMouse from './EventMouse.jsx';
import Eventpropagation from './EventPropagation.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'));
// root.render(<MyHello names={['山田', '鈴木', '佐藤']} />);

// root.render(<EventBasic type="time" />);

// root.render(<StateBasic init={0} />);

// root.render(<ForList src={books} />);

// root.render(<ForNext src={books} />);

// root.render(<ForFilter src={books} />);

// root.render(<SelectComp />);

// root.render(<SelectStyle mode="light" />);

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中</p>
//     <p>ようこそ、WINGSプロジェクトへ</p>
//   </StyledPanel>
// );
// root.render(
//   <StyledPanel>
//     <p key="title">メンバー募集中</p>
//     <p key="body">ようこそ、WINGSプロジェクトへ</p>
//   </StyledPanel>
// );

// root.render(
//   <ListTemplate src={books}>
//     {(elem) => (
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}.${elem.isbn}.jpg`}>
//             {elem.title} ({elem.price}円)
//           </a>
//         </dt>
//         <dd>{elem.summary}</dd>
//       </>
//     )}
//   </ListTemplate>
// );

// root.render(<StateParent />);

// root.render(
//   <EventMouse
//     alt="ロゴ写真"
//     defaultSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//     afterSrc="https://www.web-deli.com/image/home_chara.gif"
//   />
// );

root.render(<Eventpropagation />);
