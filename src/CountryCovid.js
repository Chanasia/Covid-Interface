import './CountryCovid.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Line, Pie } from 'react-chartjs-2';

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

function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}

function CountryCovid() {
    let arrJson = []
    let objCountry = []
    const [json, setJson] = useState(null)
    const [country, setCountry] = useState([])
    const [selectCountry, setSelectCountry] = useState({ title: "Thailand", code: "TH", id: 201 })
    const [chart, setChart] = useState({})
    const [pieChart, setPieChart] = useState({})
    const [day, setDay] = useState("7")

    const Chart = (selectDay) => {
        if (!selectCountry) {
            setChart({})
            return
        }
        let arrCases = []
        let arrCalCases = []
        let arrDeaths = []
        let arrCalDeaths = []
        let arrLabel = []

        axios.get("https://disease.sh/v3/covid-19/historical/" + selectCountry.code + "?lastdays=" + selectDay)
            .then(res => {
                arrLabel = Object.keys(res.data.timeline.cases);
                arrCases = Object.values(res.data.timeline.cases);
                arrDeaths = Object.values(res.data.timeline.deaths);
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

                setChart({
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
        axios.get("https://disease.sh/v3/covid-19/countries").then((response) => {
            setJson(response.data)
            arrJson = response.data
            objCountry = arrJson.map((item, i) => {
                return {
                    title: item.country,
                    code: item.countryInfo.iso2,
                    id: i
                }
            })
            setCountry(objCountry)
            PieChart(!selectCountry ? 0 : arrJson[selectCountry.id].population, !selectCountry ? 0 : arrJson[selectCountry.id].cases)
        })
    }, [])

    useEffect(() => {
        Chart(day)
        try {
            PieChart(!selectCountry.id ? 0 : json[selectCountry.id].population, !selectCountry ? 0 : json[selectCountry.id].cases)
          }
          catch(err) {
            PieChart(0, 0)
          }
    }, [selectCountry, day])
    

    if (!country || !json) {
        return null
    }

    const date = new Date()

    return (
        <div className="CountryCovid">
            <div className="ChooseCountry">
                <div className="label-choose-country">
                    เลือกประเทศ
                </div>
                <div className="grid">
                    <div className="autocomplete">
                        <Autocomplete className="cp-complete" autoSelect options={country}
                            onChange={(e, v) => {
                                setSelectCountry(v)
                            }}
                            defaultValue={{ title: "Thailand", code: "TH", id: 201 }}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField {...params}
                                    variant="outlined"
                                    label=""
                                />
                            )}
                        />
                    </div>
                    <div className={!selectCountry ? "flag-img hide" : "flag-img"}>
                        <img src={!selectCountry ? "" : "https://www.countryflags.io/" + selectCountry.code + "/flat/64.png"} />
                    </div>
                </div>
            </div>
            <div className="CountryCovidBoard">
                <div className="label time">
                    <h2>Country Covid-19</h2>
                    <h2>{formatDate(date.getTime())}</h2>
                </div>
                <div className="main-group">
                    <div className="group n1">
                        <span>
                            <img src="./img/icon/virus.png" className="icon" />
                            <div className="text">
                                <h4>ติดเชื้อเพิ่มขึ้นวันนี้</h4>
                                <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].todayCases)}</h2>
                            </div>
                        </span>
                        <div className="span-inline">
                            <span>
                                <img src="./img/icon/skull.png" className="icon" />
                                <div className="text">
                                    <h4>เสียชีวิตวันนี้</h4>
                                    <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].todayDeaths)}</h2>
                                </div>
                            </span>
                            <span>
                                <img src="./img/icon/patient.png" className="icon" />
                                <div className="text">
                                    <h4>เข้ารักษาใหม่</h4>
                                    <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].todayRecovered)}</h2>
                                </div>
                            </span>
                        </div>

                    </div>
                    <div className="group n2">
                        <span className="popution">
                            <div className="label">
                                <img src="./img/icon/people.png" className="icon" />
                                <h4>ประชากรทั้งประเทศ</h4>
                            </div>
                            <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].population)}</h2>
                        </span>
                        <div className="grid">
                            <div className="label-group">
                                <span>
                                    <div className="label">
                                        <img src="./img/icon/virus.png" className="icon" />
                                        <h4>ติดเชื้อสะสม</h4>
                                    </div>
                                    <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].cases)}</h2>
                                </span>
                                <span>
                                    <div className="label">
                                        <img src="./img/icon/skull.png" className="icon" />
                                        <h4>เสียชีวิตสะสม</h4>
                                    </div>
                                    <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].deaths)}</h2>
                                </span>
                                <span>
                                    <div className="label">
                                        <img src="./img/icon/patient.png" className="icon" />
                                        <h4>รักษาทั้งหมด</h4>
                                    </div>
                                    <h2>{commaSeparateNumber(!selectCountry ? 0 : json[selectCountry.id].recovered)}</h2>
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
            <div className="ChartCountry">
                <Line data={!selectCountry ? null : chart}
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
                <select className="retrospect-country" onChange={(e) => {
                    const selectDay = e.target.value
                    setDay(selectDay)
                    // Chart(selectDay)
                }}>
                    <option value="7">7 วันที่ผ่านมา</option>
                    <option value="14">14 วันที่ผ่านมา</option>
                    <option value="30">1 เดือนผ่านมา</option>
                    <option value="90">3 เดือนผ่านมา</option>
                </select>
            </div>
        </div>
    )
}

export default CountryCovid