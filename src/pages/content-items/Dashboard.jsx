import { Chart as ChartJS,
  CategoryScale, 
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import { faker } from "@faker-js/faker"
import { useState } from "react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const optionsTDS = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: 'Grafik TDS (ppm)'
    },
  },
}

const optionsPH = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: 'Grafik pH'
    },
  },
}

const labels = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']

const dataTDS = {
  labels,
  datasets: [
    {
      label: 'TDS (ppm)',
      data: labels.map(() => faker.datatype.number({min: 100, max: 2000})),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',  
    }
  ]
}

const dataPH = {
  labels,
  datasets: [
    {
      label: 'pH',
      data: labels.map(() => faker.datatype.number({min: 1, max: 10})),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
}

function getDate() {
  const today = new Date()
  const date = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()

  return `${date}/${month}/${year}`
}

const dataSensor = [
  {
    sensor: "TDS",
    name: "PPM",
    nilai: 398, 
  },
  {
    sensor: "pH",
    name: "pH",
    nilai: 8.4,
  },
  {
    sensor: "Suhu Air",
    name: "°C",
    nilai: 25,
  },
  {
    sensor: "Humidity",
    name: "RH %",
    nilai: 88,
  },
  {
    sensor: "Suhu",
    name: "°C",
    nilai: 25,
  }
]

const Dashboard = () => {
  const [currenDate] = useState(getDate())
  
  return (
    <>
      <div className="flex justify-between w-full h-auto px-4 py-2 font-semibold text-slate-600 card-item">
        <p>Tanggal : {currenDate}</p>
        <p>Hari ke : 15</p>
      </div>
      <div className="card-charts">
        <Line options={optionsTDS} data={dataTDS}/>
      </div>
      <div className="card-charts">
        <Line options={optionsPH} data={dataPH}/>
      </div>
      <div className="grid h-full grid-cols-3 gap-2 mt-2">
        {dataSensor.map((sensor) => (
          <div className="card-box" key={dataSensor.sensor}>
            <h2 className="text-hijo-light">{sensor.nilai}</h2>
            <p className="text-xs">{sensor.name}</p>
            <p className="text-xs font-semibold ">{sensor.sensor}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard
