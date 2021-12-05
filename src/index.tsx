import React, {useState} from "react";

export type ToggleChildrenProps = {
    on: boolean,
    toggle: () => void,
    setOn: () => void,
    setOff: () => void,
}

export type ToggleChildrenFunction = (props: ToggleChildrenProps) => React.ReactElement;

export type ToggleProps = {
    defaultValue?: boolean,
    onToggle?: (on?: boolean) => void,
    children: ToggleChildrenFunction | ToggleChildrenFunction[]
}

export default function Toggle (props: ToggleProps) {
    const [toggleValue, setToggleValue] = useState<boolean>(props.defaultValue ?? false);

    return unwrapArray(props.children)({
        on: toggleValue,
        toggle: () => setToggleValue((prev) => !prev),
        setOn: () => setToggleValue(true),
        setOff: () => setToggleValue(false)
    });
}

function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg
}
