import { CommonActions , createNavigationContainerRef , StackActions } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef()

// learn in js navigationRef.isReady() then what is this is it method
// what is navigationRef is it object and is ready
// acc to my info: navigationRef is a object that has many key values pair and is ready is function that has some code to execute



export async function navigate(routeName:string , params?: object) {
    navigationRef.isReady()

    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.navigate(routeName, params))
    }
     
}