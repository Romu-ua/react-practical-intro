// export default function MyHello(props) {
// 	return (
// 		<div>Hello {props.myName} さん！</div>
// 	);
// }

export default function MyHello({ names }) {
  return (
    <div>
      こんにちは {names[0]} / {names[1]} / {names[2]}
    </div>
  );
}
