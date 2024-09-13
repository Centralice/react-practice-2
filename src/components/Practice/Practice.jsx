import s from "./Practice.module.css";

export default function Practice() {
  function handleClick(value) {
    console.log(value);
  }
  return (
    <>
      <h1 className={s.header}>Module 2</h1>
      <button onClick={() => handleClick(5)}>Click me</button>
    </>
  );
}
