import './WorldWideCovid.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Pie, Line } from 'react-chartjs-2'

function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}

function formatDate(date) {
    const arrMonth = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    var d = new Date(date),
        month = '' + (arrMonth[d.getMonth()]),
        day = '' + d.getDate(),
        year = d.getFullYear() + 543;

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return "วันที่ " + day + ' ' + month + ' พ.ศ.' + year;
}

function WorldWideCovidBoard() {
    const [json, setJson] = useState(null)
    const [pieChart, setPieChart] = useState({})
    const [lineChart, setLineChart] = useState({})

    const LineChart = (selectDay) => {
        let arrCases = []
        let arrCalCases = []
        let arrDeaths = []
        let arrCalDeaths = []
        let arrLabel = []

        axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=" + selectDay)
            .then(res => {
                arrLabel = Object.keys(res.data.cases);
                arrCases = Object.values(res.data.cases);
                arrDeaths = Object.values(res.data.deaths);
                //cal cases
                arrCalCases = arrCases.map((item, i) => {
                    if (i === (arrCases.length - 1)) {
                        return item - arrCases[i - 1]
                    }
                    return arrCases[i + 1] - item
                })

                //cal deaths
                arrCalDeaths = arrDeaths.map((item, i) => {
                    if (i === (arrDeaths.length - 1)) {
                        return item - arrDeaths[i - 1]
                    }
                    return arrDeaths[i + 1] - item
                })

                setLineChart({
                    labels: arrLabel,
                    datasets: [
                        {
                            label: 'ติดเชื้อ',
                            data: arrCalCases,
                            borderColor: '#FF0000',
                            backgroundColor: '#FF0000',
                            fill: false,
                            cubicInterpolationMode: 'monotone',
                            tension: 0.4
                        },
                        {
                            label: 'เสียชีวิต',
                            data: arrCalDeaths,
                            borderColor: '#000000',
                            backgroundColor: '#000000',
                            fill: false,
                            cubicInterpolationMode: 'monotone',
                            tension: 0.4
                        }
                    ]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    const PieChart = (population, cases) => {
        const calCases = ((cases / population) * 100).toFixed(2)
        const calPopulation = 100 - calCases
        setPieChart({
            labels: ['ประชากรทั่วโลก ' + calPopulation + '%', 'คนติดเชื้อสะสม ' + calCases + '%'],
            datasets: [
                {
                    label: 'ผู้ติดเชื้อ',
                    data: [population, cases],
                    backgroundColor: ['#1e60c9', '#9e1111']
                }
            ]
        })
    }

    useEffect(() => {
        axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
            setJson(response.data)
            const population = response.data.population
            const cases = response.data.cases
            PieChart(population, cases)
        })
        LineChart("7")
    }, [])

    if (!json) {
        return null
    }

    const date = new Date()

    return (
        <div className="WorldWideCovid">
            <div className="WorldWideCovidBoard">
                <div className="label">
                    <h2>Worldwide Covid-19</h2>
                    <h2>{formatDate(date.getTime())}</h2>
                </div>
                <div className="main-group">
                    <div className="group n1">
                        <span>
                            <img src="./img/icon/virus.png" className="icon" />
                            <div className="text">
                                <h4>ติดเชื้อเพิ่มขึ้นวันนี้</h4>
                                <h2>{commaSeparateNumber(json.todayCases)}</h2>
                            </div>
                        </span>
                        <div className="span-inline">
                            <span>
                                <img src="./img/icon/skull.png" className="icon" />
                                <div className="text">
                                    <h4>เสียชีวิตวันนี้</h4>
                                    <h2>{commaSeparateNumber(json.todayDeaths)}</h2>
                                </div>
                            </span>
                            <span>
                                <img src="./img/icon/patient.png" className="icon" />
                                <div className="text">
                                    <h4>เข้ารักษาใหม่</h4>
                                    <h2>{commaSeparateNumber(json.todayRecovered)}</h2>
                                </div>
                            </span>
                        </div>

                    </div>
                    <div className="group n2">
                        <span className="popution">
                            <div className="label">
                                <img src="./img/icon/people.png" className="icon" />
                                <h4>ประชากรทั่วโลก</h4>
                            </div>
                            <h2>{commaSeparateNumber(json.population)}</h2>
                        </span>
                        <div className="grid">
                            <div className="label-group">
                                <span>
                                    <div className="label">
                                        <img src="./img/icon/virus.png" className="icon" />
                                        <h4>ติดเชื้อสะสม</h4>
                                    </div>
                                    <h2>{commaSeparateNumber(json.cases)}</h2>
                                </span>
                                <span>
                                    <div className="label">
                                        <img src="./img/icon/skull.png" className="icon" />
                                        <h4>เสียชีวิตสะสม</h4>
                                    </div>
                                    <h2>{commaSeparateNumber(json.deaths)}</h2>
                                </span>
                                <span>
                                    <div className="label">
                                        <img src="./img/icon/patient.png" className="icon" />
                                        <h4>รักษาทั้งหมด</h4>
                                    </div>
                                    <h2>{commaSeparateNumber(json.recovered)}</h2>
                                </span>
                            </div>
                            <div className="chart-pie">
                                <Pie data={pieChart}
                                    options={{
                                        rotation: 30,
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            }
                                        }
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="display-chart">
                <div className="ChartWorldWideCovid">
                    <Line data={lineChart}
                        options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Worldwide covid chart'
                                },
                            },
                            interaction: {
                                intersect: false,
                            },
                            scales: {
                                x: {
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'วันที่'
                                    }
                                },
                                y: {
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'ยอดคน'
                                    }
                                }
                            }
                        }}
                    />
                    <select className="retrospect-world-wide" onChange={(e) => {
                        const selectDay = e.target.value
                        LineChart(selectDay)
                    }}>
                        <option value="7">7 วันที่ผ่านมา</option>
                        <option value="14">14 วันที่ผ่านมา</option>
                        <option value="30">1 เดือนผ่านมา</option>
                        <option value="90">3 เดือนผ่านมา</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default WorldWideCovidBoard