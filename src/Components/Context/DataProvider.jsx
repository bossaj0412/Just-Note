import React from 'react'
import { createContext,useState } from 'react'

export const DataContext= createContext(null);


const DataProvider = ({children}) => {

    const [Data, setData] = useState([])
    const [ArchiveNotes, setArchiveNotes] = useState([])
    const [DeleteNotes, setDeleteNotes] = useState([])
    const [empty, setempty] = useState("add")
  return (
    <DataContext.Provider value={{

        Data,
        setData,
        ArchiveNotes,
        setArchiveNotes,
        DeleteNotes,
        setDeleteNotes,
        empty,
        setempty


    }}>

        {children}

    </DataContext.Provider>
  )
}

export default DataProvider