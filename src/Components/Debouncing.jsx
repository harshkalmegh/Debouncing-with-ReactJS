import React from "react";

function Debouncing() {
  let counter = 0;
  const getData = () => {
    console.log("clicked", counter++);
    };
    
    const debounce =  (fn, d) => {
        let timer;
        return  () => {
          let context = this,
            args = arguments;
          clearTimeout(timer);
          timer = setTimeout(() => {
            getData.apply(context, args);
          }, d);
        };
      };
      const hitApi = debounce(getData, 300);

  return (
    <div>
      Type Here : <input type="text" onKeyUp={hitApi} autoFocus />
    </div>
  );
}

export default Debouncing;
