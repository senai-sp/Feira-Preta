import React from 'react'
import { connect } from 'react-redux'
import { showDashboard } from '../../actions'
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
import './Dashboard.css'

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatchShowDashboard()
    }

    render() {
        const data = [
            { nota: 'Nota 1', votos: 10 }, // os votos não estão vindo divididos em categorias!
            { nota: 'Nota 2', votos: 32 },
            { nota: 'Nota 3', votos: 33 },
            { nota: 'Nota 4', votos: 34 },
            { nota: 'Nota 5', votos: 35 },
        ];
        return (
            <React.Fragment> 
            <h1 className="average">Média dos votos: "média"</h1>
            <BarChart width={(window.matchMedia("(min-width: 720px)").matches) ? 700 : 300} height={(window.matchMedia("(min-width: 720px)").matches) ? 500 : 300} data={data}>
                <XAxis dataKey="nota" stroke="#4b4f56" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 115 }} />
                <Legend width={100} wrapperStyle={{ right: '0' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar type="monotone" dataKey="votos" fill="#4b4f56" barSize={30} />
            </BarChart>
            </React.Fragment> 
        )
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard.dashboard
})

const mapDispatchToProps = dispatch => ({
    dispatchShowDashboard: () => {
        dispatch(showDashboard())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)