const data = {
    "dataDay": [
        ["Day", "Тысяч", { role: "style" }],
        ["1", 900, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2", 90, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["3", 90, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["4", 90, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["5", 90, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ],
    "dataMonth": [
        ["Month", "Тысяч", { role: "style" }],
        ["January", 80, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["February", 80, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["March", 80, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["April", 80, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["May", 80, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ],
    "dataYear": [
        ["Year", "Тысяч", { role: "style" }],
        ["2019", 70, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2018", 70, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["2017", 70, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["2016", 70, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2015", 70, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ]
}

export function getDataYear() {
    return data.dataYear;
}

export function getDataMonth() {
    return data.dataMonth;
}

export function getDataDay() {
    return data.dataDay;
}
