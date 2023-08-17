function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        Hello Devlopers! here we go we have project setup 🚀
      </h1>

      <div
        className="flex-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div
          className="flex-item"
          style={{
            background: "red",
            padding: "40px",
          }}
        >
          hello
        </div>
        <div
          className="flex-item"
          style={{
            background: "yellow",

            padding: "40px",
          }}
        >
          hello
        </div>
        <div
          className="flex-item"
          style={{
            background: "orange",

            padding: "40px",
          }}
        >
          hello
        </div>
        <div
          className="flex-item"
          style={{
            background: "orange",

            padding: "40px",
          }}
        >
          hello
        </div>
      </div>
    </div>
  );
}

export default App;
