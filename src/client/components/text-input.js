import React from 'react'

const TextInput = ({label, value, onChange}) =>
  <div>
    <label>{label}:</label>
    <input
      type='text'
      value={value}
      onChange={event => onChange(event.target.value)} />
  </div>

TextInput.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default TextInput
