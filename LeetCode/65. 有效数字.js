var isNumber = function (s) {
  const State = {
    state_initial: 'state_initial',
    state_int_sign: 'state_int_sign',
    state_integer: 'state_integer',
    state_point: 'state_point',
    state_point_without_int: 'state_point_without_int',
    state_fraction: 'state_fraction',
    state_exp: 'state_exp',
    state_exp_sign: 'state_exp_sign',
    state_exp_number: 'state_exp_number',
    state_end: 'state_end',
  }

  const CharType = {
    char_number: 'char_number',
    char_exp: 'char_exp',
    char_point: 'char_point',
    char_sign: 'char_sign',
    char_illegal: 'char_illegal' /* iliegal 非法的 */,
  }

  const toCharType = (ch) => {
    if (!isNaN(ch)) {
      return CharType.char_number
    } else if (ch.toLowerCase() === 'e') {
      return CharType.char_exp
    } else if (ch === '.') {
      return CharType.char_point
    } else if (ch === '+' || ch === '-') {
      return CharType.char_sign
    } else {
      return CharType.char_illegal
    }
  }

  const transfer = new Map()
  const initialMap = new Map()
  initialMap.set(CharType.char_number, State.state_integer)
  initialMap.set(CharType.char_point, State.state_point_without_int)
  initialMap.set(CharType.char_sign, State.state_int_sign)
  transfer.set(State.state_initial, initialMap)
  const intSignMap = new Map()
  intSignMap.set(CharType.char_number, State.state_integer)
  intSignMap.set(CharType.char_point, State.state_point_without_int)
  transfer.set(State.state_int_sign, intSignMap)
  const integerMap = new Map()
  integerMap.set(CharType.char_number, State.state_integer)
  integerMap.set(CharType.char_exp, State.state_exp)
  integerMap.set(CharType.char_point, State.state_point)
  transfer.set(State.state_integer, integerMap)
  const pointMap = new Map()
  pointMap.set(CharType.char_number, State.state_fraction)
  pointMap.set(CharType.char_exp, State.state_exp)
  transfer.set(State.state_point, pointMap)
  const pointWithoutIntMap = new Map()
  pointWithoutIntMap.set(CharType.char_number, State.state_fraction)
  transfer.set(State.state_point_without_int, pointWithoutIntMap)
  const fractionMap = new Map()
  fractionMap.set(CharType.char_number, State.state_fraction)
  fractionMap.set(CharType.char_exp, State.state_exp)
  transfer.set(State.state_fraction, fractionMap)
  const expMap = new Map()
  expMap.set(CharType.char_number, State.state_exp_number)
  expMap.set(CharType.char_sign, State.state_exp_sign)
  transfer.set(State.state_exp, expMap)
  const expSignMap = new Map()
  expSignMap.set(CharType.char_number, State.state_exp_number)
  transfer.set(State.state_exp_sign, expSignMap)
  const expNumberMap = new Map()
  expNumberMap.set(CharType.char_number, State.state_exp_number)
  transfer.set(State.state_exp_number, expNumberMap)

  const length = s.length
  let state = State.state_initial

  for (let i = 0; i < length; i++) {
    const type = toCharType(s[i])
    if (!transfer.get(state).has(type)) {
      return false
    } else {
      state = transfer.get(state).get(type)
    }
  }
  return (
    state === State.state_integer ||
    state === State.state_point ||
    state === State.state_fraction ||
    state === State.state_exp_number ||
    state === State.state_end
  )
}
