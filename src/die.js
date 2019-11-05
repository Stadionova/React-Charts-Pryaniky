const die = {
    "dataDay": [
        ["Day", "Тысяч", { role: "style" }],
        ["1", 20, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2", 20, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["3", 20, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["4", 20, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["5", 20, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ],
    "dataMonth": [
        ["Month", "Тысяч", { role: "style" }],
        ["January", 30, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["February", 30, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["March", 30, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["April", 30, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["May", 30, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ],
    "dataYear": [
        ["Year", "Тысяч", { role: "style" }],
        ["2019", 40, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2018", 40, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
        ["2017", 40, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
        ["2016", 40, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
        ["2015", 40, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
    ]
}

export function getDataDie() {
    return die.dataYear;
}

export function getDataMonthDie() {
    return die.dataMonth;
}

export function getDataDayDie() {
    return die.dataDay;
}
