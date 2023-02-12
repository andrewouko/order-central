import { InputLabel, MenuItem, Select, TextareaAutosize, TextField  } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Image from "next/image";
import { it } from "node:test";
import React, { MouseEventHandler, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { RxTextAlignJustify } from "react-icons/rx";
import store from "store";
import { setFilter, setSearchItems } from "store/search_slice";

type SearchResult = {
  valid: Array<number>;
  invalid: Array<number>;
};

const validateSearch = (search: string): SearchResult => {
  let valid: Array<number> = [],
    invalid: Array<number> = [];
  search = search.replace(/ +/g, "");
  valid = search
    .split(",")
    .filter((item) => {
      if (item.length > 4) invalid.push(Number(item));
      else return item;
    })
    .map((item) => Number(item));
  return {
    valid,
    invalid,
  };
};

const InvalidOutput = (validation_res: SearchResult | undefined) => {
  return validation_res?.invalid.length ? (
    <span className="text-sm text-red-600">{`The following search items are invalid: ${validation_res.invalid.join(
      ", "
    )}`}</span>
  ) : null;
};

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const [validation_res, setValidationResults] = useState<SearchResult>();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<string>();

  const handleSearch = (search: string) => {
    setSearch(search);
    const validation_res = validateSearch(search);
    setValidationResults(validation_res);
    if (validation_res.valid.length)
      store.dispatch(setSearchItems(validation_res.valid));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(search);
  };
  const handleFilter = () => {
    handleSearch(search);
    if(category?.length) store.dispatch(setFilter(category));
  };
  return (
    <>
      <header className="flex items-center justify-between px-5 py-4 bg-white">
        <div className="flex items-center">
          <RxTextAlignJustify size={`2rem`} />

          <div className="relative ml-2 min-w-[500px]">
            <form method="post" onSubmit={handleSubmit}>
              <div className="flex flex-row">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <AiOutlineSearch />
                </div>
                <input
                  type="search"
                  id="search"
                  className="w-full pl-10 text-lg text-gray-500 bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search by item#, order#"
                  required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(event.target.value);
                  }}
                  value={search}
                />
                <button
                  type="submit"
                  className="text-white bg-indigo-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base px-8 py-2"
                >
                  Search
                </button>
                {InvalidOutput(validation_res)}
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          {
            <BsFilter
              className="w-5 h-5 text-gray-500 hover:bg-gray-600 hover:cursor-pointer hover:w-6 hover:h-6"
              onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}
            />
          }
          <div className="relative flex items-center">
            <button
              //   @click="dropdownOpen = !dropdownOpen"
              className="relative z-10 block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                alt="Profile Image"
                fill
              />
            </button>
            <div className="grid grid-flow-row auto-rows-max place-content-stretch ml-2">
              <div className="text-sm text-gray-500 font-medium">John Doe</div>
              <div className="text-xs text-gray-500 font-light">
                Super Admin
              </div>
            </div>
          </div>
        </div>
      </header>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
        className="px-12"
      >
        <div className="px-12 mb-5 grid grid-rows-2 gap-4 w-[500]">
          <TextField
            maxRows={10}
            aria-label="maximum height"
            placeholder="Search by order id or order number"
            defaultValue=""
            style={{ width: 200 }}
            label="Item"
            value={search}
          />
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value as string);
            }}
          >
            {["automatic" , "manual" , "electric" , "hydro-fueled"].map(cat => (<MenuItem key={cat} value={cat}>{cat}</MenuItem>))}
          </Select>
          <button
            type="submit"
            className="text-white bg-indigo-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base px-8 py-2"
            onClick={handleFilter}
          >
            Filter
          </button>
          {InvalidOutput(validation_res)}
        </div>
      </Drawer>
    </>
  );
}
