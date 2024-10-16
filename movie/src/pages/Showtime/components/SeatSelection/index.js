import React, { useState, useEffect } from "react";
import './a.css'
import { showtimeApi } from "../../Api/api";
import StickyFooter from "../TicketSelectedHeader/footer";
const SeatSelection = ({ selectedTime, setSelectedTime }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtimeData, setShowtimeData] = useState(null);

  // Tìm dữ liệu chiếu phim dựa trên movieId và ngày chiếu
  /* useEffect(() => {
    const movie = showtimeApi.find((m) => m.movieId === movieId);
    if (movie) {
      const showTime = movie.showTimes.find((time) => time.date === showDate);
      setShowtimeData(showTime);
    }
  }, [movieId, showDate]); */

  // Toggle chọn hoặc bỏ chọn ghế
  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const isSeatSelected = (seatNumber) => selectedSeats.includes(seatNumber);
  
  const timesList = showtimeApi[0].showTimes[0].times.find((item) => {

    return (item.time === selectedTime)
  })
  
  

  return (
    <div className="seat-selection-container">
      
      <h2>Select Seats</h2>
      <div className="seat-grid">
        {showtimeApi ? (
          timesList.seats.map((seat) => (
            <button
              key={seat.seatNumber}
              className={`seat ${seat.isBooked ? "booked" : isSeatSelected(seat.seatNumber) ? "selected" : ""}`}
              disabled={seat.isBooked}
              onClick={() => toggleSeat(seat.seatNumber)}
            >
              <i class="fa-solid fa-chair" style={{color: "#393a3c", display: "block"}}/>
              {seat.seatNumber}
              
            </button>
          ))
        ) : (
          <p>No seats available for this showtime.</p>
        )}
      </div>
      <div className="screen">Just a movie</div>
      <div className='pay'><h3>Pay: 10$</h3></div>
      <div className="actions">
        <button onClick={() => console.log(selectedSeats)}>Buy</button>
        <button onClick={() => console.log("Reservar")}>Cancel</button>
      </div>
      <StickyFooter/>
    </div>
  );
};

export default SeatSelection;
