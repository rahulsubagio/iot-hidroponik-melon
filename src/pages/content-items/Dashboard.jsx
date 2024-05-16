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
      display: true,
      text: 'Grafik TDS (ppm)'
    },
  },
}

const optionsPH = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Grafik pH'
    },
  },
}

const labels = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']

const dataTDS = {
  labels,
  datasets: [
    {
      label: 'TDS',
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

const dataSensor = {
  
}

const Dashboard = () => {
  const [currenDate, setCurrentDate] = useState(getDate())
  
  return (
    <>
      <div className="flex justify-between w-full h-auto px-4 py-2 font-semibold card text-slate-600">
        <p>Tanggal : {currenDate}</p>
        <p>Hari ke : 15</p>
      </div>
      <div className="w-full h-auto p-2 mt-2 card">
        <Line options={optionsTDS} data={dataTDS}/>
      </div>
      <div className="w-full h-auto p-2 mt-2 card">
        <Line options={optionsPH} data={dataPH}/>
      </div>
    </>
  )
}

export default Dashboard
