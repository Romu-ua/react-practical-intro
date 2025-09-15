import './SelectStyle.css';
import cn from 'classnames';

// export default function SelectStyle({ mode }) {
//   return (
//     <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
//       Hello World
//     </div>
//   );
// }

export default function SelectStyle({ mode }) {
  return (
    <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
      hello world
    </div>
  );
}
