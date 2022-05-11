interface ButtonProps {
  text: string
}

function Button({text}: ButtonProps) {
  return (
    <button>{text}</button>
  );
}

function App() {
  
  return (
    <div>
      <Button text="Hello" />
      <Button text="World" />
      <Button text="!"/>
    </div>
  )
}

export default App
  