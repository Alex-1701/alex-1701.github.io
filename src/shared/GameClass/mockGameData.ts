import { IGameDataEmoji } from "@types"

export const mock_labyrinth: IGameDataEmoji = {
  // prettier-ignore
  matrix: [
    ["💛", "🟢", "🟠", "🔴", "🔵", "🟣", "🟠", "🔴", "🟠", "🟢", "🟠", "🔴", "🟡", "🟢", "🟠"],
    ["🟣", "🔴", "🔵", "🟢", "🟡", "🟠", "🔵", "🟠", "🔴", "🟡", "🔵", "🟠", "🟢", "🟢", "🔵"],
    ["🟡", "🔵", "🟢", "🟠", "🔵", "🟠", "🟣", "🔴", "🟢", "🟠", "🟢", "🟡", "🔵", "🟠", "🔴"],
    ["🟠", "🟠", "🔵", "🟠", "🟢", "🟠", "🟣", "🔵", "🟢", "🟡", "🔵", "🟡", "🔵", "🟡", "🟠"],
    ["❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "🟢", "🔴", "🟢", "🟠"],
    ["🟠", "🔴", "🟡", "🟡", "🔴", "🟢", "🟠", "🔵", "🟢", "🟡", "🟠", "🟡", "🟠", "🟠", "🟢"],
    ["🟡", "🟢", "🟠", "🟠", "🔵", "🟢", "🔵", "🔵", "🟡", "🟢", "🟢", "🟡", "🔴", "🟠", "🔵"],
    ["🟠", "🟣", "🟢", "🟡", "🟣", "🟠", "🔵", "🟢", "🔵", "🟠", "🟠", "🔵", "🔴", "🟡", "🔴"],
    ["🔴", "🟢", "🔵", "🟡", "🟣", "🟠", "🟣", "🟡", "🟡", "🟡", "🔵", "🟢", "🟢", "🔵", "🔴"],
    ["🔵", "🟠", "🟠", "🔵", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌", "❌"],
    ["🟡", "🔴", "🔵", "🔵", "🟢", "🟣", "🟢", "🟡", "🔴", "🟣", "🟢", "🟠", "🟠", "🔴", "🟡"],
    ["🟣", "🟠", "🔴", "🔵", "🟣", "🔵", "🟢", "🔵", "🟢", "🟡", "🟣", "🟡", "🟠", "🟣", "🟢"],
    ["🟢", "🟣", "🟣", "🟡", "🟢", "🔴", "🟢", "🟡", "🔵", "🟡", "🟠", "🔵", "🟠", "🔴", "🔵"],
    ["🔵", "🟣", "🟢", "🟢", "🟣", "🟡", "🔵", "🟡", "🔵", "🟠", "🔵", "🟠", "🟢", "🟡", "🟥"]
  ],
  currentPlayerNumber: 1,
  enemyPlayerNumber: 2,
  playerTurn: 1,
}

export const mock_fortress: IGameDataEmoji = {
  // prettier-ignore
  matrix: [
    ["💛", "🟢", "🟠", "🔴", "🔵", "🟣", "🟠", "🔴", "🟠", "🟢", "🟠", "🔴", "🔵", "💛"],
    ["🟣", "🔴", "🔵", "🟢", "🟡", "🟠", "🔵", "🟠", "🔴", "🟡", "🔵", "🟠", "🟣", "🟢"],
    ["🟡", "🔵", "🟢", "🟠", "🔵", "🔴", "🟣", "🔴", "🟢", "🟠", "🟢", "🔴", "🟢", "🟠"],
    ["🔵", "🟠", "🔵", "❌", "❌", "🟠", "❌", "❌", "🟣", "❌", "❌", "🟡", "🔵", "🟡"],
    ["🟠", "🔴", "🟡", "❌", "🔴", "🟡", "🟠", "🔵", "🟢", "🟡", "❌", "🔴", "🟢", "🟣"],
    ["🟡", "🟢", "🔵", "🟠", "🔵", "🟢", "🔵", "🟣", "🟡", "🔴", "🟢", "🟡", "🔴", "🟠"],
    ["🟠", "🟣", "🟢", "❌", "🟢", "🟠", "🟥", "🟥", "🔵", "🟠", "❌", "🔵", "🟠", "🟡"],
    ["🔴", "🟢", "🔵", "❌", "🟣", "🟡", "🟥", "🟥", "🟡", "🟡", "❌", "🟢", "🟢", "🔵"],
    ["🟡", "🔴", "🔴", "🔵", "🟢", "🟣", "🔵", "🟡", "🟠", "🟣", "🟢", "🟠", "🟠", "🔴"],
    ["🟣", "🟢", "🔵", "❌", "🟣", "🔵", "🟢", "🔵", "🟢", "🟡", "❌", "🟡", "🔵", "🟣"],
    ["🟢", "🟠", "🟣", "❌", "❌", "🔴", "❌", "❌", "🔴", "❌", "❌", "🔵", "🟠", "🔴"],
    ["🔵", "🟢", "🔴", "🟢", "🟣", "🟡", "🟢", "🟣", "🔵", "🟢", "🟡", "🟣", "🟢", "🟡"],
    ["🟢", "🟣", "🟢", "🟡", "🟢", "🔴", "🔵", "🟡", "🟢", "🟠", "🔵", "🟠", "🟡", "🔴"],
    ["💛", "🟠", "🔵", "🟢", "🟣", "🟡", "🟢", "🔴", "🔵", "🟠", "🟢", "🟡", "🟢", "💛"]
  ],
  currentPlayerNumber: 1,
  enemyPlayerNumber: 2,
  playerTurn: 1,
}

export const mock_3x3: IGameDataEmoji = {
  // matrix: [
  //   ["🧡", "🔴", "🟢"],
  //   ["🔵", "🟡", "🟣"],
  //   ["🟣", "🟠", "🟥"],
  // ],

  matrix: [
    ["🔵", "🟡", "🔵"],
    ["🟡", "🔵", "🟢"],
    ["💙", "🟢", "🟥"],
  ],

  currentPlayerNumber: 1,
  enemyPlayerNumber: 2,
  playerTurn: 1,
}

export const mock_4x4: IGameDataEmoji = {
  matrix: [
    ["🧡", "🔴", "🟢", "🔵"],
    ["🔴", "🟡", "🟣", "🟢"],
    ["🟠", "🔵", "🟡", "🔵"],
    ["🟣", "🟠", "🟣", "🟥"],
  ],
  currentPlayerNumber: 1,
  enemyPlayerNumber: 2,
  playerTurn: 1,
}

export const mock_5x5: IGameDataEmoji = {
  matrix: [
    ["🔵", "🔴", "🟢", "🔵", "🔴"],
    ["🟣", "🟡", "🟠", "🔴", "🟡"],
    ["🟢", "🔴", "🔵", "🟡", "🔵"],
    ["🟣", "🔵", "🟡", "🔵", "🟢"],
    ["🔵", "🟣", "🧡", "🟢", "🟥"],
  ],
  currentPlayerNumber: 1,
  enemyPlayerNumber: 2,
  playerTurn: 1,
}