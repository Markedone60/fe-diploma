import React, { useEffect, useState } from "react";
import LastTicketItem from "./LastTicketItem";
import "./LastTickets.css"

export default function LastTickets() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://students.netoservices.ru/fe-diplom/routes/last")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch(() => { 
      })
  }, [])

  if (items.length === 0) return '';
  return (
    <section className="last">
      <h2 className="last-header">Последние билеты</h2>
      <div className="last-items">
        {items.map((item) => (
          <LastTicketItem ticket={item} key={item.departure._id}/>
        ))}
      </div>
    </section>
  )
}
