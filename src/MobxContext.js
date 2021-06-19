import React from "react"
import { useLocalStore } from "mobx-react"
import { createMobxStore } from "./mobxStore"

const MobxContext = React.createContext(null)

export const MobxProvider = ({children}) => {

	const mobxStore = useLocalStore(createMobxStore)

	return <MobxContext.Provider value={mobxStore}>
			 {children}
	</MobxContext.Provider>
}


export const useMobxStore = () => React.useContext(MobxContext)
