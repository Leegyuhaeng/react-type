import React, {useCallback, useRef, useState} from "react";
import App, { ITodo } from "./App"

const Memo: React.FC<ITodo> = ({todo,color}) => {
    const [draggable, setDraggable] = useState<boolean>(false);
    const MemoRef = useRef<HTMLDivElement>(null);
    const memoMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        // if(draggable) {
        //     MemoRef.current!.style.top = e.clientY - (MemoRef.current as HTMLElement).clientWidth / 2 - 86 + "px"
        //     MemoRef.current!.style.left = e.clientX - (MemoRef.current as HTMLElement).clientHeight / 2 + "px"
        // }
        if(draggable && MemoRef.current) {
            MemoRef.current.style.top = e.clientY - MemoRef.current.clientWidth / 2 - 86 + "px"
            MemoRef.current.style.left = e.clientX - MemoRef.current.clientHeight / 2 + "px"
        }
    },[draggable])
    return (
        <div style={{
            width: "256px",
            height: "256px",
            background:color,
            padding: "24px",
            fontSize: "24px",
            borderRadius: "4px",
            cursor: "grab",
            boxShadow: "rgba(50,50,93,0.25) 0px 6px 12px -2px, rgba(0,0,0,0.3) 0px 3px 7px -3px"
        }}
        onMouseDown={() => {
            MemoRef.current!.style.position = "absolute";
            setDraggable(true);
        }}
        onMouseLeave={() => setDraggable(false)}
        onMouseUp={() => setDraggable(false)}
        onMouseMove={memoMove}
        ref={MemoRef}
        >
            <p>{todo}</p>
        </div>
    );
}
export default Memo;