export type state = {
    default: number,
    loading: boolean,
    showError: boolean,
    houses: houses[],
    currentPage: number,
    housesPerPage: number
  }
  
export type houses = {
    address: string,
    homeowner: string,
    id: number,
    photoURL: string,
    price: number
  }

  