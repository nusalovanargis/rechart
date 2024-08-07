import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {data} from './data/Data.tsx'

function App() {
  return (
      <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3} />
          <Line
              type="monotone"
              dataKey="angular"
              stroke="#F44236"
              strokeWidth={3}
          />
          <Line type="monotone" dataKey="vue" stroke="#FFCA29" strokeWidth={3} />
          <CartesianGrid strokeDasharray={3} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
      </LineChart>
  )
}

export default App
