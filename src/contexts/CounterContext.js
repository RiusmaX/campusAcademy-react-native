import { createContext, useContext, useReducer } from 'react'

// Initialisation du contexte
const CounterContext = createContext()

// Définition des actions disponibles dans notre contexte
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

// Etat initial du contexte
const initialState = {
  counter: 0
}

/**
 * Traitement des actions
 * @param {*} state : Etat précédent l'action
 * @param {*} action : action pour mettre à jour l'état global
 * @returns nouvel état mit à jour
 */
const counterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      throw new Error(`Unhandled action type ${action.type}`)
  }
}

/**
 * Composant Provider : Distribue l'accès à l'état global aux enfants
 * @param {*} param0 : children : les enfants ayant besoin d'accéder à l'état
 * @returns Composant
 */
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

/**
 * Hook personnalisée permettant de valider l'appel du contexte
 * @returns { state, dispatch }
 */
const useCounter = () => {
  const context = useContext(CounterContext)
  // context = { state, dispatch }
  if (!context) throw new Error('useCounter must be used inside a CounterProvider')
  return context
}

export {
  useCounter,
  CounterProvider,
  actionTypes
}
