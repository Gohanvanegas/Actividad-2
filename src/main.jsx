import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function SpecialButton({ image, name }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width="200"
        height="150"
      />

      <h2>{name}</h2>

      <button>Click me</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpecialButton
      image="https://picsum.photos/id/237/200/150"
      name="Mundo"
    />

    <SpecialButton
      image="https://picsum.photos/id/1011/200/150"
      name="Daworm"
    />

    <SpecialButton
      image="https://picsum.photos/id/1025/200/150"
      name="Killer"
    />
  </StrictMode>
)