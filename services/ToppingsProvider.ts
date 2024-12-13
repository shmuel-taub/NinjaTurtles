import React from 'react';
import {ToppingObj} from "../src/interfaces"
interface contectType {
    toppings: ToppingObj[];
    setList: (someParam:ToppingObj[]) => void;
    msg: string;
    setMsg: (someParam: string) => void;
}

const initValue = {
    toppings: [],
    setList: () => null,
    msg: "string",
    setMsg: () => null
}

const ToppingContext = React.createContext<contectType>(initValue);
export const ToppingProvider = ToppingContext.Provider;
// export const toppingConsumer = toppingContext.Consumer;
export default ToppingContext;