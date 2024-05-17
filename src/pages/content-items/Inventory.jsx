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
    sensor: "Air",
    nilai: 80,
  },
  {
    sensor: "pH Up",
    nilai: 80,
  },
  {
    sensor: "pH Down",
    nilai: 80,
  },
]

const Inventory = () => {
  return (
    <>
      <div className="grid h-full grid-cols-2 gap-2 mt-2">
        {waterLevel.map((sensor) => (
          <div className="card-box" key={waterLevel.sensor}>
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