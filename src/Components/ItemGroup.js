import React, { useState } from "react";
import MultipleSelectChip from "./Option";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

const ItemGroup = () => {
  const [user, setUser] = useState({ agree: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };

  const Manufacturer = [
    { label: "Dell" },
    { label: "HP" },
    { label: "Lenovo" },
  ];

  const brand = [{ label: "Dell" }, { label: "HP" }, { label: "Lenovo" }];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", marginLeft: 30, marginBottom: 10 }}>
          <label>Item Group Name</label>
          <input
            type="text"
            name="name"
            placeholder="Laptop"
            onChange={handleChange}
            style={{ marginLeft: 30, width: 710 }}
          />
        </div>

        <div style={{ display: "flex", marginLeft: 30, marginBottom: 30 }}>
          <label>Description</label>
          <textarea
            type="tel"
            name="mobile"
            onChange={handleChange}
            style={{ marginLeft: 75, width: 715 }}
          />
        </div>
        <div style={{ display: "flex", marginLeft: 30, marginBottom: 20 }}>
          <label>Unit</label>
          <select
            name="pcs"
            onChange={handleChange}
            style={{ marginLeft: 130, width: 300, height: 50 }}
          >
            <option value="pcs">Pcs</option>
            <option value="boxes">Boxes</option>
            <option value="dozons">Dozens</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: 30,
          }}
        >
          <label>Manufacturer</label>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Manufacturer}
            sx={{ width: 300, marginLeft: 8 }}
            renderInput={(params) => <TextField {...params} label="Dell" />}
          />
          <label style={{ marginLeft: 30 }}>Brand</label>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={brand}
            sx={{ width: 300, marginLeft: 5 }}
            renderInput={(params) => <TextField {...params} label="Dell" />}
          />
        </div>

        <div style={{ display: "flex", marginLeft: 30 }}>
          <label>Multiple Items?</label>
          <label style={{ marginLeft: 45, marginTop: 40, color: "red" }}>
            Attribute
          </label>
          <label style={{ marginTop: 40, marginLeft: 290, color: "red" }}>
            Options
          </label>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <div>
            <select
              name="RAM"
              onChange={handleChange}
              style={{ marginLeft: 155, height: 50, width: 300, marginTop: 20 }}
            >
              <option value="RAM">RAM</option>
            </select>
          </div>
          <div
            style={{ marginLeft: 50, height: 50, width: 300, marginTop: 20 }}
          >
            <MultipleSelectChip
              chip={[
                { key: 1, label: "4gb" },
                { key: 2, label: "8gb" },
                { key: 3, label: "16gb" },
              ]}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <div>
            <select
              name="Processor"
              onChange={handleChange}
              style={{ marginLeft: 155, height: 50, width: 300, marginTop: 20 }}
            >
              <option value="processor">Processor</option>
            </select>
          </div>
          <div
            style={{ marginLeft: 50, height: 50, width: 300, marginTop: 20 }}
          >
            <MultipleSelectChip
              chip={[
                { key: 1, label: "Rizon" },
                { key: 2, label: "AMD" },
                { key: 3, label: "Inten" },
              ]}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <div>
            <select
              name="DISC"
              onChange={handleChange}
              style={{ marginLeft: 155, height: 50, width: 300, marginTop: 20 }}
            >
              <option value="disc">DISC</option>
            </select>
          </div>
          <div
            style={{ marginLeft: 50, height: 50, width: 300, marginTop: 20 }}
          >
            <MultipleSelectChip
              chip={[
                { key: 1, label: "1TB" },
                { key: 2, label: "500GB" },
                { key: 3, label: "256GB" },
              ]}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ItemGroup;
