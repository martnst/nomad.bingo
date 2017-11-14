import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button', () => {
  it('calls onChangeSelection handler when clicked', () => {
    // prepare
    let onChangeSelection = jest.fn()
    const component = renderer.create(
      <Button title='test' onChangeSelection={onChangeSelection} />
    ).getInstance()
    // act
    component.handleClick()
    // assert
    expect(onChangeSelection).toHaveBeenCalledTimes(1)
  })
})
