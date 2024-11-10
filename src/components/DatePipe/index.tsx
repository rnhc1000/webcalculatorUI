import './styles.css';
import { useState } from 'react';
import { useDate } from '../../utils/date';

export default function DatePipe() {
  const [currentDate] = useState(useDate);

  return (
    <div className="date-pipe-text">
      <h5 >{currentDate}</h5>
    </div>
  );
}


