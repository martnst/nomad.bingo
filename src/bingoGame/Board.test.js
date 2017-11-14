import React from 'react'
import renderer from 'react-test-renderer'
import Board from './Board'
import terms from './../../src/terms.json'

describe('Board', () => {
  let board

  beforeEach(() => {
    board = renderer.create(<Board terms={terms} />).getInstance()
  })

  it('initializes without bingo', () => {
    expect(board.state.isBingo).toBeFalsy()
  })

  it('has no bingo after selected the first field', () => {
    // act
    board.handleSquareSelectionChanged([0, 0], true)
    // assert
    expect(board.state.isBingo).toBeFalsy()
  })

  it('has bingo after selecting all in the first row', () => {
    // act
    board.handleSquareSelectionChanged([0, 0], true)
    board.handleSquareSelectionChanged([0, 1], true)
    board.handleSquareSelectionChanged([0, 2], true)
    board.handleSquareSelectionChanged([0, 3], true)
    board.handleSquareSelectionChanged([0, 4], true)
    // assert
    expect(board.state.isBingo).toBeTruthy()
  })

  it('has bingo after selecting all in the first column', () => {
    // act
    board.handleSquareSelectionChanged([0, 0], true)
    board.handleSquareSelectionChanged([1, 0], true)
    board.handleSquareSelectionChanged([2, 0], true)
    board.handleSquareSelectionChanged([3, 0], true)
    board.handleSquareSelectionChanged([4, 0], true)
    // assert
    expect(board.state.isBingo).toBeTruthy()
  })

  it('has bingo after selecting only the four in the center row', () => {
    // act
    board.handleSquareSelectionChanged([2, 0], true)
    board.handleSquareSelectionChanged([2, 1], true)
    board.handleSquareSelectionChanged([2, 3], true)
    board.handleSquareSelectionChanged([2, 4], true)
    // assert
    expect(board.state.isBingo).toBeTruthy()
  })

  it('has bingo after selecting only the four in the center column', () => {
    // act
    board.handleSquareSelectionChanged([0, 2], true)
    board.handleSquareSelectionChanged([1, 2], true)
    board.handleSquareSelectionChanged([3, 2], true)
    board.handleSquareSelectionChanged([4, 2], true)
    // assert
    expect(board.state.isBingo).toBeTruthy()
  })
})

