import { useState } from "react";
import Panel from "../../components/Panel/Panel";
import Header from "../../components/Header/Header";
import Titles from "../../components/Titles/Titles";
import Navbar from "../../components/Navbar/Navbar";
import "./Stall.css";
import supabase from "../../../supabase_config";
import { useEffect } from "react";

export default function AddItem() {
  const [showFields, setShowFields] = useState(false);
  const [item, setItem] = useState({ name: "", price: "", image: null });
  const [itemn,setItemn] = useState("");
  const [itemp,setItemp] = useState("");
  const [itemi,setItemi]  = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [items, setItems] = useState([]); // To store added items

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (files) {
  //     setItem({ ...item, image: files[0] });
  //     setFileName(files[0].name); // Display selected file name
  //   } else {
  //     setItem({ ...item, [name]: value });
  //   }
  // };

  function handlePadam(e)
  {
    setItemi(e.target.value);
  }
  function handleTit(e)
  {
    setItemn(e.target.value);
  }
  function handlePri(e)
  {
    setItemp(e.target.value);
  }
  useEffect(()=>
  {
    bringStall()
  },[items]);

  const bringStall = async () =>
  {
    const{data,error} = await supabase.from('stall').select("*");
    if (error)
    {
      console.log(error);
      
    }
    else
    {
      setItems(data);
      // console.log(data)
    }
  }

  const handleAddItem = async() => {
    // if (!item.name || !item.price) return; // Prevent empty submissions

    const {data,error}  = await supabase.from('stall').insert({
          padam : itemi,
          item_name : itemn,
          item_price : itemp
    });
    if (error)
    {
      console.log("Error",error);
       
    }
    setItemi("");
    setItemn("");
    setItemp("");

    // setItems([...items, { ...item, time: new Date().toLocaleTimeString() }]);
    // setItem({ name: "", price: "", image: null }); // Reset fields
    // setFileName("No file chosen"); // Reset file name display
    setShowFields(false); // Hide input fields after submission
  };

  const handleCancel = () => {
    setShowFields(false); // Hide form
    setItem({ name: "", price: "", image: null }); // Reset inputs
    setFileName("No file chosen"); // Reset file name display
  };

  return (
    <div>
         <Header />
         <Titles title={"Stall"} sub={"Add Items"} />
            <div className="p-4">
      <button onClick={() => setShowFields(true)} className="addbtn">
        Add Item
      </button>

      {showFields && (
        <div className="mt-4">
          <input
  type="text"
  name="name"
  placeholder="Item Name"
  value={itemn}
  onChange={handleTit}
  className="w-full"
/>
<input
  type="number"
  name="price"
  placeholder="Price"
  value={itemp}
  onChange={handlePri}
  className="w-full"
/>
<input
  type="text"
  placeholder="Image URL"
  value={itemi}
  onChange={handlePadam}
  className="w-full"
/>

          <label htmlFor="fileInput" className="file-label">
            Choose File
          </label>
          <span className="file-name">{fileName}</span>

          <div className="btn-group">
            <button
              onClick={handleAddItem}
              className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
            >
              Submit
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      
    </div>
    {/* Display added items using the Panel component */}
    <div className="mt-6">
        {items.map((itm, index) => (
          <Panel key={index} head={itm.item_name} para={`₹${itm.item_price}`} time={itm.created_at} padam={itm.padam} />
        ))}
      </div>

      <Navbar />
    </div>

  );
}
