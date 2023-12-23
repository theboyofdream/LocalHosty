import AsyncStorage from "@react-native-async-storage/async-storage";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

type context = {
  selectedPaths: string[],
  setSelectedPaths: (paths: string[]) => void
}
export const GlobalStateContext = createContext<context>({
  selectedPaths: [],
  setSelectedPaths: () => { }
})

export function GlobalStateProvider(props: PropsWithChildren) {
  const [selectedPaths, setSelectedPaths] = useState<string[]>([])


  useEffect(() => {
    AsyncStorage.getItem('paths')
      .then(storedPaths => setSelectedPaths(JSON.parse(storedPaths ?? "[]") || []))
      .catch(err => {
        Alert.alert("Unable to load saved selected files & folders path.", `${err}`)
      })
  }, [])
  useEffect(() => {
    AsyncStorage.setItem('paths', JSON.stringify(selectedPaths))
      .catch(err => {
        Alert.alert("Unable to save selected files & folders path.", `${err}`)
      })
  }, [selectedPaths])

  return (
    <GlobalStateContext.Provider value={{ selectedPaths, setSelectedPaths }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

