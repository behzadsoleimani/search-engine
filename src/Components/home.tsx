import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/action";
import Links from "./links";
function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.listItems);
  const [value , setValue] = useState("")

  useEffect(() => {
    fetchUsers(value);
  }, [value]);

  const fetchUsers = async (value: string) => {
    dispatch(fetchItems(value));
  };

  const handleChange = (event : any) => {
    setValue(event.target.value)
  }

  return (
    <div >
      <TextField className="search-input-container" label="Search ..." value={value} onChange={handleChange} variant="outlined" />
      {items && items.length ? <Links items={items} /> : null}
    </div>
  );
}

export default Home;
