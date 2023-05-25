import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";
export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    // Trigger the filter action when filter criteria change
    dispatch(filterProducts(searchkey, sort, category));
  }, [searchkey, sort, category, dispatch]);

  return (
    <div className="left-side-container ml-5">
      <div className="col justify-content-start shadow p-3 bg-white rounded">
        <div className="col-md-3 ml-2" style={{marginTop:'13px'}}>
          <input
            style={{width: "auto"}}
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <select
          style={{width: "auto"}}
            className="form-control"
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">high to Low</option>
            <option value="lth">Low To High</option>
          </select>
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <select
          style={{width: "auto"}}
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="jeans">Jeans</option>
            <option value="mobiles">Mobiles</option>
            <option value="shoes">Men Shoes</option>
          </select>
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <button className="btn" onClick={()=>{dispatch(filterProducts(searchkey , sort , category))}}>FILTER</button>
        </div>
      </div>
    </div>
  );
}
