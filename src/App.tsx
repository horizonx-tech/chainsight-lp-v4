import theme from "./constants/theme";

function App() {
  return (
    <>
      <div style={{ backgroundColor: theme.colors.background, padding: "20px" }}>
        <h1 style={{ color: theme.colors.text.primary }}>Primary Text</h1>
        <h2 style={{ color: theme.colors.text.secondary }}>Secondary Text</h2>
        <p style={{ color: theme.colors.text.tertiary }}>Tertiary Text</p>
      </div>
    </>
  )
}

export default App
