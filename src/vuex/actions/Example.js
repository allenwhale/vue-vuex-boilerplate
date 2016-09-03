import { createAction } from 'src/vuex-actions'
import { CHANGE_MSG, EXAMPLE_GET } from 'src/vuex/mutation-types'
import Apis from 'src/apis'

export const changeMsg = createAction(CHANGE_MSG)
export const exampleGet = createAction(EXAMPLE_GET, Apis.Example.get)
