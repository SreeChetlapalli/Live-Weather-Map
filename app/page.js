"use client";
import { useState, useEffect } from "react";
import Map from "@/components/map";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [eventType, setEventType] = useState("volcanoes")
  
    async function getCategories() {
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/categories`);
    const data = await res.json();
    setCategories(data.categories);

  }

  useEffect(() => {
    getCategories();
  }, []);
  

  async function getEvents() {
    const res = await fetch(
      `https://eonet.gsfc.nasa.gov/api/v3/categories/${eventType}`
    );
    const data = await res.json();
    setEvents(data.events);
    console.log(data.events);

  }

  useEffect(() => {
    getEvents();
  }, [eventType]);
  
  function handleSubmit(e) {
    e.preventDefault();

    getEvents();

  }
        
return <div>
  <div className = "absolute top-6 right-6 z-[9999]">
  <form onSubmit={handleSubmit}>
    <select 
    name = "eventType" 
    id = "eventType" 
    className = "bg-gray-700 text-white text-sm font-bold p-2 outline-none border-none focus:ring-2 focus:ring-neutral-600 transition rounded-full shadow"
    onChange={(e) => setEventType(e.target.value)}

    >

      
      {categories.map((category) => (
        <option 
        key={category.id}
        value={category.id} className="text-white text-sm font-bold "
        >
          {category.title}
          </option>
      ))}
    </select>
  </form>
  </div>
  <Map events = {events}/>
  </div>;
}