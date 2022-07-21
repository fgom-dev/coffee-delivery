import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer } from './styles'

export function InputNumber() {
  function handleMore() {
    const input = document.querySelector('input')
    if (input && parseInt(input.value) < 99) {
      input.value = String(parseInt(input.value) + 1)
    }
  }
  function handleLess() {
    const input = document.querySelector('input')
    if (input && parseInt(input.value) > 1) {
      input.value = String(parseInt(input.value) - 1)
    }
  }

  return (
    <InputNumberContainer>
      <button type="button" onClick={handleLess}>
        <Minus size={14} />
      </button>
      <input type="number" min={1} max={99} step={1} defaultValue={1} />
      <button type="button" onClick={handleMore}>
        <Plus size={14} />
      </button>
    </InputNumberContainer>
  )
}
