export let state;


export function managePets(state = {pets: []}, action) {
    switch (action.type) {
      case 'ADD_PET':
        return {pets: [...state.pets, action.payload]}
      case 'REMOVE_PET':
        let indexToRemove = state.pets
        .findIndex(pet => pet.id === action.payload)
        let pets = [...state.pets.slice(0, indexToRemove),...state.pets.slice(indexToRemove + 1)]
        return {...state, pets: pets};
      default:
        return state
    }
  }

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
      let container = document.getElementById('container')
      let petname = state.pets.map(function(pet){
        return `<li>${pet.name}</li>`
      })
      container.innerHtml = `<ul>${petname.join(' ')}</ul>`
}
