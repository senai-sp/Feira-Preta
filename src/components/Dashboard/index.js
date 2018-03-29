import React from 'react'
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const data = [
            { nota: 'Nota 1', votos: 10000 },
            { nota: 'Nota 2', votos: 3000 },
            { nota: 'Nota 3', votos: 2000 },
            { nota: 'Nota 4', votos: 2780 },
            { nota: 'Nota 5', votos: 1890 },
        ];
        return (
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="nota" stroke="#4b4f56" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100 }} />
                <Legend width={100} wrapperStyle={{ right: '0' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar type="monotone" dataKey="votos" fill="#ef5f22" barSize={30} />
            </BarChart>
        )
    }
}

export default Dashboard