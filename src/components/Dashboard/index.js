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
            { nota: 'Nota 0', votos: this.props.dashboard.totalVotesZero },
            { nota: 'Nota 1', votos: this.props.dashboard.totalVotesOne },
            { nota: 'Nota 2', votos: this.props.dashboard.totalVotesTwo },
            { nota: 'Nota 3', votos: this.props.dashboard.totalVotesThree },
            { nota: 'Nota 4', votos: this.props.dashboard.totalVotesFour },
            { nota: 'Nota 5', votos: this.props.dashboard.totalVotesFive },
        ];
        return (
            <React.Fragment>
                <h1 className="average">Média dos votos: {this.props.dashboard.average} </h1>
                <h1 className="total-votes">Total de votos: {this.props.dashboard.totalVotes} </h1>
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
    dashboard: state.dashboard
})

const mapDispatchToProps = dispatch => ({
    dispatchShowDashboard: () => {
        dispatch(showDashboard())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)