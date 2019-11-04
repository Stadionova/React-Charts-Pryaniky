const data = {
    "dataDay": [
        ["Day", "Тысяч", { role: "style" }],
        ["1", 2, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2", 4, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["3", 8, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["4", 3, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["5", 3, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ],
    "dataMonth": [
        ["Month", "Тысяч", { role: "style" }],
        ["January", 10, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["February", 5, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["March", 13, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["April", 8, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["May", 19, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ],
    "dataYear": [
        ["Year", "Тысяч", { role: "style" }],
        ["2019", 50, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2018", 60, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["2017", 16, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["2016", 22, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2015", 28, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
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
