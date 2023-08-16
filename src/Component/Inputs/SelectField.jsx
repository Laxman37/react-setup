import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ onHandleSelect }) => {
  return (
    <select
      className=""
      id="select-option"
      onChange={(e) => {
        onHandleSelect(e.target.value); //return value this function wherever you call
      }}
    >
      <option value="" className="">
        -Select-
      </option>
      <option value="Latest" className="">
        Latest
      </option>
      <option value="Old" className="">
        Old
      </option>
    </select>
  );
};

SelectField.propTypes = {
  onHandleSelect: PropTypes.func,
};

export default SelectField;

//here is refrence tailwind css class  block appearance-none w-full bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
