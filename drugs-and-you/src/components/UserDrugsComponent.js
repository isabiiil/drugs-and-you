import React from "react";


const drug_list=['d','d','d','d','d'];
const disease_list=['s','s','s','s','s'];

export const UserDrugsComponent = props => {
    //props.drugs
    //props.diseases
    hello = drug_list.map{x,y=> <div key={y}>{x} </div> }
    hola = disease_list.map{x=> <div>{x} </div> }
  return (
    <div>
        <div>
            {hello}
         </div>
         <div>
            {hola}
        </div>
    </div>
      );
    };