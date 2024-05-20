const waterLevel = [
  {
    sensor: "Pupuk A",
    nilai: 80,
  },
  {
    sensor: "Pupuk B",
    nilai: 80,
  },
  {
    sensor: "AB Mix",
    nilai: 60,
  },
  {
    sensor: "pH Up",
    nilai: 30,
  },
  {
    sensor: "pH Down",
    nilai: 40,
  },
]

const Inventory = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {waterLevel.map((sensor) => (
          <div className="p-4 card-box" key={waterLevel.sensor}>
            <h2 className="text-hijo-light">{sensor.nilai}</h2>
            <p className="text-xs">%</p>
            <p className="text-xs font-semibold ">{sensor.sensor}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Inventory