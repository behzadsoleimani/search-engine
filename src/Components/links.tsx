import React, { useEffect } from "react";
import {Link } from "@material-ui/core"


function Links({items} : any) {

  

  return (
    <div>
      {items.map((itm: any , index: number) => (
          <Link href={itm.link}  color="inherit" className="item-link" key={index} target="_blank">
    {index + 1} - {itm.displayLink} - 
    <span>- {itm.title}</span>
  </Link>
      ))}
    </div>
  );
}

export default Links;
