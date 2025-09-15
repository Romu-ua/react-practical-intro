import { HookContextChild } from './HookContextChild';
import MyAppContext from './MyAppContext';

const config = {
  title: 'React入門',
  lang: 'ja-JP',
};

export default function HookContext() {
  return (
    <MyAppContext value={config}>
      <div id="c_main">
        <HookContextChild />
      </div>
    </MyAppContext>
  );
}