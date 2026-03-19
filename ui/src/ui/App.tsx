function App() {
  return (
    <>
      <p>Hello</p>
      <select>
        {[1, 2, 3, 4].map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
    </>
  );
}

export default App;
